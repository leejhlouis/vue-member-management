export default {
  async createMember({ commit }, payload) {
    // call api

    commit('createMember', {
      ...payload,
      code: 'dummy_code',
    });
  },
  async updateMember({ commit }, payload) {
    // call api

    commit('updateMember', {
      member: {
        ...payload,
      },
    });
  },
  async deleteMember({ commit }, payload) {
    // call api

    commit('deleteMember', {
      ...payload,
    });
  },
};
