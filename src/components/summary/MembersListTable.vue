<template>
  <BaseContainer>
    <SuccessAlertModal v-if="isSuccess" title="Member berhasil dihapus" @close="handleSuccess" />
    <DeleteAlertModal
      v-if="isDeleteModalVisible"
      @confirm="deleteMember"
      @close="hideDeleteModal"
    />
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
          <tr class="member-list-table__row--is-empty" v-if="isLoading">
            <td colspan="6">Loading...</td>
          </tr>
          <tr class="member-list-table__row--is-empty" v-else-if="!members">
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

const isLoading = inject('isLoading');
const members = inject('members');

const memberCode = ref(null);
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
  try {
    await store.dispatch('members/deleteMember', { memberCode: memberCode.value });

    showSuccessModal();
  } catch (error) {
    console.error(error);
  }

  hideDeleteModal();
};
</script>

<style scoped>
.member-list-wrapper {
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin-top: 1rem;
  height: fit-content;
  max-height: calc(100vh);
}

/* .member-list-wrapper::-webkit-scrollbar {
  display: none;
} */

.members-list-table {
  border-collapse: collapse;
  width: 100%;
  min-width: 1024px;
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
