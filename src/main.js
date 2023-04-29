import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import method from './utilities/axios-setup'
import urlPublic from './utilities/axios-public'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  urlPublic,
  method,
  render: h => h(App)
}).$mount('#app')
