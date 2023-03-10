<template>
  <teleport to="body">
    <div class="backdrop" @click="close"></div>
    <dialog open class="dialog" :style="maxWidthStyle">
      <section class="dialog__wrapper">
        <slot></slot>
      </section>
    </dialog>
  </teleport>
</template>

<script setup>
import { computed } from 'vue';
import { defineEmits, defineProps } from 'vue';

const emit = defineEmits(['close']);

const props = defineProps({
  maxWidth: {
    type: Number,
    required: false,
    default: 786,
  },
});

const close = () => {
  emit('close');
};

const maxWidthStyle = computed(() => {
  return {
    maxWidth: props.maxWidth + 'px',
  };
});
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 100;
}

.dialog {
  position: fixed;
  top: 10vh;
  margin: 0 auto;
  width: 100%;
  max-height: 80vh;
  z-index: 101;
  border-radius: 8px;
  border: 0;
  padding: 0;
  overflow-y: auto;
  background-color: var(--color-white);
}

.dialog__wrapper {
  padding: 2.5rem;
}
</style>
