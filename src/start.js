import { parentSymbol, connectedCallbackSymbol, disconnectedCallbackSymbol, adoptedCallbackSymbol, attributeChangedCallbackSymbol } from './symbols'
import { makeCustomElement } from './utils/make-custom-element'
import { renderTemplate } from './utils/render-template'
import { injectStyle } from './utils/inject-style'
import { initialAttrs } from './attrs/initial-attrs'
import { prepareLifecycleCaller } from './lifecycle/lifecycle-caller'
import { attrWatcher } from './attrs/watcher'

import { bootstrap } from './utils/bootstrap'

export function WebComponent ({
  selector,
  template,
  style,
  attrs = [],
  useShadow = true,
}) {
  return Component => {
    const component = new Component()
    const lifecycleCaller = prepareLifecycleCaller(component)

    class Base extends HTMLElement {
      constructor () {
        super()

        const $content = useShadow
          ? this.attachShadow({ mode: 'open' })
          : this

        component.__proto__[parentSymbol] = component
        component.__proto__.attrs = this.attributes

        renderTemplate($content, template)
        injectStyle($content, style)

        bootstrap(this, component)
      }

      static get observedAttributes () {
        return attrs
          .map(attr => typeof attr === 'object' ? Object.keys(attr) : attr)
          .flat()
      }

      connectedCallback () {
        initialAttrs(this, attrs)
        lifecycleCaller(connectedCallbackSymbol)
      }

      disconnectedCallback () { lifecycleCaller(disconnectedCallbackSymbol) }

      adoptedCallback () { lifecycleCaller(adoptedCallbackSymbol) }

      attributeChangedCallback (...args) { attrWatcher(component, ...args) }
    }

    makeCustomElement(selector, Base)
  }
}