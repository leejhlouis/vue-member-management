<template>
  <teleport to="body">
    <div class="backdrop" @click="close"></div>
    <dialog open class="dialog" :class="dialogSizeClass">
      <section class="dialog__wrapper">
        <slot></slot>
      </section>
    </dialog>
  </teleport>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  size: {
    type: String,
    required: false,
    default: 'normal',
  },
});

const emit = defineEmits(['close']);
const close = () => emit('close');

const dialogSizeClass = computed(() => {
  return {
    'dialog--normal': props.size === 'normal',
    'dialog--sm': props.size === 'small',
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
  width: calc(100% - 2rem);
  max-height: 80vh;
  z-index: 101;
  border-radius: 8px;
  border: 0;
  padding: 0;
  overflow-y: auto;
  background-color: var(--color-white);
}
.dialog--normal {
  max-width: 768px;
}

.dialog--sm {
  max-width: 540px;
}

.dialog__wrapper {
  padding: 2.5rem;
}

@media screen and (max-width: 767px) {
  .dialog {
    border-radius: 6px;
  }
  .dialog__wrapper {
    padding: 1.5rem;
  }

  .dialog--sm {
    max-width: 400px;
  }
}

@media screen and (max-width: 540px) {
  .dialog--sm {
    max-width: 360px;
  }
}
</style>
