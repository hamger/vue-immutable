import applyMixin from './mixin'

function install (Vue, options = {}) {
  applyMixin(Vue, options.immutable || 'immutable')
}

export default {
  install
}
