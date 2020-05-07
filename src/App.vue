<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
  name: "Home",
  components: {
    Navigation
  }
};
</script>

<style lang="scss">
#app {
  position: relative;
  color: rgb(240, 240, 240);
  font-family: "Nunito", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
