/**
 * http重定向到https
 */
export function httpsRedirect() {
  if (location.protocol !== 'https:')
    location.replace(`https://${location.href.split('//')[1]}`)
}
