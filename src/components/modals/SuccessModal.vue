<template>
  <ConfirmationModal
    title="Member/address berhasil dihapus/ditambah/diubah"
    @close="close"
    closeButtonCaption="Tutup"
  >
    <template #illustration>
      <BaseIcon :size="120" color="#33bd02"> <CheckCircleIcon /></BaseIcon>
    </template>
  </ConfirmationModal>
</template>

<script setup>
import { defineComponent } from 'vue';
import ConfirmationModal from '../ui/modals/ConfirmationModal.vue';
import { CheckCircleIcon } from '@heroicons/vue/24/solid';

defineComponent({
  ConfirmationModal,
  CheckCircleIcon,
});

const close = () => {};
</script>
