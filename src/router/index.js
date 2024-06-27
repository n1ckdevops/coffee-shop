import Vue from "vue";
import VueRouter from "vue-router";
import MainView from "@/views/MainView.vue";
import OurCoffeeView from "@/views/OurCoffeeView.vue";
import GoodsPageView from "@/views/GoodsPageView.vue";
import ContactsView from "@/views/ContactsView.vue";
import ThankYouView from "@/views/ThankYouView.vue";
import GoodItemView from "@/views/GoodItemView.vue";

// firstly, what we use
Vue.use(VueRouter);
// setting up the routes
const router = new VueRouter({
  mode: "history",
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
    {
      path: "/thank-you",
      component: ThankYouView,
    },
    { name: "coffee", path: "/our-coffee/:id", component: GoodItemView },
    { name: "goods", path: "/goods/:id", component: GoodItemView },
  ],
});

export default router;
