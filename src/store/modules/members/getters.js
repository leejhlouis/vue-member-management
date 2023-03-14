export default {
  members({ members }) {
    return members;
  },
  getMemberByCode:
    ({ members }) =>
    (code) => {
      return members.find((member) => member.code === code);
    },
  addresses: (_, getters) => (code) => {
    return getters.getMemberByCode(code).addresses;
  },
};
