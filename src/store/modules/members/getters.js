export default {
  members({ members }) {
    return members;
  },
  getMemberById:
    ({ members }) =>
    (code) => {
      return members.find((member) => member.code === code);
    },
};
