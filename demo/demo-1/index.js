// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Immutable from '@'

Vue.use(Immutable, {
  immutable: '$i'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  immutable () {
    return {
      now () {
        return Date.now()
      }
    }
  },
  components: { App },
  template: '<App/>'
})
