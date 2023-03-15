<template>
  <main>
    <MembersListHeader class="members-summary-header" />
    <MembersListTable class="members-summary-table" />
  </main>
</template>

<script setup>
import { defineComponent } from 'vue';
import MembersListHeader from '../components/summary/MembersListHeader.vue';
import MembersListTable from '../components/summary/MembersListTable.vue';

defineComponent({
  MembersListHeader,
  MembersListTable,
});
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: 2rem 0;
}

.members-summary-header,
.members-summary-table {
  width: 100%;
  box-sizing: border-box;
}
</style>
