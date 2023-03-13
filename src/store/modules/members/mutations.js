export default {
  createMember({ members }, payload) {
    members.push(payload);
  },
  updateMember({ members }, { member }) {
    const index = members.findIndex((member) => member.code === member.code);
    members[index] = member;
  },
  deleteMember({ members }, { code }) {
    const index = members.findIndex((member) => member.code === code);
    members.splice(index, 1);
  },
};
