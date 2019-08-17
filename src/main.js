import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

import App from './App.vue'
import router from './router'
import './registerServiceWorker'


Vue.use(BootstrapVue)
Vue.use(ElementUI, {
  locale
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')