// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import SNLItem from './components/SNLItem.vue'
import CasualItem from './components/CasualItem.vue'
import FreshStockItem from './components/FreshStockItem.vue'

Vue.config.productionTip = false
Vue.use(VueFire)
// see more: https://forum-archive.vuejs.org/topic/2036/component-inside-component-unknown-custom-element-error-vueify/4
Vue.component('snl-item', SNLItem)
Vue.component('casual-item', CasualItem)
Vue.component('fs-item', FreshStockItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
