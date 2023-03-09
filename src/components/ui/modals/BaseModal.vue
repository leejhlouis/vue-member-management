<template>
  <teleport to="body">
    <div class="backdrop" @click="close"></div>
    <dialog open class="dialog">
      <section class="dialog__wrapper">
        <slot></slot>
      </section>
    </dialog>
  </teleport>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>

<style>
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
  top: 12vh;
  margin: 0 auto;
  z-index: 101;
  border-radius: 8px;
  border: 0;
  padding: 0;
  overflow: hidden;
  background-color: var(--color-white);
  width: 100%;
  max-width: 768px;
}

.dialog__wrapper {
  padding: 2rem;
}
</style>
