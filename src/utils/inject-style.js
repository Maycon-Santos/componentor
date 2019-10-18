export function injectStyle ($content, style) {
  if (style) {
    const $style = document.createElement('style')
    $style.textContent = style
    $content.appendChild($style)
  }
}