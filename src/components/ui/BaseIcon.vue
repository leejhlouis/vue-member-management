<template>
  <div :class="hoverClass" :style="sizeStyles" @mouseover="hover" @mouseleave="unhover">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed, defineProps, ref } from 'vue'

const props = defineProps({
  size: {
    type: Number,
    required: false,
    default: 16
  },
  hover: {
    type: Boolean,
    required: false,
    default: false
  }
})

const isHovering = ref(false)

const hoverClass = computed(() => {
  return {
    'dialog--hover': props.hover && isHovering.value
  }
})

const sizeStyles = computed(() => {
  return {
    width: props.size + 'px',
    height: props.size + 'px'
  }
})

const hover = () => {
  isHovering.value = true
}

const unhover = () => {
  isHovering.value = false
}
</script>

<style scoped>
.dialog--hover {
  cursor: pointer;
  color: rgb(205, 49, 49);
}
</style>
