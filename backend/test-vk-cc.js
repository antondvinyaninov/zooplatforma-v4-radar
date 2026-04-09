const fetch = require('node-fetch');

async function test() {
  const url = 'https://api.vk.com/method/utils.getShortLink';
  const params = new URLSearchParams();
  params.append('url', 'https://vk.me/join/AJQ1d');
  params.append('private', '1');
  params.append('v', '5.199');
  params.append('access_token', 'a35f3273a35f3273a35f327330a060474daa35fa35f3273cae5027ce163887aebc53559'); // the VK_SERVICE_KEY

  const res = await fetch(url, {
    method: 'POST',
    body: params
  });
  console.log(await res.json());
}
test();
