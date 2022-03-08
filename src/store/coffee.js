const coffee = {
  state: {

    coffee: [
      {
        id: 0,
        image: "coffee-1.jpg",
        name: "1Solimo Coffee Beans 2kg",
        price: "10.73",
      },
      {
        id: 1,
        image: "coffee-2.jpg",
        name: "1Presto Coffee Beans 1kg",
        price: "15.99",
      },
      {
        id: 2,
        image: "coffee-3.jpg",
        name: "1AROMISTICO Coffee 1kg",
        price: "6.99",
      },
      {
        id: 3,
        image: "coffee-1.jpg",
        name: "1Solimo Coffee Beans 2kg",
        price: "10.73",
      },
      {
        id: 4,
        image: "coffee-1.jpg",
        name: "1Solimo Coffee Beans 2kg",
        price: "10.73",
      },
      {
        id: 5,
        image: "coffee-1.jpg",
        name: "1Solimo Coffee Beans 2kg",
        price: "10.73",
      },
    ],
  },
  mutations: {
    setCoffeeData(state, data) {
      state.coffee = data
    },
    setItemData(state, data) {
      state.coffee.id = data
    },
  },
  actions: {
    setCoffeeData({ commit }, data) {
      commit("setCoffeeData", data)
    },
    setItemData({ commit }, data) {
      commit("setItemData", data)
    },
  },
  getters: {
    getCoffeeCard(state) {
      return { coffee: state.coffee };
    },
    getProductById(state) {
      return (id) => {
        return state.coffee.find((card) => card.id === +id)
      }
    },
  }
}

export default coffee