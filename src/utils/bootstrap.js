import { bootstrapSymbol } from '../symbols'

export function bootstrapRegister (target, func) {
  if (!target[bootstrapSymbol]) {
    target[bootstrapSymbol] = []
  }

  target[bootstrapSymbol].push(func)
}

export function bootstrap (baseComponent, target) {
  if (target[bootstrapSymbol]) {
    target[bootstrapSymbol].forEach(func => func(baseComponent))
  }
}
