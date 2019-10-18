import { parentSymbol, attributeChangedCallbackSymbol } from '../symbols'
import { bootstrapRegister } from '../utils/bootstrap'

export function watchAttr (attrName) {
  return (target, {}, descriptor) => bootstrapRegister(target, () => {
    const originalMethod = descriptor.value
    const bindedMethod = originalMethod.bind(target)
    const realTarget = target[parentSymbol]

    if (!realTarget[attributeChangedCallbackSymbol]) {
      realTarget[attributeChangedCallbackSymbol] = {}
    }

    if (!realTarget[attributeChangedCallbackSymbol][attrName]) {
      realTarget[attributeChangedCallbackSymbol][attrName] = []
    }

    realTarget[attributeChangedCallbackSymbol][attrName].push(bindedMethod)

    return originalMethod
  })
}
