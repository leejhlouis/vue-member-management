<template>
  <div>
    <SuccessModal v-if="isSuccess" @close="closeSuccessModal"></SuccessModal>
    <MemberFormModal
      v-if="isMemberFormVisible"
      @close="closeMemberForm"
      @submit="createNewMember"
    />
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
import SuccessModal from '../modals/SuccessModal.vue';
import { PlusIcon } from '@heroicons/vue/24/solid';
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

defineComponent({ MemberFormModal, PlusIcon, SuccessModal });

const isMemberFormVisible = ref(false);
const isSuccess = ref(false);

const showCreateModal = () => {
  isMemberFormVisible.value = true;
};

const closeMemberForm = () => {
  isMemberFormVisible.value = false;
};

const closeSuccessModal = () => {
  isSuccess.value = false;
};

async function createNewMember(data) {
  try {
    store.dispatch('createMember', data);

    closeMemberForm();
    isSuccess.value = true;
  } catch (error) {}
}
</script>

<style scoped>
.member-summary__title {
  font-weight: 500;
  font-size: 1.25rem;
  padding-bottom: 0.75rem;
}
</style>
