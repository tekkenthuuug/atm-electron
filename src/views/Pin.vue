<template>
  <div class="v-flex tc">
    <ExitControl />
    <div>
      <p class="enter-pin-msg">
        Enter your PIN
      </p>
      <p class="pin-input">
        {{ pinState.replace(/[0-9]/g, "*") }}
      </p>
      <p class="error">{{ error }}</p>
    </div>
    <Keypads v-on:append-num="appendPinNum" />
    <button class="submit-btn" @click="verifyCard">Submit</button>
    <LoadingDrawer v-if="isRequesting" />
  </div>
</template>

<script>
import Keypads from "@/components/Keypads";
import ExitControl from "@/components/ExitControl";
import LoadingDrawer from "@/components/LoadingDrawer";
import axios from "axios";

import { API_BASE_URL } from "@/constants";

export default {
  name: "Pin",
  components: {
    Keypads,
    ExitControl,
    LoadingDrawer
  },
  data() {
    return {
      pinState: "",
      error: " ",
      isRequesting: false
    };
  },
  methods: {
    appendPinNum(action) {
      if (action === "C") {
        this.pinState = "";
        return;
      }
      if (this.pinState.length < 4) {
        this.pinState += action;
      }
    },
    async verifyCard() {
      if (this.pinState.length === 4) {
        this.isRequesting = true;
        axios
          .post(`${API_BASE_URL}/verifycard`, {
            cardNo: this.$store.state.cardNo,
            pin: this.pinState
          })
          .then(resp => {
            if (resp.data.token) {
              const { token } = resp.data;
              this.$store.commit("setToken", token);
              this.$router.push("/mainmenu");
            } else {
              this.error = resp.data.error || "An error occured.";
            }
          })
          .catch(err => {
            this.error = `${err.response.data.error || "An error occured"}. (${
              err.response.status
            })`;
          })
          .finally(() => {
            this.isRequesting = false;
          });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.pin {
  &-input {
    font-size: 40px;
    margin-top: 12px;
    height: 42px;
  }
}
.enter-pin-msg {
  font-size: 18px;
}
.submit-btn {
  font-size: 24px;
  height: 60px;
  width: 140px;
  font-family: "Nunito";
  font-weight: 700;
  background-color: rgba(0, 255, 255, 1);
  border-radius: 18px;
}
</style>
