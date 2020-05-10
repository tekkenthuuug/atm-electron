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
      <button
        id="confirmBtn"
        :disabled="!Boolean(selectedCardNo.length)"
        @click="setSessionCard"
      >
        Confirm
      </button>
    </div>
  </div>
</template>

<script>
import CreditCard from "@/components/CreditCard.vue";
const { remote, ipcRenderer } = require("electron");
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
    setSelectedCard(cardNo, cardHolder) {
      if (this.selectedCardNo === cardNo) {
        this.selectedCardNo = "";
        this.selectedCardHolder = "";
      } else {
        this.selectedCardNo = cardNo;
        this.selectedCardHolder = cardHolder;
      }
    },
    closeCurrentWindow() {
      remote.BrowserWindow.getFocusedWindow().close();
    },
    setSessionCard() {
      ipcRenderer.send(
        "card-was-choosen",
        this.selectedCardNo,
        this.selectedCardHolder
      );
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
  background-color: rgba(236, 52, 52, 0.9);
  color: rgb(240, 240, 240);
}
#confirmBtn {
  $confirmBtn-color: rgba(200, 220, 80, 0.9);
  background-color: $confirmBtn-color;
  color: rgb(35, 35, 35);
  &:disabled {
    cursor: default;
    background-color: rgba($confirmBtn-color, 0.7);
  }
}
</style>
