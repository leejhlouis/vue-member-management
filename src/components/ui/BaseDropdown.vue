<template>
  <div class="dropdown" ref="dropdown">
    <BaseButton
      class="dropdown__button"
      has-icon
      icon-position="right"
      mode="secondary"
      @click="toggleDropdown"
    >
      <template #icon>
        <BaseIcon>
          <ChevronUpIcon v-show="isDropdownVisible" />
          <ChevronDownIcon v-show="!isDropdownVisible" />
        </BaseIcon>
      </template>
      <p>Actions</p>
    </BaseButton>
    <ul v-if="isDropdownVisible" class="dropdown__menu">
      <slot></slot>
    </ul>
  </div>
</template>

<script setup>
import { defineComponent, ref } from 'vue';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/24/solid';

defineComponent({
  ChevronUpIcon,
  ChevronDownIcon,
});

const dropdown = ref(null);
const isDropdownVisible = ref(false);

const hideDropdownIfClickedOutside = ({ target }) => {
  if (!dropdown.value.contains(target)) {
    isDropdownVisible.value = false;
    document.removeEventListener('click', hideDropdownIfClickedOutside);
  }
};

window.addEventListener('click', hideDropdownIfClickedOutside);

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};
</script>

<style scoped>
.dropdown {
  position: relative;
}

.dropdown__menu {
  position: absolute;
  list-style-type: none;
  background: var(--color-white);
  box-shadow: var(--box-shadow);
  border-radius: 16px;
  z-index: 10;
  width: fit-content;
  padding: 0.25rem 0;
  margin-top: 0.5rem;
}
</style>
