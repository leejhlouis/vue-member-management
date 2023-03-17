import axios from 'axios';

export default {
  async loadAddresses({ commit }, { memberCode }) {
    try {
      const response = await axios.get(
        `/backend/member/${memberCode}/address/summary?page=0&size=10`,
      );

      commit('setAddresses', response.data.data);
    } catch (error) {
      throw new Error(error);
    }
  },
  async addAddress(_, { newAddress, memberCode }) {
    try {
      await axios.post(`/backend/member/${memberCode}/address`, newAddress);
    } catch (error) {
      throw new Error(error);
    }
  },
  async editAddress(_, { updatedAddress, memberCode }) {
    try {
      await axios.put(
        `/backend/member/${memberCode}/address/${updatedAddress.code}`,
        updatedAddress,
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  async deleteAddress(_, { memberCode, addressCode }) {
    try {
      await axios.delete(`/backend/member/${memberCode}/address/${addressCode}`);
    } catch (error) {
      throw new Error(error);
    }
  },
};
