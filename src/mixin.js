export default function (Vue, options) {
  const map = options.immutable || '$immutable'

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
    const options = this.$options
    // immutable injection
    if (options.immutable) {
      this[map] =
        typeof options.immutable === 'function' ?
          options.immutable() :
          options.immutable
    } else if (options.parent && options.parent[map]) {
      this[map] = options.parent[map]
    }
  }
}
