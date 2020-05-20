<template>
  <div class="v-flex">
    <MainMenuControl />
    <div class="history" v-if="Boolean(history.length)">
      <ListItem
        v-for="element in formatedHistory"
        :key="element.index"
        :title="element.event_name"
        :date="element.event_date"
      />
    </div>
    <h2 v-else-if="!isRequesting">There is not transactions yet!</h2>
    <LoadingDrawer v-if="isRequesting" />
  </div>
</template>

<script>
import axios from "axios";
import LoadingDrawer from "@/components/LoadingDrawer.vue";
import ListItem from "@/components/ListItem.vue";
import MainMenuControl from "@/components/MainMenuControl.vue";
import { API_BASE_URL } from "@/constants.js";
export default {
  name: "CreditCardHistory",
  components: {
    MainMenuControl,
    LoadingDrawer,
    ListItem
  },
  data() {
    return {
      history: [],
      isRequesting: true
    };
  },
  computed: {
    formatedHistory() {
      return this.history.reduce((acc, el, index) => {
        acc.push({ ...el, index });
        return acc;
      }, []);
    }
  },
  mounted() {
    const Authorization = "Bearer " + this.$store.state.token;
    axios
      .get(`${API_BASE_URL}/creditcard/history`, {
        headers: {
          Authorization
        }
      })
      .then(resp => {
        if (resp.data) {
          this.history = resp.data;
        }
      })
      .finally(() => {
        this.isRequesting = false;
      });
  }
};
</script>

<style lang="scss" scoped>
.history {
  max-height: 465px;
  overflow-x: auto;
}
</style>
