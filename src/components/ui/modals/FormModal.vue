<template>
  <BaseModal @close="close">
    <header class="dialog__header">
      <h2 class="dialog__title">{{ title }}</h2>
      <BaseIcon :size="24" hover @click="close"><XMarkIcon /></BaseIcon>
    </header>
    <section class="dialog__content">
      <slot></slot>
    </section>
  </BaseModal>
</template>

<script setup>
import { XMarkIcon } from '@heroicons/vue/24/solid';
import { defineComponent, defineProps, defineEmits } from 'vue';

defineComponent({ XMarkIcon });

defineProps({
  title: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['close', 'submit']);

const close = () => {
  emit('close');
};
</script>

<style scoped>
.dialog__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.dialog__title {
  font-weight: 500;
  font-size: 1.25rem;
}
</style>
