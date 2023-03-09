<template>
  <button v-if="!link" :class="classes">
    <slot v-if="hasIcon" name="icon"></slot>
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="classes">
    <slot v-if="hasIcon" name="icon"></slot>
    <slot></slot>
  </router-link>
</template>

<script setup>
import { computed, defineProps } from 'vue'

const props = defineProps({
  mode: {
    type: String,
    required: false,
    default: 'primary'
  },
  link: {
    type: Boolean,
    required: false,
    default: false
  },
  to: {
    type: String,
    required: false,
    default: '/'
  },
  hasIcon: {
    type: Boolean,
    required: false,
    default: false
  },
  iconPosition: {
    type: String,
    required: false,
    default: 'left'
  }
})

const classes = computed(
  () =>
    `button button--${props.mode} ${props.hasIcon && 'button--centered'} ${
      props.iconPosition === 'right' && 'button--row-reverse'
    }`
)
</script>

<style scoped>
.button {
  text-decoration: none;
  padding: 0.5rem 1rem;
  font: inherit;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  border-radius: 8px;
  display: inline-block;
  box-shadow: var(--box-shadow);
}

.button--primary {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-white);
}

.button--secondary {
  background: var(--color-secondary);
  border-color: var(--color-secondary);
  color: var(--color-white);
}

.button--centered {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.25rem;
}

.button--row-reverse {
  flex-direction: row-reverse;
}

.button:hover,
.button:active {
  opacity: 0.8;
}
</style>
