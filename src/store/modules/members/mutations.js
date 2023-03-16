const getIndex = (array, code) => {
  return array.findIndex((el) => el.code === code);
};

export default {
  setMembers(state, payload) {
    state.members = payload;
  },
  createMember({ members }, payload) {
    members.push(payload);
  },
  updateMember({ members }, payload) {
    const index = getIndex(members, payload.code);
    const oldData = members[index];

    members[index] = {
      ...oldData,
      ...payload,
    };
  },
  deleteMember({ members }, { code }) {
    const index = getIndex(members, code);
    members.splice(index, 1);
  },
  addAddress({ members }, { newAddress, memberCode }) {
    const index = getIndex(members, memberCode);

    if (!members[index].addresses) {
      members[index].addresses = [{ ...newAddress }];
    } else {
      members[index].addresses.push(newAddress);
    }
  },
  editAddress({ members }, { updatedAddress, memberCode }) {
    const memberIndex = getIndex(members, memberCode);
    const addressIndex = getIndex(members[memberIndex].addresses, updatedAddress.code);

    members[memberIndex].addresses[addressIndex] = updatedAddress;
  },
  deleteAddress({ members }, { memberCode, addressCode }) {
    const memberIndex = getIndex(members, memberCode);
    const addressIndex = getIndex(members[memberIndex].addresses, addressCode);

    members[memberIndex].addresses.splice(addressIndex, 1);
  },
};
