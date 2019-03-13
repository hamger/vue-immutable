// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Immutable from '../../dist/vue-immutable.min.js'
// import Immutable from '@'

Vue.use(Immutable)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  immutable: '--',
  components: { App },
  template: '<App/>'
})
