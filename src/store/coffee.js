const coffee = {
  state: {

    coffee: [],
    searchValue: '',
    sortValue: ''
  },
  mutations: {
    setCoffeeData(state, data) {
      state.coffee = data
    },
    setItemData(state, data) {
      state.coffee.id = data
    },
    setSearchValue(state, value) {
      state.searchValue = value
    },
    setSortValue(state, value) {
      console.log(value);
      state.sortValue = value
    }
  },
  actions: {
    setCoffeeData({ commit }, data) {
      commit("setCoffeeData", data)
    },
    setItemData({ commit }, data) {
      commit("setItemData", data)
    },
    setSearchValue({ commit }, data) {
      commit("setSearchValue", data)
    },
    setSortValue({ commit }, value) {
      commit("setSortValue", value)
    }
  },
  getters: {
    getCoffeeCard(state) {
      return state.coffee.filter(item => item.name.toLowerCase().includes(state.searchValue.toLowerCase())).filter(item => item.country.toLowerCase().includes(state.sortValue.toLowerCase()))
    },
    getProductById(state) {
      return (id) => {
        return state.coffee.find((card) => card.id === +id)
      }
    },
    getSearchValue(state) {
      return state.searchValue;
    }
  }
}

export default coffee