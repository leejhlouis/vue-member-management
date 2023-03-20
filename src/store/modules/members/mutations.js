export default {
  setMembers(state, payload) {
    state.members = payload;
  },
  pushMembers(state, payload) {
    state.members.push(...payload);
  },
  setMemberDetails(state, payload) {
    state.details = payload;
  },
};
