import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import articles from "./modules/articles";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    articles
  },
  getters
});
