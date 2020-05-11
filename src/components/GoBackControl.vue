<template>
  <LeftTopControl text="Go back" @click="goBack" />
</template>

<script>
import LeftTopControl from "@/components/LeftTopControl.vue";

export default {
  name: "GoBackControl",
  components: {
    LeftTopControl
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style></style>
