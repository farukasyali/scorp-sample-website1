import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.use(VueRouter);

export const eventBus = new Vue();

const router = new VueRouter({
  routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
