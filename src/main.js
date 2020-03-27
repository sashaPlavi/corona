import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import store from "./store";
import Home from "./components/Home.vue";
import CoronaList from "./components/CoronaList";
import Searching from "./components/Searching";
import About from "./components/About";

Vue.config.productionTip = false;
Vue.use(VueRouter);
export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/list", component: CoronaList },
    { path: "/searching", component: Searching },
    { path: "/about", component: About }
  ]
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
