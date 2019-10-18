import { WebComponent } from './start'
import { on } from './events'
import { watch } from './watcher'
import { watchAttr } from './attrs'
import { onConnect, onDisconnect } from './lifecycle'

export { WebComponent, on, watch, watchAttr, onConnect, onDisconnect }

// componentor

/*
@WebComponent({
  selector: 'x-test',
  template: '<div><button>Mudar cor</button></div>',
  style: 'div { display: flex; justify-content: center; align-items: center; width: 300px; height: 300px; background-color: red; }',
  attrs: [
    { prop1: 'default value' },
    'prop2',
  ],
})
class Test {
  currentColor = 'red'

  @onConnect
  connect () {
    console.log('onConnect')
  }

  @onDisconnect
  disconnect () {
    console.log('onDisconnect')
  }

  @on('click', 'button')
  changeColor () {
    if (this.currentColor === 'red') {
      this.currentColor = 'blue'
    } else {
      this.currentColor = 'red'
    }
  }

  @watch('currentColor')
  setColor () {
    console.log(this.currentColor)
  }

  @watchAttr('prop1')
  watchAttr () {
    console.log(this.attrs, 'this')
  }
}

document.querySelector('body').appendChild(document.createElement('x-test'))
*/