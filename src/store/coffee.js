import { v4 as uuidv4 } from "uuid";

const coffee = {
  state: {
    coffee: [],
    searchValue: "",
    sortValue: "",
  },
  mutations: {
    setCoffeeData(state, data) {
      state.coffee = data;
    },
    setSearchValue(state, value) {
      state.searchValue = value;
    },
    setSortValue(state, value) {
      console.log(value);
      state.sortValue = value;
    },
  },
  actions: {
    setCoffeeData({ commit }, data) {
      commit("setCoffeeData", data);
    },
    setSearchValue({ commit }, data) {
      commit("setSearchValue", data);
    },
    setSortValue({ commit }, data) {
      commit("setSortValue", data);
    },
  },
  getters: {
    getCoffee(state) {
      return state.coffee
        .filter((item) =>
          item.name.toLowerCase().includes(state.searchValue.toLowerCase())
        )
        .filter((item) =>
          item.country.toLowerCase().includes(state.sortValue.toLowerCase())
        );
    },
    getCoffeeById(state) {
      return (id) => {
        return state.coffee.find((card) => card.id === id); // Убедитесь, что сравнение строк
      };
    },
    getSearchValue(state) {
      return state.searchValue;
    },
  },
};

export default coffee;
