<template>
  <form class="form">
    <slot></slot>
    <div v-if="submit" class="form__actions">
      <BaseButton :disabled="!canSubmit">Submit</BaseButton>
    </div>
  </form>
</template>

<script setup>
defineProps({
  submit: {
    type: Boolean,
    required: false,
    default: true,
  },
  canSubmit: {
    type: Boolean,
    required: false,
    default: true,
  },
});
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form__actions {
  margin-top: 1.25rem;
  display: flex;
  justify-content: end;
  width: 100%;
}
</style>
