<template>
  <div class="wrapper">
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import MainView from "./views/MainView.vue";
import FooterComponent from "./components/FooterComponent.vue";
export default {
  components: { MainView, FooterComponent },
};
</script>
