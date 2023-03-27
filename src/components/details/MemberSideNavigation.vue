<template>
  <nav class="sidenav">
    <div class="sidenav__profpic--wrapper">
      <img v-if="!isLoading" :src="details.profilePicture" class="sidenav__profpic--picture" alt="" />
      <div v-else class="sidenav__profpic-loading">
        <p>Loading...</p>
      </div>
    </div>
    <ul class="sidenav__list">
      <li class="sidenav__list-item-wrapper">
        <RouterLink class="sidenav__list-item" :to="profileNavLink" @click="onClick">
          <BaseIcon><UserIcon /></BaseIcon>
          <p>Profile</p>
        </RouterLink>
      </li>
      <li class="sidenav__list-item-wrapper">
        <RouterLink class="sidenav__list-item" :to="addressNavLink" @click="onClick">
          <BaseIcon><MapPinIcon /></BaseIcon>
          <p>Addresses</p>
        </RouterLink>
      </li>
      <li class="sidenav__list-item-wrapper">
        <RouterLink class="sidenav__list-item" to="/">
          <BaseIcon><ArrowUturnLeftIcon /></BaseIcon>
          <p>Back</p>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ArrowUturnLeftIcon, MapPinIcon, UserIcon } from '@heroicons/vue/24/solid';
import { ref, defineComponent, computed } from 'vue';
import { useStore } from "vuex";

const store = useStore();

const props = defineProps(['code']);

defineComponent({
  ArrowUturnLeftIcon,
  MapPinIcon,
  UserIcon,
});

const profileNavLink = computed(() => `/members/${props.code}/profile`);
const addressNavLink = computed(() => `/members/${props.code}/addresses`);

const emit = defineEmits(['onClick']);
const onClick = () => emit('onClick');

const isLoading = ref(false);
const details = computed(() => store.getters['members/details']);

const loadMemberDetails = async () => {
  isLoading.value = true;

  try {
    await store.dispatch('members/loadMemberDetails', { memberCode: props.code });
  } catch (error) {
    console.error(error);
  }

  isLoading.value = false;
};

loadMemberDetails();
</script>

<style scoped>
.sidenav {
  background: var(--color-primary);
  height: 100vh;
  max-height: calc(100vh - (56px));
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 240px;
}

.sidenav::-webkit-scrollbar {
  display: none;
}

.sidenav__profpic--wrapper,
.sidenav__list {
  width: 100%;
}

.sidenav__profpic--wrapper {
  display: flex;
  justify-content: center;
  padding: 1.5rem;
  box-sizing: border-box;
}

.sidenav__profpic--picture {
  object-fit: contain;
  width: 100%;
  height: 180px;
}

.sidenav__profpic-loading{
  background: rgba(0, 0, 0, 0.1);
  opacity: 0.8;
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.sidenav__profpic-loading p{
  width: 100%;
  color: var(--color-white);
}

.sidenav__list {
  list-style-type: none;
}

.sidenav__list-item {
  color: var(--color-white);
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.sidenav__list-item:hover,
.sidenav__list-item.router-link-exact-active {
  background: rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 767px) {
  .sidenav {
    width: 200px;
  }
}

@media screen and (max-width: 539px) {
  .sidenav {
    position: fixed;
    z-index: 10;
  }
}
</style>
