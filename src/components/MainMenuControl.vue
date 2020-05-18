<template>
  <LeftTopControl text="Main menu" @click="goMainMenu" />
</template>

<script>
import LeftTopControl from "@/components/LeftTopControl.vue";

export default {
  name: "MainMenuControl",
  components: {
    LeftTopControl
  },
  methods: {
    goMainMenu() {
      this.$router.push("/mainmenu");
    }
  }
};
</script>

<style></style>
