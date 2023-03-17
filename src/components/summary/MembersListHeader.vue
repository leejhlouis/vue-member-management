<template>
  <div>
    <MemberFormModal v-if="isMemberFormVisible" @close="hideMemberForm" @submit="createNewMember" />
    <LoadingModal v-if="isLoading" />
    <SuccessAlertModal v-if="isSuccess" title="Member berhasil ditambah" @close="handleSuccess" />
    <BaseContainer class="member-summary">
      <h1 class="member-summary__title">Members</h1>
      <BaseButton mode="primary" has-icon @click="showMemberForm">
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

const emit = defineEmits(['onMemberCreated']);

const isMemberFormVisible = ref(false);
const isLoading = ref(false);
const isSuccess = ref(false);

const showMemberForm = () => (isMemberFormVisible.value = true);
const hideMemberForm = () => (isMemberFormVisible.value = false);

const showSuccessModal = () => (isSuccess.value = true);
const hideSuccessModal = () => (isSuccess.value = false);

const createNewMember = async (data) => {
  hideMemberForm();
  isLoading.value = true;

  try {
    await store.dispatch('members/createMember', data);

    isLoading.value = false;
    showSuccessModal();
  } catch (error) {
    console.error(error);
  }
};

const handleSuccess = () => {
  hideSuccessModal();
  emit('onMemberCreated');
};
</script>

<style scoped>
.member-summary {
  width: 100%;
}

.member-summary__title {
  font-weight: 500;
  font-size: 1.25rem;
  padding-bottom: 0.75rem;
}
</style>
