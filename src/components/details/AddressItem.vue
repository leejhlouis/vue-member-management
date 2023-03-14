<template>
  <li class="address">
    <AddresssFormModal
      v-if="isEditFormVisible"
      mode="edit"
      @submit="handleUpdate"
      @close="hideEditAddressForm"
    />
    <DeleteConfirmationModal
      v-if="isDeleteModalVisible"
      @confirm="handleDelete"
      @close="hideDeleteModal"
    />
    <header class="address__header">
      <h2 class="address__title">{{ label }}</h2>
    </header>
    <div class="address__body">
      <p class="address__content">
        {{ address }}
      </p>
      <p class="address__location">{{ addressLocation }}</p>
    </div>
    <footer class="address__footer">
      <BaseButton outline @click="showEditAddressForm">Ubah</BaseButton>
      <BaseButton @click="showDeleteModal">Hapus</BaseButton>
    </footer>
  </li>
</template>

<script setup>
import { computed, ref, defineComponent } from 'vue';
import AddresssFormModal from '../modals/AddressFormModal.vue';

const props = defineProps(['code', 'label', 'address', 'province', 'city']);

defineComponent({
  AddresssFormModal,
});

const isEditFormVisible = ref(false);
const isDeleteModalVisible = ref(false);

const addressLocation = computed(() => `${props.city}, ${props.province}`);

const showEditAddressForm = () => (isEditFormVisible.value = true);
const hideEditAddressForm = () => (isEditFormVisible.value = false);

const showDeleteModal = () => (isDeleteModalVisible.value = true);
const hideDeleteModal = () => (isDeleteModalVisible.value = false);

const handleUpdate = async () => {};

const handleDelete = async () => {};
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

.address__location {
  color: var(--color-black-muted);
}

.address__footer {
  display: flex;
  gap: 1rem;
}
</style>
