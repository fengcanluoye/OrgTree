import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import Vue2OrgTree from 'vue2-org-tree'
Vue.use(Vue2OrgTree);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
