export default function (Vue, options) {
  const map = options.immutable || 'immutable'
  let copy = options.deep ?
    (child, parent) => {
      Object.assign(child, deepCopy(parent))
    } :
    (child, parent) => {
      Object.assign(child, parent)
    }

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
      copy(this[map], options.parent.$options.immutable)
    }
    const immutable = options.immutable
    if (immutable) copy(this[map], immutable)
    const _immutable = options._immutable
    if (_immutable) copy(this[map], _immutable)
  }
}

function deepCopy (obj) {
  let target = {}
  Reflect.ownKeys(obj).forEach(key => {
    const val = obj[key]
    // avoid loop import, just like: obj.key = obj
    if (val === obj) return
    target[key] = isObject(val) ? deepCopy(val) : val
  })
  return target
}

function isObject (o) {
  return (
    Object.prototype.toString.call(o).replace(/\[object\s|\]/g, '') === 'Object'
  )
}
