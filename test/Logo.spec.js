import { mount } from '@vue/test-utils'
import Async from '@/components/asyncPractice.vue'

describe('Async', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Async)
    expect(wrapper.vm).toBeTruthy()
  })
})
