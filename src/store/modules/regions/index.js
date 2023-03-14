import data from './data';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      regions: [...data],
    };
  },
  getters,
};
