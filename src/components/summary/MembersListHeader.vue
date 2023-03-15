<template>
  <div>
    <SuccessModal v-if="isSuccess" title="Member berhasil ditambah" @close="hideSuccessModal" />
    <MemberFormModal v-if="isMemberFormVisible" @close="hideMemberForm" @submit="createNewMember" />
    <BaseContainer class="member-summary">
      <h1 class="member-summary__title">Members</h1>
      <BaseButton mode="primary" has-icon @click="showCreateModal">
        <template #icon>
          <BaseIcon> <PlusIcon /></BaseIcon>
        </template>
        Create
      </BaseButton>
    </BaseContainer>
  </div>
</template>

<script setup>
import MemberFormModal from '../modals/MemberFormModal.vue';
import { PlusIcon } from '@heroicons/vue/24/solid';
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

defineComponent({ MemberFormModal, PlusIcon });

const isMemberFormVisible = ref(false);
const isSuccess = ref(false);

const showCreateModal = () => (isMemberFormVisible.value = true);
const hideMemberForm = () => (isMemberFormVisible.value = false);

const showSuccessModal = () => (isSuccess.value = true);
const hideSuccessModal = () => (isSuccess.value = false);

const createNewMember = async (data) => {
  try {
    store.dispatch('members/createMember', data);

    showSuccessModal();
  } catch (error) {}

  hideMemberForm();
};
</script>

<style scoped>
.member-summary__title {
  font-weight: 500;
  font-size: 1.25rem;
  padding-bottom: 0.75rem;
}
</style>
