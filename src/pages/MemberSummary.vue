<template>
  <TheHeader />
  <main>
    <MembersListHeader class="members-summary-header" />
    <MembersListTable class="members-summary-table" />
  </main>
  <TheFooter />
</template>

<script setup>
import { defineComponent } from 'vue';
import MembersListHeader from '../components/summary/MembersListHeader.vue';
import MembersListTable from '../components/summary/MembersListTable.vue';
import TheHeader from '../components/layouts/TheHeader.vue';
import TheFooter from '../components/layouts/TheFooter.vue';

defineComponent({
  MembersListHeader,
  MembersListTable,
  TheHeader,
  TheFooter,
});
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: 2rem;
}

.members-summary-header {
  height: 72px;
  display: flex;
  align-items: center;
}

.members-summary-header,
.members-summary-table {
  width: 100%;
  box-sizing: border-box;
}
</style>
