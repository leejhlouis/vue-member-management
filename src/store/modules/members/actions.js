import axios from 'axios';

export default {
  async getMembers(_, { page }) {
    try {
      return await axios.get(`/backend/member/summary?page=${page}&size=10`);
    } catch (error) {
      throw error;
    }
  },
  async loadMembers({ dispatch, commit }) {
    try {
      const response = await dispatch('getMembers', { page: 0 });

      commit('setMembers', response.data.data);
    } catch (error) {
      throw error;
    }
  },
  async pushMembers({ dispatch, commit }, { page }) {
    try {
      const response = await dispatch('getMembers', { page });

      commit('pushMembers', response.data.data);
    } catch (error) {
      throw error;
    }
  },
  async loadMemberDetails({ commit }, { memberCode }) {
    try {
      const response = await axios.get(`/backend/member/${memberCode}`);

      commit('setMemberDetails', response.data.data[0]);
    } catch (error) {
      throw error;
    }
  },
  async createMember(_, payload) {
    try {
      await axios.post('/backend/member', payload);
    } catch (error) {
      throw error;
    }
  },
  async updateMember({ commit }, payload) {
    try {
      const response = await axios.put(`/backend/member/${payload.code}`, payload);

      commit('setMemberDetails', response.data.data);
    } catch (error) {
      throw error;
    }
  },
  async deleteMember(_, { memberCode }) {
    try {
      await axios.delete(`/backend/member/${memberCode}`);
    } catch (error) {
      throw error;
    }
  },
};
