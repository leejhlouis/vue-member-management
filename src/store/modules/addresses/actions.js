import axios from 'axios';

export default {
  async loadAddresses({ commit }, { memberCode }) {
    try {
      const response = await axios.get(
        `/backend/member/${memberCode}/address/summary?page=0&size=10`,
      );
      console.log(response);

      commit('setAddresses', response.data.data);
    } catch (error) {
      throw new Error(error);
    }
  },
  async addAddress(_, { newAddress, memberCode }) {
    try {
      const response = await axios.post(`/backend/member/${memberCode}/address`, newAddress);
      console.log(response);
    } catch (error) {
      throw new Error(error);
    }
  },
  async editAddress(_, { updatedAddress, memberCode }) {
    try {
      const response = await axios.put(
        `/backend/member/${memberCode}/address/${updatedAddress.code}`,
        updatedAddress,
      );
      console.log(response);
    } catch (error) {
      throw new Error(error);
    }
  },
  async deleteAddress(_, { memberCode, addressCode }) {
    try {
      const response = await axios.delete(`/backend/member/${memberCode}/address/${addressCode}`);
      console.log(response);
    } catch (error) {
      throw new Error(error);
    }
  },
};
