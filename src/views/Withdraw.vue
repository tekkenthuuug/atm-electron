<template>
  <div class="h100 v-flex tc">
    <GoBackControl />
    <div>
      <h1>Input amount of money you want to withdraw</h1>
      <h1 class="amount">{{ Number(sum).toLocaleString() }}$</h1>
      <p v-if="Boolean(error)" class="error">{{ error }}</p>
    </div>
    <div class="value-selectors">
      <QuickSelect
        v-if="quickSelect"
        v-on:switch-to-other="toggleMode"
        v-on:set="setSumNum"
      />
      <div v-else>
        <Keypads v-on:append-num="appendSumNum" />
        <button @click="toggleMode" class="popular-amounts">
          See popular amounts
        </button>
      </div>
    </div>
    <button class="withdraw-btn" @click="handleWithdraw">
      Withdraw
    </button>
  </div>
</template>

<script>
import Keypads from "@/components/Keypads";
import GoBackControl from "@/components/GoBackControl";
import QuickSelect from "@/components/QuickSelect";

export default {
  name: "Withdraw",
  components: {
    Keypads,
    GoBackControl,
    QuickSelect
  },
  data() {
    return {
      sum: "0",
      error: " ",
      quickSelect: true,
      sumValid: false
    };
  },
  methods: {
    appendSumNum(action) {
      if (action === "C") {
        this.sum = "0";
        return;
      }
      if (this.sum === "0") {
        this.sum = String(action);
      } else {
        this.sum += action;
      }
    },
    setSumNum(sum) {
      this.sum = String(sum);
    },
    toggleMode() {
      this.quickSelect = !this.quickSelect;
    },
    validateSum() {
      const sum = Number(this.sum);
      if (sum % 5 === 0 && sum !== 0) {
        return true;
      }
      return false;
    },
    handleWithdraw() {
      if (!this.validateSum()) {
        this.error = "Amount must be divisible by 5";
        return;
      } else {
        this.error = " ";
        // @todo handle send request
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("../_shared-styles.scss");
.amount {
  margin-top: 12px;
}
.popular-amounts {
  background-color: rgb(0, 180, 180);
  border-radius: 4px;
  width: 90%;
  color: white;
  font-family: "Nunito";
  height: 28px;
  margin-top: 12px;
}
.withdraw-btn {
  width: 200px;
  height: 52px;
  $confirmBtn-color: rgba(200, 220, 80, 0.9);
  background-color: $confirmBtn-color;
  color: rgb(35, 35, 35);
  border-radius: 12px;
  font-size: 18px;
  font-family: "Nunito", sans-serif;
  text-transform: uppercase;
  font-weight: 800;
  &:disabled {
    cursor: default;
    background-color: rgba($confirmBtn-color, 0.7);
  }
}
.value-selectors {
  min-height: 50%;
}
</style>
