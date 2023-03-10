<template>
  <ConfirmationModal
    title="Apakah Anda yakin ingin menghapus member ini?"
    @close="close"
    has-submit
  >
    <template #illustration>
      <BaseIcon :size="120" color="#F25B61"> <ExclamationTriangleIcon /></BaseIcon>
    </template>
  </ConfirmationModal>
</template>

<script setup>
import { defineComponent } from 'vue'
import ConfirmationModal from '../ui/modals/ConfirmationModal.vue'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/solid'

defineComponent({
  ConfirmationModal,
  ExclamationTriangleIcon
})

const close = () => {}
</script>
