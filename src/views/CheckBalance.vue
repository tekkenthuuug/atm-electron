<template>
  <div class="balance">
    <MainMenuControl />
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
import MainMenuControl from "@/components/MainMenuControl.vue";
import LoadingDrawer from "@/components/LoadingDrawer.vue";

export default {
  name: "CheckBalance",
  components: {
    MainMenuControl,
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
      .catch(err => {
        if (err.response.status == 401) {
          this.$store.commit("reset");
          this.$router.push("/");
        }
      });
  }
};
</script>

<style lang="scss">
.balance {
  height: 100%;
  width: 100%;
}
</style>
