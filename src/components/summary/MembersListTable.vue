<template>
  <BaseContainer>
    <DeleteAlertModal
      v-if="isDeleteModalVisible"
      @confirm="deleteMember"
      @close="hideDeleteModal"
    />
    <LoadingModal v-if="isLoading" />
    <SuccessAlertModal v-if="isSuccess" title="Member berhasil dihapus" @close="handleSuccess" />
    <div class="member-list-wrapper">
      <table class="members-list-table">
        <thead class="members-list-table__thead">
          <tr>
            <th class="members-list-table__header">Member code</th>
            <th class="members-list-table__header">Name</th>
            <th class="members-list-table__header">Email</th>
            <th class="members-list-table__header">Phone number</th>
            <th class="members-list-table__header">Date of birth</th>
            <th class="members-list-table__header">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="member-list-table__row--is-empty" v-if="!members">
            <td colspan="6">Empty list.</td>
          </tr>
          <MemberRow
            v-else
            v-for="member in members"
            :key="member.code"
            :="member"
            @delete="handleDelete(member.code)"
          />
        </tbody>
      </table>
    </div>
  </BaseContainer>
</template>

<script setup>
import { ref, defineComponent, inject } from 'vue';
import MemberRow from './MemberRow.vue';
import { useStore } from 'vuex';

const store = useStore();

defineComponent({ MemberRow });

const emit = defineEmits(['onMemberDeleted']);

const members = inject('members');

const memberCode = ref(null);
const isLoading = ref(false);
const isSuccess = ref(false);
const isDeleteModalVisible = ref(false);

const showDeleteModal = () => (isDeleteModalVisible.value = true);
const hideDeleteModal = () => (isDeleteModalVisible.value = false);

const showSuccessModal = () => (isSuccess.value = true);
const hideSuccessModal = () => (isSuccess.value = false);

const handleDelete = (code) => {
  showDeleteModal();
  memberCode.value = code;
};

const handleSuccess = () => {
  hideSuccessModal();
  emit('onMemberDeleted');
};

const deleteMember = async () => {
  hideDeleteModal();
  isLoading.value = true;

  try {
    await store.dispatch('members/deleteMember', { memberCode: memberCode.value });

    isLoading.value = false;
    showSuccessModal();
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped>
.member-list-wrapper {
  overflow: auto;
  margin-top: 1rem;
  height: fit-content;
  min-height: 240px;
  max-height: calc(100vh - (56px + 48px + 5.5rem + 72px));
}

.member-list-wrapper::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.member-list-wrapper::-webkit-scrollbar-track {
  background: var(--color-white-muted);
}

.member-list-wrapper::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 16px;
}

.member-list-wrapper::-webkit-scrollbar-thumb:hover {
  opacity: 0.8;
}

.members-list-table {
  border-collapse: collapse;
  width: auto;
  min-width: 1016px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 768px) {
  .members-list-table {
    min-width: 768px;
  }
}

.members-list-table__thead {
  position: sticky;
  top: 0;
  z-index: 15;
}

.members-list-table__header {
  background-color: var(--color-primary);
  color: var(--color-white);
  font-weight: 400;
  padding: 12px 8px;
  text-align: left;
}

.member-list-table__row--is-empty td {
  color: var(--color-black-muted);
  text-align: center;
  padding: 1rem 0;
}
</style>
