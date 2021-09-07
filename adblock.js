export default async function detectAdBlock() {
  let adBlockEnabled = false
  const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/show_ads.js';
  try {
    await fetch(new Request(googleAdUrl), {
      method: 'HEAD',
      mode: 'no-cors'
    }).catch(_ => adBlockEnabled = true)
  } catch (e) {
    adBlockEnabled = true
  }
  return adBlockEnabled;
}
