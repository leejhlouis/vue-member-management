const generateCode = (prefix, array) => {
  const lastCode = array && array.length !== 0 ? array[array.length - 1].code : null;
  const codeNum = (lastCode ? parseInt(lastCode.split('-')[1]) : 0) + 1;

  return `${prefix}-${codeNum.toString().padStart(5, '0')}`;
};

const getMemberCode = (members) => generateCode('MEM', members);
const getAddressCode = (addresses) => generateCode('ADD', addresses);

export default {
  async createMember({ getters, commit }, payload) {
    const code = getMemberCode(getters.members[getters.members.length - 1].code);
    // call api

    commit('createMember', { ...payload, code });
  },
  async updateMember({ commit }, payload) {
    // call api

    commit('updateMember', { ...payload });
  },
  async deleteMember({ commit }, payload) {
    // call api

    commit('deleteMember', { ...payload });
  },
  async addAddress({ getters, commit }, { newAddress, memberCode }) {
    const code = getAddressCode(getters.getMemberByCode(memberCode).addresses);

    // call api

    commit('addAddress', {
      newAddress: {
        ...newAddress,
        code,
      },
      memberCode,
    });
  },
  async editAddress({ commit }, payload) {
    // call api

    commit('editAddress', { ...payload });
  },
  async deleteAddress({ commit }, payload) {
    // call api

    commit('deleteAddress', { ...payload });
  },
};
