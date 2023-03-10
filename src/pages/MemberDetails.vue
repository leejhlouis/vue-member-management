<template>
  <main>
    <MemberSideNavigation :code="code" />
    <RouterView :code="code" />
  </main>
</template>

<script setup>
import { defineComponent } from 'vue';
import MemberSideNavigation from '../components/details/MemberSideNavigation.vue';

const { code } = defineProps(['code']);

defineComponent({
  MemberSideNavigation,
});
</script>

<style scoped>
main {
  display: flex;
  flex-direction: row;
}
</style>
