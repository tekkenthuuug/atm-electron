<template>
  <div class="v-flex card-chooser">
    <CreditCard
      v-for="creditCard in creditCardsList"
      :key="creditCard.id"
      :cardInfo="creditCard"
      v-on:set-selected-card="setSelectedCard"
      :isSelected="selectedCardNo === creditCard.id"
    />
    <div class="buttons">
      <button id="cancelBtn" @click="closeCurrentWindow">Cancel</button>
      <button id="confirmBtn">Confirm</button>
    </div>
  </div>
</template>

<script>
import CreditCard from "@/components/CreditCard.vue";
const { remote } = require("electron");
export default {
  name: "Cardchooser",
  components: {
    CreditCard
  },
  data() {
    return {
      creditCardsList: [
        {
          id: "1234567890123456",
          holderName: "Maksim Pautsina"
        },
        {
          id: "1234567890123999",
          holderName: "Alexey Kharchenko"
        },
        {
          id: "1234567890123333",
          holderName: "Yehor Kolohoida"
        }
      ],
      selectedCardNo: ""
    };
  },
  methods: {
    setSelectedCard(cardNo) {
      if (this.selectedCardNo === cardNo) {
        this.selectedCardNo = "";
      } else {
        this.selectedCardNo = cardNo;
      }
    },
    closeCurrentWindow() {
      remote.BrowserWindow.getFocusedWindow().close();
    }
  }
};
</script>

<style lang="scss" scoped>
.card-chooser {
  padding-left: 70px;
  padding-right: 70px;
}
.buttons {
  width: 100%;
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  & > button {
    width: 50%;
    height: 100%;
    font-size: 18px;
    font-family: "Nunito", sans-serif;
    text-transform: uppercase;
    font-weight: 800;
  }
}
#cancelBtn {
  background-color: rgba(220, 155, 80, 0.9);
  color: rgb(240, 240, 240);
}
#confirmBtn {
  background-color: rgba(200, 220, 80, 0.9);
  color: rgb(35, 35, 35);
}
</style>
