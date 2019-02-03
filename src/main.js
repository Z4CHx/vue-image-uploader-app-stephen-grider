import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import store from "./store";
import AuthHandler from "./components/AuthHandler";
import Galleries from "./components/Galleries";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/oauth2/callback", component: AuthHandler },
    { path: "/", component: Galleries }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
