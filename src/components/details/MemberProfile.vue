<template>
  <div>
    <div v-if="!isLoading" class="member-profile">
      <SuccessAlertModal
        v-if="isUpdateSuccess"
        title="Member berhasil diubah"
        @close="hideSuccessModal"
      />
      <div class="member-profile__header">
        <h1 class="member-profile__title">{{ title }}</h1>
        <BaseButton v-if="!isEditing" has-icon @click="enableEditing">
          <template #icon>
            <BaseIcon>
              <PencilIcon />
            </BaseIcon>
          </template>
          Edit
        </BaseButton>
      </div>
      <MemberForm :readonly="!isEditing" @submit="handleSubmit" :="details" />
    </div>
    <BaseLoading v-else />
  </div>
</template>

<script setup>
import MemberForm from '../forms/MemberForm.vue';
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'vuex';
import { PencilIcon } from '@heroicons/vue/24/solid';

defineComponent({ PencilIcon });

const { code } = defineProps(['code']);
const store = useStore();

const isLoading = ref(false);
const details = computed(() => store.getters['members/details']);

const loadMemberDetails = async () => {
  isLoading.value = true;

  try {
    await store.dispatch('members/loadMemberDetails', { memberCode: code });
  } catch (error) {
    console.error(error);
  }

  isLoading.value = false;
};

loadMemberDetails();

const isEditing = ref(false);
const isUpdateSuccess = ref(false);

const enableEditing = () => (isEditing.value = true);
const disableEditing = () => (isEditing.value = false);

const showSuccessModal = () => (isUpdateSuccess.value = true);
const hideSuccessModal = () => (isUpdateSuccess.value = false);

const title = computed(() => `${isEditing.value ? 'Edit Profile' : 'Profile'} - ${code}`);

const handleSubmit = async (payload) => {
  if (!isEditing.value) {
    return;
  }
  isLoading.value = true;

  try {
    await store.dispatch('members/updateMember', {
      code: code,
      ...payload,
    });

    isLoading.value = false;
    disableEditing();
    showSuccessModal();
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped>
.member-profile {
  padding-bottom: 2rem;
}

.member-profile__header,
.member-profile--loading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
}

.member-profile--loading {
  color: var(--color-black-muted);
}
.member-profile__title {
  font-weight: 500;
  font-size: 1.5rem;
}
</style>
