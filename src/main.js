import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import { routes } from "./routes";
import i18n from './i18n'

Vue.use(VueRouter);

export const eventBus = new Vue();

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  i18n,
  router
}).$mount('#app')
