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
      console.log(response);

      commit('setMembers', response.data.data);
    } catch (error) {
      throw error;
    }
  },
  async pushMembers({ dispatch, commit }, { page }) {
    try {
      const response = await dispatch('getMembers', { page });
      console.log(response);

      commit('pushMembers', response.data.data);
    } catch (error) {
      throw error;
    }
  },
  async loadMemberDetails({ commit }, { memberCode }) {
    try {
      const response = await axios.get(`/backend/member/${memberCode}`);
      console.log(response);

      commit('setMemberDetails', response.data.data[0]);
    } catch (error) {
      throw error;
    }
  },
  async createMember(_, payload) {
    try {
      const response = await axios.post('/backend/member', payload);
      console.log(response);

    } catch (error) {
      throw error;
    }
  },
  async updateMember({ commit }, payload) {
    try {
      const response = await axios.put(`/backend/member/${payload.code}`, payload);
      console.log(response);

      commit('setMemberDetails', response.data.data);
    } catch (error) {
      throw error;
    }
  },
  async deleteMember(_, { memberCode }) {
    try {
      const response = await axios.delete(`/backend/member/${memberCode}`);
      console.log(response);
      
    } catch (error) {
      throw error;
    }
  },
};
