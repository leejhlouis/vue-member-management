<template>
  <SuccessModal
    v-if="isSuccess"
    title="Member berhasil dihapus"
    @close="closeSuccessModal"
  ></SuccessModal>
  <DeleteConfirmationModal
    v-if="isDeleteModalVisible"
    @close="closeDeleteModal"
    @confirm="handleDeletion"
  />
  <tr class="members-list-table__row">
    <td class="members-list-table__cell">{{ code }}</td>
    <td class="members-list-table__cell">{{ name }}</td>
    <td class="members-list-table__cell">{{ email }}</td>
    <td class="members-list-table__cell">{{ phone }}</td>
    <td class="members-list-table__cell">{{ dob }}</td>
    <td class="members-list-table__cell members-list-table__cell--action">
      <BaseDropdown>
        <li>
          <RouterLink class="dropdown__item" :to="detailsLink">View details</RouterLink>
        </li>
        <li class="dropdown__item" @click="attemptDeletion">Delete member</li>
      </BaseDropdown>
    </td>
  </tr>
</template>

<script setup>
import { ref, defineComponent, computed } from 'vue';
import DeleteConfirmationModal from '../modals/DeleteConfirmationModal.vue';
import SuccessModal from '../modals/SuccessModal.vue';
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps(['code', 'name', 'email', 'phone', 'dob', 'gender', 'profilePicture']);

defineComponent({
  DeleteConfirmationModal,
});

const isDeleteModalVisible = ref(false);
const isSuccess = ref(false);

const detailsLink = computed(() => `/members/${props.code}`);

const closeDeleteModal = () => {
  isDeleteModalVisible.value = false;
};

const attemptDeletion = () => {
  isDeleteModalVisible.value = true;
};

const closeSuccessModal = () => {
  isSuccess.value = false;
};

async function handleDeletion() {
  try {
    store.dispatch('members/deleteMember', { code: props.code });
  } catch (error) {}

  isDeleteModalVisible.value = false;
  isSuccess.value = true;
}
</script>

<style scoped>
.members-list-table__row:nth-child(even) {
  background-color: #f2f2f2;
}

.members-list-table__cell {
  border-bottom: 1px solid #ddd;
  padding: 12px 8px;
}

.members-list-table__row:hover {
  background-color: #eee;
}

.dropdown__item {
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
}

.dropdown__item:not(:last-of-type) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.dropdown__item:hover {
  background: var(--color-white-muted);
}
</style>
