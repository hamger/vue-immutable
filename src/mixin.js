export default function (Vue, map) {
  const version = Number(Vue.version.split('.')[0])

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vueImmutableInit })
  } else {
    // override init and inject vue-immutable init procedure
    // for 1.x backwards compatibility.
    const _init = Vue.prototype._init
    Vue.prototype._init = function (options = {}) {
      options.init = options.init ?
        [vueImmutableInit].concat(options.init) :
        vueImmutableInit
      _init.call(this, options)
    }
  }

  /**
   * VueImmutable init hook, injected into each instances init hooks list.
   */
  function vueImmutableInit () {
    const immutable = this.$options.immutable
    // immutable injection
    if (immutable) {
      this[map] = {}
      for (let key in immutable) {
        let val = immutable[key]
        if (typeof val === 'function') {
          this[map][key] = val.call(this)
        } else {
          this[map][key] = val
        }
      }
    }
  }
}
