<template>
  <div class="v-flex tc">
    <div>
      <p class="enter-pin-msg">
        Enter your Pin number
      </p>
      <p class="pin-input">
        {{ pinState.replace(/[0-9]/g, "*") }}
      </p>
    </div>
    <Keypads v-on:append-pin-num="appendPinNum" />
    <button class="submit-btn">Submit</button>
  </div>
</template>

<script>
import Keypads from "../components/Keypads";

export default {
  name: "Pin",
  components: {
    Keypads
  },
  data() {
    return {
      pinState: ""
    };
  },
  methods: {
    appendPinNum(num) {
      if (this.pinState.length < 4) {
        this.pinState += num;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.pin-input {
  font-size: 40px;
  margin-top: 12px;
  height: 42px;
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
