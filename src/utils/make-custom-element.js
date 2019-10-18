// Implementar extenão de elementos que não sejam HTMLElement
export function makeCustomElement (selector, constructor) {
  return customElements.define(selector, constructor)
}
