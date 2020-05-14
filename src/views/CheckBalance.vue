<template>
  <div class="balance">
    <GoBackControl />
    <div v-if="Boolean(balance)" class="v-flex tc">
      <div class="balance-info">
        <h2>Your current account balance:</h2>
        <h1>{{ balance }}$</h1>
      </div>
    </div>
    <LoadingDrawer v-else />
  </div>
</template>

<script>
import { API_BASE_URL } from "@/constants";
import axios from "axios";
import GoBackControl from "@/components/GoBackControl.vue";
import LoadingDrawer from "@/components/LoadingDrawer.vue";

export default {
  name: "CheckBalance",
  components: {
    GoBackControl,
    LoadingDrawer
  },
  data() {
    return {
      balance: undefined
    };
  },
  methods: {},
  mounted() {
    const Authorization = "Bearer " + this.$store.state.token;
    axios
      .get(`${API_BASE_URL}/balance/check`, {
        headers: {
          Authorization
        }
      })
      .then(res => {
        const { balance } = res.data;
        if (balance) {
          this.balance = balance;
        }
      })
      .catch(err => console.log(err.response));
  }
};
</script>

<style lang="scss">
.balance {
  height: 100%;
  width: 100%;
}
</style>
