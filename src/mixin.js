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
      this[map] = shallowCopy(options.parent.$options.immutable)
    }
    const immutable = options.immutable
    if (immutable) {
      for (let k in immutable) this[map][k] = immutable[k]
    }
    const _immutable = options._immutable
    if (_immutable) {
      for (let k in _immutable) this[map][k] = _immutable[k]
    }
  }
}

function shallowCopy (a) {
  var b = {}
  for (let k in a) b[k] = a[k]
  return b
}
