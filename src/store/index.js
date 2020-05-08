import Vue from "vue";
import Vuex from "vuex";

const { ipcRenderer } = require("electron");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cardNo: undefined,
    cardHolder: undefined
  },
  mutations: {
    setSessionCard(state, cardNo) {
      state.cardNo = cardNo;
      ipcRenderer.send("card-was-set");
    }
  },
  actions: {},
  modules: {}
});
