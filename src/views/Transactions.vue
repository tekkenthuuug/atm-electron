<template>
  <div class="v-flex">
    <MainMenuControl />
    <div class="transactions">
      <TransactionListItem
        v-for="transaction in transactions"
        :key="transaction.transactionID"
        :date="transaction.transaction_date"
        :value="transaction.balance_after - transaction.balance_before"
      />
    </div>
    <LoadingDrawer v-if="!Boolean(transactions.length)" />
  </div>
</template>

<script>
import axios from "axios";
import MainMenuControl from "@/components/MainMenuControl.vue";
import TransactionListItem from "@/components/TransactionListItem.vue";
import LoadingDrawer from "@/components/LoadingDrawer.vue";
import { API_BASE_URL } from "@/constants.js";

export default {
  name: "Transactions history",
  components: {
    MainMenuControl,
    TransactionListItem,
    LoadingDrawer
  },
  data() {
    return {
      transactions: []
    };
  },
  mounted() {
    const Authorization = "Bearer " + this.$store.state.token;
    axios
      .get(`${API_BASE_URL}/balance/history`, {
        headers: { Authorization }
      })
      .then(res => {
        this.transactions = res.data;
      })
      .catch(err => {
        if (err.response.status == 401) {
          this.$store.commit("reset");
          this.$router.push("/");
        }
      });
  }
};
</script>

<style lang="scss" scoped>
.transactions {
  max-height: 465px;
  overflow-x: auto;
}
</style>
