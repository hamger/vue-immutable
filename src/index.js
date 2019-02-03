import applyMixin from './mixin'

function install (Vue, options = {}) {
  if (options instanceof Object) applyMixin(Vue, options)
  else throw Error(`vue-immutable: options must be a object.`)
}

export default {
  install
}
