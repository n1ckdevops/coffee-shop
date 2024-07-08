import { v4 as uuidv4 } from "uuid";

const bestsellers = {
  state: {
    bestsellers: [
      {
        id: uuidv4(),
        image: "coffee-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        price: 10.73,
      },
      {
        id: uuidv4(),
        image: "coffee-2.jpg",
        name: "Presto Coffee Beans 1kg",
        price: 15.99,
      },
      {
        id: uuidv4(),
        image: "coffee-3.jpg",
        name: "AROMISTICO Coffee 1kg",
        price: 6.99,
      },
    ],
  },
  mutations: {
    setBestsellersData(state, data) {
      state.bestsellers = data;
    },
  },
  actions: {
    setBestsellersData({ commit }, data) {
      commit("setBestsellersData", data);
    },
  },
  getters: {
    getBestsellers(state) {
      return state.bestsellers;
    },
  },
};
export default bestsellers;
