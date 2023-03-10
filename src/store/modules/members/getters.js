export default {
  members({ members }) {
    return members;
  },
  getMemberByCode:
    ({ members }) =>
    (code) => {
      return members.find((member) => member.code === code);
    },
};
