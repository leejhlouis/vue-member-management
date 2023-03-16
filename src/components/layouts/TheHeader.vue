<template>
  <header class="header">
    <BaseContainer class="header__container">
      <BaseIcon v-if="hasDropdown" class="header__dropdown-btn" :size="32" @click="toggle">
        <Bars3BottomLeftIcon />
      </BaseIcon>
      <p class="header__title">Member Management System</p>
    </BaseContainer>
  </header>
</template>

<script setup>
import { Bars3BottomLeftIcon } from '@heroicons/vue/24/solid';
import { defineComponent } from 'vue';

defineComponent({
  Bars3BottomLeftIcon,
});

defineProps({
  hasDropdown: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const emit = defineEmits(['toggle']);
const toggle = () => emit('toggle');
</script>

<style scoped>
.header {
  background: var(--color-white);
  filter: drop-shadow(0 2px 4px rgb(0 0 0 / 0.15));
  height: 56px;
  display: flex;
  justify-content: center;
}

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.header__dropdown-btn {
  display: none;
  cursor: pointer;
  padding: 0 0.25rem;
}

.header__dropdown-btn:hover {
  background: var(--color-white-muted);
  border-radius: 4px;
}

.header__title {
  font-weight: 500;
  font-size: 1.25rem;
  text-align: center;
  width: 100%;
}

@media screen and (max-width: 1023px) {
  .header__dropdown-btn {
    display: block;
  }
}
</style>
