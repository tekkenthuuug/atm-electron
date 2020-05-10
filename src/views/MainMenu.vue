<template>
  <div class="tc v-flex">
    <LeftTopControl text="Exit" @click="exit" />
    <div>
      <BankLogo />
      <p>Choose operation below</p>
    </div>
    <div class="operation-grid">
      <div
        class="operation-button cyan-glow-onhover"
        @click="redirectTo('/checkbalance')"
      >
        Check balance
      </div>
      <div
        class="operation-button cyan-glow-onhover"
        @click="redirectTo('/withdraw')"
      >
        Withdraw
      </div>
      <div
        class="operation-button cyan-glow-onhover"
        @click="redirectTo('/deposit')"
      >
        Deposit
      </div>
    </div>
  </div>
</template>

<script>
import LeftTopControl from "@/components/LeftTopControl.vue";
import BankLogo from "@/components/BankLogo.vue";

export default {
  name: "MainMenu",
  components: {
    LeftTopControl,
    BankLogo
  },
  methods: {
    exit() {
      this.$store.commit("reset");
      this.$router.push("/");
    },
    redirectTo(route) {
      this.$router.push(route);
    }
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
