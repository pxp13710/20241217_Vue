import { createStore } from 'vuex';
import countStore from './countStore';

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    countStore,
  }
})
export default store;
