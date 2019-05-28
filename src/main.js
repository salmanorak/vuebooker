import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import resource from 'vue-resource'
import CustomFilters from './CustomFilters'

Vue.config.productionTip = false
Vue.use(resource)

new Vue({
  router,
  store,
  resource,
  CustomFilters,
  render: h => h(App)
}).$mount('#app')
