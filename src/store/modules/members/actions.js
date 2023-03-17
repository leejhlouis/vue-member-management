import axios from 'axios';

export default {
  async loadMembers({ commit }) {
    try {
      const response = await axios.get('/backend/member/summary?page=0&size=10');

      commit('setMembers', response.data.data);
    } catch (error) {
      throw new Error(error);
    }
  },
  async loadMemberDetails({ commit }, { memberCode }) {
    try {
      const response = await axios.get(`/backend/member/${memberCode}`);

      commit('setMemberDetails', response.data.data[0]);
    } catch (error) {
      throw new Error(error);
    }
  },
  async createMember(_, payload) {
    try {
      await axios.post('/backend/member', payload);
    } catch (error) {
      throw new Error(error);
    }
  },
  async updateMember({ commit }, payload) {
    try {
      const response = await axios.put(`/backend/member/${payload.code}`, payload);

      commit('setMemberDetails', response.data.data);
    } catch (error) {
      throw new Error(error);
    }
  },
  async deleteMember(_, { memberCode }) {
    try {
      await axios.delete(`/backend/member/${memberCode}`);
    } catch (error) {
      throw new Error(error);
    }
  },
};
