import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import vuerouter library globally

import "./assets/scss/style.scss";
Vue.config.productionTip = false;

// secondly, whole web app
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
