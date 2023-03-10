<template>
  <BaseContainer class="member-addresses">
    <AddresssFormModal
      v-if="isAddressFormVisible"
      mode="add"
      @close="hideAddAddressForm"
      @submit="submit"
    />
    <div class="member-addresses__header">
      <h1 class="member-addresses__title">Address - MEMBERID</h1>
      <BaseButton @click="showAddAddressForm">Tambah</BaseButton>
    </div>
    <ul class="member-addresses__list">
      <AddressItem></AddressItem>
      <AddressItem></AddressItem>
    </ul>
  </BaseContainer>
</template>

<script setup>
import AddressItem from './AddressItem.vue';
import AddresssFormModal from '../modals/AddressFormModal.vue';
import { ref, defineComponent } from 'vue';

defineComponent({
  AddressItem,
  AddresssFormModal,
});

const isAddressFormVisible = ref(false);

const showAddAddressForm = () => {
  isAddressFormVisible.value = true;
};

const hideAddAddressForm = () => {
  isAddressFormVisible.value = false;
};

const submit = () => {};
</script>

<style scoped>
.member-addresses {
  width: 100%;
}

.member-addresses__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0;
}
.member-addresses__title {
  font-weight: 500;
  font-size: 1.5rem;
}

.member-addresses__list {
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
