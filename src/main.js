import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import Vuelidate from '@vuelidate/core';
// import VueCompositionAPI from '@vue/composition-api';
// import vuerouter library globally

import "./assets/scss/style.scss";
import "./filters";
Vue.config.productionTip = false;
// Vue.use(VueCompositionAPI);
// Vue.use(Vuelidate);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
