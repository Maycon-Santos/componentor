import * as symbols from '../symbols'

export function lifeCycleRegister (cycle) {
  return (target, key, descriptor) => {
    const originalMethod = descriptor.value
    const realTarget = target[symbols.parentSymbol]
    const cycleSymbol = symbols[cycle + 'Symbol']

    if (!target[cycleSymbol]) {
      target[cycleSymbol] = []
    }

    target[cycleSymbol].push(originalMethod.bind(realTarget))

    return originalMethod
  }
}
