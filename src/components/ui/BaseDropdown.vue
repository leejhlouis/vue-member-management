<template>
  <div class="dropdown" ref="dropdown">
    <BaseButton class="dropdown__button" has-icon icon-position="right" mode="secondary">
      <template #icon>
        <BaseIcon>
          <ChevronUpIcon class="dropdown__chevron-up" />
          <ChevronDownIcon class="dropdown__chevron-down" />
        </BaseIcon>
      </template>
      <p>Actions</p>
    </BaseButton>
    <div class="dropdown__menu-container">
      <ul class="dropdown__menu">
        <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from 'vue';
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/24/solid';

defineComponent({
  ChevronUpIcon,
  ChevronDownIcon,
});
</script>

<style scoped>
.dropdown {
  position: relative;
}

.dropdown:hover .dropdown__menu-container {
  display: inline-block;
}

.dropdown:hover .dropdown__chevron-up {
  display: block;
}

.dropdown:hover .dropdown__chevron-down {
  display: none;
}

.dropdown__chevron-up {
  display: none;
}

.dropdown__menu-container {
  padding-top: 0.5rem;
  display: none;
  position: absolute;
  z-index: 10;
  width: fit-content;
}

.dropdown__menu {
  list-style-type: none;
  background: var(--color-white);
  box-shadow: var(--box-shadow);
  border-radius: 12px;
  padding: 0.25rem 0;
}
</style>
