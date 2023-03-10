<template>
  <BaseContainer>
    <div class="wrapper">
      <table class="members-list-table">
        <thead>
          <tr>
            <th class="members-list-table__header">Member code</th>
            <th class="members-list-table__header">Name</th>
            <th class="members-list-table__header">Email</th>
            <th class="members-list-table__header">Phone number</th>
            <th class="members-list-table__header">Date of birth</th>
            <th class="members-list-table__header">Actions</th>
          </tr>
        </thead>
        <tbody>
          <MemberRow />
        </tbody>
      </table>
    </div>
  </BaseContainer>
</template>

<script setup>
import { defineComponent } from 'vue';
import MemberRow from './MemberRow.vue';

defineComponent({
  MemberRow,
});
</script>
<style scoped>
.wrapper {
  /* overflow-x: scroll;
  overflow-y: visible !important; */
  -ms-overflow-style: none;
  scrollbar-width: none;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
}

.wrapper::-webkit-scrollbar {
  display: none;
}

.members-list-table {
  border-collapse: collapse;
  width: 100%;
}

.members-list-table__header {
  background-color: var(--color-primary);
  color: var(--color-white);
  font-weight: 400;
  padding: 12px 8px;
  text-align: left;
}
</style>
