<template>
  <div class="v-flex">
    <MainMenuControl />
    <div
      class="transactions"
      v-if="!isRequesting && Boolean(transactions.length)"
    >
      <ListItem
        v-for="transaction in formatedTransactions"
        :key="transaction.transactionID"
        :date="transaction.transaction_date"
        :value="transaction.value"
        :title="transaction.value < 0 ? 'Withdraw' : 'Deposit'"
      />
    </div>
    <h2 v-else>There is no transactions yet!</h2>
    <LoadingDrawer v-if="isRequesting" />
  </div>
</template>

<script>
import axios from "axios";
import MainMenuControl from "@/components/MainMenuControl.vue";
import ListItem from "@/components/ListItem.vue";
import LoadingDrawer from "@/components/LoadingDrawer.vue";
import { API_BASE_URL } from "@/constants.js";

export default {
  name: "Transactions",
  components: {
    MainMenuControl,
    ListItem,
    LoadingDrawer
  },
  data() {
    return {
      transactions: [],
      isRequesting: true
    };
  },
  computed: {
    formatedTransactions() {
      return this.transactions.reduce((acc, tran) => {
        acc.push({
          ...tran,
          value: tran.balance_after - tran.balance_before
        });
        return acc;
      }, []);
    }
  },
  mounted() {
    const Authorization = "Bearer " + this.$store.state.token;
    axios
      .get(`${API_BASE_URL}/balance/history`, {
        headers: { Authorization }
      })
      .then(resp => {
        if (resp.data) {
          this.transactions = resp.data;
        }
      })
      .catch(err => {
        if (err.response.status == 401) {
          this.$store.commit("reset");
          this.$router.push("/");
        }
      })
      .finally(() => {
        this.isRequesting = false;
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
