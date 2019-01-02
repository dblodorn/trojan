export default text => {
  const str = text.substring(0, 140) + '...'
  return str.replace(/(<p[^>]+?>|<p>|<\/p>)/img, '')
}