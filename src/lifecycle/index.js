import { lifeCycleRegister } from './lifecycle-register'

export const onConnect = lifeCycleRegister('connectedCallback')
export const onDisconnect = lifeCycleRegister('disconnectedCallback')
export const onAdopt = lifeCycleRegister('adoptedCallback')
export const onPropChange = lifeCycleRegister('attributeChangedCallback')
