import axios from 'axios';

export default {
  async loadRegions({ commit }) {
    try {
      const response = await axios.get('/backend//region');

      commit('setRegions', response.data.data);
    } catch (error) {
      throw new Error(error);
    }
  },
};
