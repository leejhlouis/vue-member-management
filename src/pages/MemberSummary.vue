<template>
  <TheHeader />
  <div>
    <main v-if="!isLoading">
      <MembersListHeader class="members-summary-header" @onMemberCreated="loadMembers" />
      <MembersListTable class="members-summary-table" @onMemberDeleted="loadMembers" />
    </main>
    <BaseLoading class="loading" v-else>Loading...</BaseLoading>
  </div>
  <TheFooter class="footer" />
</template>

<script setup>
import { ref, computed, provide, defineComponent } from 'vue';
import MembersListHeader from '../components/summary/MembersListHeader.vue';
import MembersListTable from '../components/summary/MembersListTable.vue';
import TheHeader from '../components/layouts/TheHeader.vue';
import TheFooter from '../components/layouts/TheFooter.vue';
import { useStore } from 'vuex';

defineComponent({
  MembersListHeader,
  MembersListTable,
  TheHeader,
  TheFooter,
});

const store = useStore();

const isLoading = ref(true);

const loadMembers = async () => {
  isLoading.value = true;

  try {
    await store.dispatch('members/loadMembers');
  } catch (error) {
    console.error(error);
  }

  isLoading.value = false;
};

const members = computed(() => store.getters['members/members']);

provide('members', members);

loadMembers();
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding-top: 2rem;
  min-height: 100%;
  max-height: calc(100vh - (56px + 48px + 2rem));
  overflow: auto;
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
