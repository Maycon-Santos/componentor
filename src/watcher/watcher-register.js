const watchers = {}

export function watcherRegister (target, toWatch, func) {
  let value = target[toWatch]
  Object.defineProperty(target, toWatch, {
    set: newValue => {
      func(value) // Old value
      value = newValue
    },
    get: () => value,
  })
}
