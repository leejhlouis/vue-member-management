<template>
  <li class="address">
    <AddresssFormModal
      v-if="isEditFormVisible"
      mode="edit"
      @close="hideEditAddressForm"
      @submit="submit"
    />
    <header class="address__header">
      <h2 class="address__title">Rumah</h2>
    </header>
    <div class="address__body">
      <p class="address__content">
        Gedung Sarana Jaya Jl. Budi Kemuliaan no.1, RT 2/RW 3, Gambir, Jakarta Pusat, Jakarta 10110
      </p>
      <p class="address__city">Jakarta Pusat, DKI Jakarta</p>
    </div>
    <footer class="address__footer">
      <BaseButton outline @click="showEditAddressForm">Ubah</BaseButton>
      <BaseButton @click="deleteAddress">Hapus</BaseButton>
    </footer>
  </li>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import AddresssFormModal from './AddressFormModal.vue'

defineComponent({
  AddresssFormModal
})

const isEditFormVisible = ref(false)

const showEditAddressForm = () => {
  isEditFormVisible.value = true
}

const hideEditAddressForm = () => {
  isEditFormVisible.value = false
}

const submit = () => {}

const deleteAddress = () => {}
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

.address__city {
  color: var(--color-black-muted);
}

.address__footer {
  display: flex;
  gap: 1rem;
}
</style>
