import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const getInitialState = () => {
  return {
    cardNo: undefined,
    cardHolder: undefined,
    token: undefined
  };
};

export default new Vuex.Store({
  state: getInitialState(),
  mutations: {
    setSessionCard(state, cardInfo) {
      state.cardNo = cardInfo.cardNo;
      state.cardHolder = cardInfo.cardHolder;
    },
    setToken(state, token) {
      state.token = token;
    },
    reset(state) {
      Object.assign(state, getInitialState());
    }
  },
  actions: {},
  modules: {}
});
