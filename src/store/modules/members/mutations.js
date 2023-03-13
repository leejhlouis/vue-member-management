export default {
  createMember({ members }, payload) {
    members.push(payload);
  },
  updateMember({ members }, payload) {
    const index = members.findIndex((member) => member.code === payload.member.code);
    members[index] = payload.member;
  },
  deleteMember({ members }, { code }) {
    const index = members.findIndex((member) => member.code === code);
    members.splice(index, 1);
  },
};
