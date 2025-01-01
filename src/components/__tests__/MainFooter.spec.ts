import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MainFooter from '../MainFooter.vue'

describe('MainFooter', () => {
  it('renders properly', () => {
    // const wrapper = mount(MainFooter, { props: { msg: 'Hello Vitest' } })
    const wrapper = mount(MainFooter)
    expect(wrapper.text()).toContain('Made using')
    expect(wrapper.text()).toContain('@championswimmer')
  })
})
