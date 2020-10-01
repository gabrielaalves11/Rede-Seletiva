import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
