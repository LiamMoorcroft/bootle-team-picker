import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'
import App from './App'
import router from './router'
import store from './store/store'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.component('icon', Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
