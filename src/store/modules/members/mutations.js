export default {
  createMember({ members }, payload) {
    members.push(payload);
  },
  deleteMember({ members }, { code }) {
    const index = members.findIndex((member) => member.code === code);
    members.splice(index, 1);
  },
};
