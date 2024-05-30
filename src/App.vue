<template>
  <div id="app">
  <span>Hello Vue JS</span>
  <hr />
  <first-component />
  </div>
  
</template>

<script>
import FirstComponent from './components/FirstComponent.vue'
export default {
  components:{FirstComponent}
};
</script>

<style lang='scss' scoped>
div {
  span {
    color: green
  }
}
</style>
