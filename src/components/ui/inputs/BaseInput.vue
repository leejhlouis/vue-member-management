<template>
  <div class="form__group">
    <label :for="name" class="form__label">{{ label }}</label>
    <slot name="input"></slot>
    <p v-if="!!invalid" class="form__invalid-message">
      {{ invalid }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps(['name', 'label', 'invalid']);
defineEmits(['update:modelValue']);
</script>

<style scoped>
.form__group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  width: 100%;
  box-sizing: border-box;
}

.form__label {
  margin-bottom: 0.5rem;
}
.form__invalid-message {
  color: #e22e2e;
  padding-top: 0.5rem;
}
</style>
