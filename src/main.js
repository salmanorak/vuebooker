import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import resource from 'vue-resource'
import CustomFilters from './CustomFilters'
import moment from 'moment'
import momentTr from 'moment/locale/tr'
import vuemoment from 'vue-moment'
import customFunctions from './JS/customFunctions'

Vue.config.productionTip = false
Vue.use(resource)
Vue.use(vuemoment, { moment })

new Vue({
  router,
  store,
  resource,
  render: h => h(App)
}).$mount('#app')
