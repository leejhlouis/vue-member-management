<template>
  <nav class="sidenav">
    <div class="sidenav__profpic--wrapper">
      <img
        src="https://64.media.tumblr.com/1159d4da184bfbcca8c09886853894e1/c46807d1376525bb-74/s2048x3072/5189cccb0c340def8995b99cf6937f3e86a8e84e.jpg"
        class="sidenav__profpic--picture"
        alt=""
      />
    </div>
    <ul class="sidenav__list">
      <li class="sidenav__list-item-wrapper">
        <RouterLink class="sidenav__list-item" to="/members/1/profile">
          <BaseIcon><UserIcon /></BaseIcon>
          <p>Profile</p>
        </RouterLink>
      </li>
      <li class="sidenav__list-item-wrapper">
        <RouterLink class="sidenav__list-item" to="/members/1/addresses">
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
import { ArrowUturnLeftIcon, MapPinIcon, UserIcon } from '@heroicons/vue/24/solid'
import { defineComponent } from 'vue'

defineComponent({
  ArrowUturnLeftIcon,
  MapPinIcon,
  UserIcon
})
</script>

<style scoped>
.sidenav {
  background: var(--color-primary);
  height: calc(100vh - 56px);
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  width: 240px;
}

.sidenav::-webkit-scrollbar {
  display: none;
}

.sidenav__profpic--wrapper {
  display: flex;
  justify-content: center;
  margin: 1.5rem;
}

.sidenav__profpic--picture {
  object-fit: cover;
  width: 100%;
  height: 180px;
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
</style>
