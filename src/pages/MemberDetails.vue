<template>
  <teleport to="body">
    <div v-if="isSideNavVisible" class="backdrop" @click="toggleSideNav"></div>
  </teleport>
  <TheHeader class="header" @toggle="toggleSideNav" has-dropdown />
  <main>
    <MemberSideNavigation v-if="isSideNavVisible" :code="code" @on-click="handleClick" />
    <div class="member-details__wrapper" :class="wrapperWidth">
      <div class="member-details__content">
        <BaseContainer class="member-details__container">
          <RouterView :code="code" />
        </BaseContainer>
      </div>
      <TheFooter class="footer" />
    </div>
  </main>
</template>

<script setup>
import { ref, defineComponent, computed } from 'vue';
import MemberSideNavigation from '../components/details/MemberSideNavigation.vue';
import TheHeader from '../components/layouts/TheHeader.vue';
import TheFooter from '../components/layouts/TheFooter.vue';

const { code } = defineProps(['code']);

defineComponent({
  MemberSideNavigation,
  TheHeader,
  TheFooter,
});

const isSideNavVisible = ref(window.innerWidth >= 540);

const onResize = () => {
  if (window.innerWidth >= 1024) {
    isSideNavVisible.value = true;
  }
};

window.addEventListener('resize', onResize);

const toggleSideNav = () => {
  isSideNavVisible.value = !isSideNavVisible.value;
  onResize();
};

const handleClick = () => {
  if (window.innerWidth < 540) {
    toggleSideNav();
  }
};

const wrapperWidth = computed(() => {
  return {
    'member-details__wrapper--sidenav-hidden': !isSideNavVisible.value,
  };
});
</script>

<style scoped>
main {
  display: flex;
  flex-direction: row;
}

.backdrop {
  display: none;
  top: 56px;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 5;
}

.member-details__wrapper {
  width: calc(100% - 240px);
  height: calc(100vh - 56px);
  min-height: fit-content;
}

.member-details__content {
  width: calc(100% - 2rem);
  height: calc(100vh - (56px + 48px));
  margin: 0 auto;
  overflow: auto;
}

.member-details__container {
  padding-left: 1rem;
  padding-right: 1rem;
}

@media screen and (max-width: 767px) {
  .member-details__wrapper {
    width: calc(100% - 180px);
  }
}

@media screen and (max-width: 539px) {
  .member-details__wrapper {
    width: 100%;
  }
  .backdrop {
    display: block;
    position: fixed;
  }
}

.member-details__wrapper--sidenav-hidden {
  width: 100%;
}
</style>
