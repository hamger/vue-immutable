// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
// import VueImmutable from '../../dist/vue-immutable.min.js'
// import VueImmutable from '@'
const VueImmutable = require('../../dist/vue-immutable.min.js')

Vue.use(VueImmutable)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  immutable: '--',
  components: { App },
  template: '<App/>'
})
