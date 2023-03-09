<template>
  <main>
    <MemberSideNavigation />
    <RouterView />
  </main>
</template>

<script setup>
import { defineComponent } from 'vue'
import MemberSideNavigation from '../components/details/MemberSideNavigation.vue'

defineComponent({
  MemberSideNavigation
})
</script>

<style scoped>
main {
  display: flex;
  flex-direction: row;
}
</style>
