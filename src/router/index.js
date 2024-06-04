import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "@/views/MainView.vue";
import OurCoffeeView from '@/views/OurCoffeeView.vue'
import GoodsPageView from '@/views/GoodsPageView.vue'
import ContactsView from '@/views/ContactsView.vue'

// firstly, what we use
Vue.use(VueRouter);
// setting up the routes
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: "/",
      component: MainView,
    },
    {
      path: "/our-coffee",
      component: OurCoffeeView,
    },
    {
      path: "/goods",
      component: GoodsPageView,
    },
    {
      path: "/contacts",
      component: ContactsView,
    },
  ],
});

export default router;
