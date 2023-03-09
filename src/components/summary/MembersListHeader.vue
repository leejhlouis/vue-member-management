<template>
  <div>
    <CreateNewUserModal v-if="isCreateModalVisible" @close="close" @submit="submit" />
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
import CreateNewUserModal from './CreateNewUserModal.vue'
import { PlusIcon } from '@heroicons/vue/24/solid'
import { defineComponent, ref } from 'vue'

defineComponent({ CreateNewUserModal, PlusIcon })

const isCreateModalVisible = ref(false)

const showCreateModal = () => {
  isCreateModalVisible.value = true
}

const close = () => {
  isCreateModalVisible.value = false
}

const submit = () => {}
</script>

<style scoped>
.member-summary__title {
  font-weight: 500;
  font-size: 1.25rem;
  padding-bottom: 0.75rem;
}
</style>
