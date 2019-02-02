
import Vue from 'vue'
import Immutable from '../src'

describe('mixin', () => {
  it('support map and function ', () => {
    Vue.use(Immutable, {immutable: 'i'})
    const vm = new Vue({
      immutable: {
        msg: 'hello',
        msg2: function () {
          return 'world'
        }
      }
    })
    expect(vm.i.msg).toBe('hello')
    expect(vm.i.msg2).toBe('world')
  })
})
