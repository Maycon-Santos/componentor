import { attributeChangedCallbackSymbol } from '../symbols'

export function attrWatcher (component, attrName, oldValue) {
  if (component[attributeChangedCallbackSymbol]) {
    component[attributeChangedCallbackSymbol][attrName].forEach(func => func(oldValue))
  }
}