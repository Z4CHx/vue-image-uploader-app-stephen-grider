import api from "../../api/imgur";
import qs from "qs";
import { router } from "../../main.js";

const state = {
  token: window.localStorage.getItem("imgur_token")
};

const getters = {
  isLoggedIn: state => !!state.token
};

const actions = {
  login: () => {
    api.login();
  },
  // commmit is a function used to call mutations, commit('mutationname')
  logout: ({ commit }) => {
    commit("setToken", null);
    window.localStorage.removeItem("imgur_token");
  },
  finalizeLogin({ commit }, hash) {
    const query = qs.parse(hash.replace("#", ""));
    commit("setToken", query.access_token);
    window.localStorage.setItem("imgur_token", query.acces_token);
    router.push("/");
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
