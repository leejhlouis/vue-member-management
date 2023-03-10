<template>
  <TheHeader />
  <RouterView />
</template>

<script setup>
import { defineComponent } from 'vue';
import TheHeader from './components/layouts/TheHeader.vue';

defineComponent({
  TheHeader,
});
</script>
