export default function (Vue, options) {
  let map = options.immutable || 'immutable'
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
    this[map] = {}
    // immutable injection
    if (options.parent && options.parent.$options.immutable) {
      shallowCopy(this[map], options.parent.$options.immutable)
    }
    const immutable = options.immutable
    if (immutable) shallowCopy(this[map], immutable)
    const _immutable = options._immutable
    if (_immutable) shallowCopy(this[map], _immutable)
  }
}

function shallowCopy (b, a) {
  for (let k in a) b[k] = a[k]
  return b
}
