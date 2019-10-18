import { parentSymbol } from '../symbols'
import { bootstrapRegister } from '../utils/bootstrap'

export function prepareEventRegister (target, originalMethod) {
  let $content, realTarget, bindedMethod

  function newMethod (...args) { return originalMethod.bind(this)(...args) }

  bootstrapRegister(target, baseComponent => {
    $content = baseComponent.shadowRoot || baseComponent
    realTarget = target[parentSymbol]
    bindedMethod = originalMethod.bind(realTarget)

    newMethod.updateQuery()
  })

  return (eventName, selector, options) => {
    newMethod.updateQuery = () => {
      $content
        .querySelector(selector)
        .addEventListener(eventName, bindedMethod, options)
    }
    return newMethod
  }
}
