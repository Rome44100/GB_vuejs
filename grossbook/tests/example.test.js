import TestComponent from './TestComponent.vue'
import { mount } from '@vue/test-utils'

describe ('TestComponent', () => {
  test ('Content of the TestComponent', () => {
    const Wrapper = mount (TestComponent, {
      propsData: {
        message: 'Hello from test!'
      }
    })
    // проверить 
    expect (Wrapper.text()).toEqual('The message is: Hello from test!')
  })
})