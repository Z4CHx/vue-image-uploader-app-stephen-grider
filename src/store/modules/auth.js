const state = {
    token: null
}

const getters ={
    isLoggedIn : state => !!state.token
}

const actions = {
    // commmit is a function used to call mutations, commit('mutationname')
    logout: ({ commit }) =>{
        commit('setToken',null)
    },
    finalizeLogin() {

    }
}

const mutations = {
    setToken: (state,token) => {
        state.token = token
    }
}
