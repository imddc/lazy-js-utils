export function download(url: string) {
  try {
    const a: HTMLAnchorElement = document.createElement('a')
    a.href = url
    a.download = url.substring(url.lastIndexOf('/') + 1, url.length)
    a.click()
  }
  catch (error: any) {
    throw new Error(error)
  }
}
