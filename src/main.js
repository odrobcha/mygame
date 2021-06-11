import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store/store'
import router from './router'
import VueI18n from 'vue-i18n'
import i18n from './i18n';
import {requester} from './helper';
export const bus = new Vue();
import SlitherSlider from 'slither-slider';
Vue.use(SlitherSlider);


Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueI18n)
Vue.use(requester)

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
