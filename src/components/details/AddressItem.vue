<template>
  <li class="address">
    <header class="address__header">
      <h2 class="address__title">{{ label }}</h2>
    </header>
    <div class="address__body">
      <p class="address__content">
        {{ address }}
      </p>
      <p class="address__region">{{ region }}</p>
    </div>
    <footer class="address__footer">
      <BaseButton outline @click="handleEdit">Ubah</BaseButton>
      <BaseButton @click="handleDelete">Hapus</BaseButton>
    </footer>
  </li>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['code', 'label', 'address', 'province', 'city']);

const emit = defineEmits(['edit', 'delete']);

const region = computed(() => `${props.city}, ${props.province}`);

const handleEdit = () => emit('edit');
const handleDelete = () => emit('delete', { code: props.code });
</script>

<style scoped>
.address {
  background: var(--color-white);
  list-style-type: none;
  display: block;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  box-shadow: var(--box-shadow);
  /* padding: 1.5rem 2rem; */
}

.address__header,
.address__body,
.address__footer {
  padding: 1rem 1.5rem;
}

.address__header,
.address__body {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.address__title {
  font-size: 1.15rem;
  font-weight: 500;
}

.address__content {
  padding-bottom: 1rem;
}

.address__region {
  color: var(--color-black-muted);
}

.address__footer {
  display: flex;
  gap: 1rem;
}
</style>
