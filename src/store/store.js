import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    data: [],
    cities: ["Amsterdam", "Veghel"],
    stores: [
      { uuid: 123, addressName: "Store 1" },
      { uuid: 456, addressName: "Store 2" },
    ],
    search: "",
  },
  mutations: {
    saveData(state, data) {
      state.data = JSON.parse(data);
    },
    saveSearch(state, search) {
      state.search = search;
    }
  },
  actions: {
    setSearch({commit}, e) {
      commit('saveSearch', e.target.value);
    }
  },
  getters: {
    getCities(state) {
      const data = state.data;
      const getCities = (data) => data.map((obj) => obj.city);
      let cities = getCities(data);
      const onlyUnique = (value, index, self) => {
        return self.indexOf(value) === index;
      };
      cities = cities.filter(onlyUnique);
      return cities;
    },
    getStores(state) {
      const data = state.data;
      const getStores = (data) => {
        data = data.filter(obj => {
          return (obj.city.toLowerCase().includes(state.search.toLowerCase()) || obj.addressName.toLowerCase().includes(state.search.toLowerCase()))
        });
        data = data.map((obj) => {
          return {
            uuid: obj.uuid,
            addressName: obj.addressName.replace('Jumbo',''),
          };
        });
        return data;
      }
      let stores = getStores(data);
      return stores;
    }
  },
});