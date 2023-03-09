<template>
  <BaseContainer class="member-summary">
    <h1 class="member-summary__title">Members</h1>
    <BaseButton mode="primary" has-icon>
      <template #icon>
        <BaseIcon> <PlusIcon /></BaseIcon>
      </template>
      Create</BaseButton
    >
  </BaseContainer>
</template>

<script setup>
import { PlusIcon } from '@heroicons/vue/24/solid'
import { defineComponent } from 'vue'

defineComponent({ PlusIcon })
</script>

<style scoped>
.member-summary__title {
  font-weight: 500;
  font-size: 1.25rem;
  padding-bottom: 0.75rem;
}
</style>
