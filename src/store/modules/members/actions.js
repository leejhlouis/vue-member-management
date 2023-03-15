const generateMemberCode = (lastCode) => {
  const codeNum = parseInt(lastCode.split('-')[1]) + 1;
  const generatedCode = 'MEM-' + codeNum.toString().padStart(5, '0');

  return generatedCode;
};

export default {
  async createMember({ getters, commit }, payload) {
    const code = generateMemberCode(getters.members[getters.members.length - 1].code);
    // call api

    commit('createMember', {
      ...payload,
      code: code,
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
