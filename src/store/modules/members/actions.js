export default {
  async createMember({ commit }, payload) {
    commit('createMember', {
      ...payload,
      code: 'dummy_code',
    });
  },
};
