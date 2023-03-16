import httpApi from '../../../utils/httpApi';

const generateCode = (prefix, array) => {
  const lastCode = array && array.length !== 0 ? array[array.length - 1].code : null;
  const codeNum = (lastCode ? parseInt(lastCode.split('-')[1]) : 0) + 1;

  return `${prefix}-${codeNum.toString().padStart(5, '0')}`;
};

const getMemberCode = (members) => generateCode('MEM', members);
const getAddressCode = (addresses) => generateCode('ADD', addresses);

export default {
  async loadMembers({ commit }, { success, fail }) {
    httpApi.get(
      '/backend/member/summary?page=0&size=10',
      ({ body: { data } }) => {
        success();

        const members = [];

        for (const key in data) {
          const member = {
            code: data[key].code,
            name: data[key].name,
            email: data[key].email,
            phone: data[key].phone,
            dob: data[key].dob,
            gender: data[key].gender,
            profilePicture: data[key].profilePicture,
          };

          members.push(member);
        }
        commit('setMembers', members);
      },
      fail,
    );
  },
  async createMember({ getters, commit }, payload) {
    const code = getMemberCode(getters.members);
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
