<template>
  <LeftTopControl text="Exit" @click="exit" />
</template>

<script>
import LeftTopControl from "@/components/LeftTopControl.vue";
export default {
  name: "ExitControl",
  components: {
    LeftTopControl
  },
  methods: {
    exit() {
      this.$store.commit("reset");
      this.$router.push("/");
    }
  }
};
</script>

<style></style>
