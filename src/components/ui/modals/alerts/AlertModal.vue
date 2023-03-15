<template>
  <BaseModal :maxWidth="540" @close="close">
    <div class="dialog__illustration">
      <slot name="illustration"></slot>
    </div>
    <h2 class="dialog__title">{{ title }}</h2>
    <div class="dialog__actions dialog__actions--has-submit">
      <BaseButton :outline="hasSubmit" @click="close">{{ closeButtonCaption }}</BaseButton>
      <BaseButton v-if="hasSubmit" @click="confirm">Ya</BaseButton>
    </div>
  </BaseModal>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
  hasSubmit: {
    type: Boolean,
    required: false,
    default: false,
  },
  closeButtonCaption: {
    type: String,
    required: false,
    default: 'Tidak',
  },
});

const emit = defineEmits(['close', 'confirm']);

const close = () => emit('close');
const confirm = () => emit('confirm');
</script>

<style scoped>
.dialog__title {
  font-weight: 500;
  font-size: 1.25rem;
  text-align: center;
}

.dialog__illustration,
.dialog__actions {
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog__illustration {
  margin-bottom: 0.5rem;
}
.dialog__actions {
  gap: 1rem;
  margin-top: 1.5rem;
}
</style>
