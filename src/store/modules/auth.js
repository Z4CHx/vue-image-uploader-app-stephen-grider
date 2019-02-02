import api from "../../api/imgur";
import qs from "qs";

const state = {
  token: null
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
  },
  finalizeLogin({ commit }, hash) {
    const query = qs.parse(hash.replace("#", ""));
    commit("setToken", query.access_token);
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
