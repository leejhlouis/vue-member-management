<template>
  <div class="loading" :class="{ 'loading--fit-content': fitContent }">
    <BaseSpinner />
    <h2 class="loading__message">{{ message }}</h2>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import BaseSpinner from './BaseSpinner.vue';

defineProps({
  fitContent: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const dots = ref('.');
const message = computed(() => {
  return `Loading${dots.value}`;
});

setInterval(() => {
  if (dots.value.length >= 3) {
    dots.value = '.';
  } else {
    dots.value += '.';
  }
}, 500);
</script>

<style scoped>
.loading {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  height: calc(100vh - (56px + 48px));
}

.loading--fit-content {
  height: fit-content;
}

.loading__message {
  font-weight: 500;
  font-size: 1.25rem;
  color: var(--color-black);
}
</style>
