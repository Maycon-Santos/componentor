export function initialAttrs (target, attrs) {
  attrs.forEach(attr => {
    if (typeof attr === 'object') {
      Object.keys(attr).forEach(key => {
        const value = attr[key]
        target.setAttribute(key, value)
      })
    }
  })
}
