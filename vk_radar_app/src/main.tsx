import { createRoot } from 'react-dom/client';
import vkBridgePkg from '@vkontakte/vk-bridge';
import { AppConfig } from './AppConfig.tsx';

const vkBridge = vkBridgePkg && 'default' in vkBridgePkg ? (vkBridgePkg as any).default : vkBridgePkg;

window.addEventListener('error', (e) => {
  document.body.innerHTML = `<div style="padding: 20px; color: red; font-family: monospace;">
    <h3>Глобальная Ошибка (Global Error)</h3>
    <pre>${e.error?.stack || e.message}</pre>
  </div>`;
});

vkBridge.send('VKWebAppInit');

createRoot(document.getElementById('root')!).render(<AppConfig />);

if (import.meta.env.MODE === 'development') {
  import('./eruda.ts');
}
