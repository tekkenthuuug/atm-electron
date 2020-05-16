<template>
  <div class="tc v-flex">
    <ExitControl />
    <div>
      <BankLogo />
      <p>Choose operation below</p>
    </div>
    <div class="operation-grid">
      <div
        v-for="operation in operations"
        :key="operation.name"
        class="operation-button cyan-glow-onhover"
        @click="redirectTo(operation.path)"
      >
        {{ operation.name }}
      </div>
    </div>
  </div>
</template>

<script>
import ExitControl from "@/components/ExitControl.vue";
import BankLogo from "@/components/BankLogo.vue";
import { MAIN_PAGE_OPERATIONS } from "@/constants.js";
const operations = MAIN_PAGE_OPERATIONS;

export default {
  name: "MainMenu",
  components: {
    ExitControl,
    BankLogo
  },
  methods: {
    redirectTo(route) {
      this.$router.push(route);
    }
  },
  data() {
    return {
      operations
    };
  }
};
</script>

<style lang="scss">
@import "@/_shared-styles.scss";

.operation-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
  align-items: center;
}
.operation-button {
  cursor: pointer;
  padding: 1rem;
  background-color: rgba(#fff, 0.18);
  transition: all 0.2s ease-in-out;
  font-size: 20px;
  border-radius: 4px;
}
</style>
