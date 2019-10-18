export function prepareLifecycleCaller (component) {
  return symbol => component[symbol] && component[symbol].forEach(func => func())
}
