<template>
  <TheHeader />
  <div>
    <main v-if="!isLoading">
      <MembersListHeader class="members-summary-header" @onMemberCreated="reload" />
      <MembersListTable
        class="members-summary-table"
        @onMemberDeleted="reload"
        @onScrollEnd="loadMore"
      />
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
const isLoading = ref(false);
const isLoadingMoreRows = ref(false);
const page = ref(0);

const hasAllMembersLoaded = ref(false);

const members = computed(() => store.getters['members/members']);

const loadMembers = async () => {
  isLoading.value = true;

  try {
    await store.dispatch('members/loadMembers', { page: page.value++ });
  } catch (error) {
    console.error(error);
  }

  isLoading.value = false;
};

const reload = async () => {
  page.value = 0;
  hasAllMembersLoaded.value = false;

  await loadMembers();
};

const loadMore = async () => {
  isLoadingMoreRows.value = true;

  try {
    await store.dispatch('members/pushMembers', { page: page.value++ });
  } catch (error) {
    if (error.response.status === 404) {
      hasAllMembersLoaded.value = true;
    }
  }

  isLoadingMoreRows.value = false;
};

provide('members', members);
provide('isLoadingMoreRows', isLoadingMoreRows);
provide('hasAllMembersLoaded', hasAllMembersLoaded);

loadMembers();
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  min-height: 100%;
  height: calc(100vh - (56px + 48px));
  overflow: auto;
}

.members-summary-header {
  margin-top: 2rem;
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
