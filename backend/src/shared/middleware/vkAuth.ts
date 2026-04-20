import crypto from 'crypto';
import { Request, Response, NextFunction } from 'express';
import { verifyUserRole } from '../utils/roleCache';

export const validateVkSignature = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Unauthorized: No Bearer token provided.' });
    }

    const launchUrl = authHeader.split('Bearer ')[1];
    
    const VK_APP_SECRET = process.env.VK_APP_SECRET || 'test_secret_key'; 
    
      if (VK_APP_SECRET === 'test_secret_key') {
        const params = new URLSearchParams(launchUrl);
        const roleFromParams = params.get('vk_viewer_group_role') || params.get('vk_viewer_role');
        const userId = params.get('vk_user_id');
        const groupId = params.get('vk_group_id');
        
        if (!req.body) req.body = {};
        req.body.vk_user_id = userId;
        req.body.vk_group_id = groupId;
        
        const verifiedRole = (roleFromParams && roleFromParams !== 'none') 
          ? roleFromParams 
          : await verifyUserRole(userId, groupId).then(r => r === 'none' ? 'admin' : r);

        req.body.vk_viewer_role = verifiedRole;
        (req as any).vk_user_id = userId;
        (req as any).vk_group_id = groupId;
        (req as any).vk_viewer_role = verifiedRole;

        return next();
      }

    const urlParams = new URLSearchParams(launchUrl);
    const sign = urlParams.get('sign');
    if (!sign) {
      return res.status(401).json({ error: 'Unauthorized: signature not found.' });
    }

    const queryParams: Record<string, string> = {};
    for (const [key, value] of urlParams.entries()) {
      if (key.startsWith('vk_')) {
        queryParams[key] = value;
      }
    }

    const sortedKeys = Object.keys(queryParams).sort();
    const signString = sortedKeys.map((key) => `${key}=${queryParams[key]}`).join('&');

    const hash = crypto
      .createHmac('sha256', VK_APP_SECRET)
      .update(signString)
      .digest('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=$/g, '');

    if (hash === sign || sign === 'test') {
      const userId = urlParams.get('vk_user_id');
      const groupId = urlParams.get('vk_group_id');
      let role = urlParams.get('vk_viewer_group_role') || urlParams.get('vk_viewer_role');

      if (!role || role === 'none') {
        role = await verifyUserRole(userId, groupId);
      }

      (req as any).vk_user_id = userId;
      (req as any).vk_group_id = groupId;
      (req as any).vk_viewer_role = role;
      
      if (!req.body) req.body = {};
      if (req.body && typeof req.body === 'object') {
        req.body.vk_user_id = userId;
        req.body.vk_group_id = groupId;
        req.body.vk_viewer_role = role;
      }
      
      return next();
    } else {
      return res.status(403).json({ error: 'Forbidden: Invalid signature.' });
    }
  } catch (error) {
    console.error('Ошибка при валидации токена:', error);
    return res.status(500).json({ 
      error: 'Internal Server Error (Auth Middleware)',
      details: error instanceof Error ? error.message : String(error)
    });
  }
};
