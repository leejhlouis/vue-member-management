export default {
  members({ members }) {
    return members;
  },
  details({ details }) {
    return details;
  },
  addresses: (_, getters) => (code) => {
    return getters.getMemberByCode(code).addresses;
  },
};
