<template>
  <div class="h100 v-flex tc">
    <GoBackControl />
    <div>
      <h1>Input amount of money you want to withdraw</h1>
      <h1 class="amount">{{ Number(amount).toLocaleString() }}$</h1>
      <p v-if="Boolean(error)" class="error">{{ error }}</p>
    </div>
    <div class="value-selectors">
      <QuickSelect
        v-if="quickSelect"
        v-on:switch-to-other="toggleMode"
        v-on:set="setAmount"
      />
      <div v-else>
        <Keypads v-on:append-num="changeAmount" />
        <button @click="toggleMode" class="popular-amounts">
          See popular amounts
        </button>
      </div>
    </div>
    <button class="withdraw-btn confirm-btn" @click="handleWithdraw">
      Withdraw
    </button>
  </div>
</template>

<script>
import axios from "axios";
import { API_BASE_URL } from "@/constants.js";
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
      amount: "0",
      error: " ",
      quickSelect: true
    };
  },
  methods: {
    changeAmount(action) {
      if (action === "C") {
        this.amount = "0";
        return;
      }
      if (this.amount === "0") {
        this.amount = String(action);
      } else {
        this.amount += action;
      }
    },
    setAmount(sum) {
      this.amount = String(sum);
    },
    toggleMode() {
      this.quickSelect = !this.quickSelect;
    },
    validateSum() {
      const sum = Number(this.amount);
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
        const Authorization = "Bearer " + this.$store.state.token;
        axios
          .put(
            `${API_BASE_URL}/balance/withdraw`,
            { amount: this.amount },
            { headers: { Authorization } }
          )
          .then(resp => {
            if (resp.data.error) {
              this.error = resp.data.error || "Try again later.";
            } else {
              this.$router.push("/mainmenu/checkbalance");
            }
          })
          .catch(err => {
            this.error = err.response.data.error || "Try again later.";
          });
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
}
.value-selectors {
  min-height: 50%;
}
</style>
