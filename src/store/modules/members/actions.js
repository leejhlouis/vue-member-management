export default {
  async createMember({ commit }, payload) {
    // call api

    commit('createMember', {
      ...payload,
      code: 'dummy_code',
    });
  },
  async deleteMember({ commit }, payload) {
    // call api

    commit('deleteMember', {
      ...payload,
    });
  },
};
