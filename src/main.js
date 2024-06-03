import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import vuerouter library globally

import "./assets/scss/style.scss";
Vue.config.productionTip = false;

// secondly, whole web app
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");


