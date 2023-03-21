<template>
  <AlertModal
    title="Apakah Anda yakin ingin menghapus member ini?"
    @close="close"
    @confirm="confirm"
    has-submit
  >
    <template #illustration>
      <BaseIcon :size="120" color="#F25B61">
        <ExclamationTriangleIcon />
      </BaseIcon>
    </template>
  </AlertModal>
</template>

<script setup>
import { defineComponent } from 'vue';
import { ExclamationTriangleIcon } from '@heroicons/vue/24/solid';

defineComponent({ ExclamationTriangleIcon });

const emit = defineEmits(['close', 'confirm']);

const close = () => emit('close');
const confirm = () => emit('confirm');
</script>
