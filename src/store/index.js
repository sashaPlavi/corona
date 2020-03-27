import Vuex from "vuex";
import Vue from "vue";
import Corona from "./models/Corona";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Corona
  }
});
