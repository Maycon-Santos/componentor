import { parentSymbol } from '../symbols'
import { bootstrapRegister } from '../utils/bootstrap'
import { watcherRegister } from './watcher-register'

export function watch (toWatch) {
  return (target, key, descriptor) => bootstrapRegister(target, () => {
    const realTarget = target[parentSymbol]
    const originalMethod = descriptor.value

    watcherRegister(realTarget, toWatch, originalMethod.bind(realTarget))
    originalMethod.bind(realTarget)()

    return originalMethod
  })
}
