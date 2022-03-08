const common = {
  state: {
    isLoading: false
  },
  mutations: {
    setIsLoading(state, value) {
      state.isLoading = value
    }
  },
  actions: {
    setIsLoading({ commit }, value) {
      commit("setIsLoading", value)
    }
  },
  getters: {
    getIsLoading(state) {
      return state.isLoading
    }

  }
}

export default common