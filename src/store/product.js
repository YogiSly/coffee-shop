const product = {
  state: {
    product:
    {
      id: 0,
      image: "coffee-1.jpg",
      name: "1Solimo Coffee Beans 2kg",
      price: "10.73",
    }
  },
  mutations: {
    setProductData(state, data) {
      state.product = data
    },
  },
  actions: {
    setProductData({ commit }, data) {
      commit("setProductData", data)
    },
  },
  getters: {
    getProductData(state) {
      return { product: state.product };
    },
  }
}

export default product