<template>
  <BaseContainer class="member-addresses">
    <SuccessModal v-if="isSuccess" :title="successMessage" @close="hideSuccessModal" />
    <AddresssFormModal
      v-if="isAddressFormVisible"
      :mode="formMode"
      :item="formItem"
      @close="hideAddressForm"
      @submit="submitAddressForm"
    />
    <DeleteConfirmationModal
      v-if="isDeleteModalVisible"
      @close="hideDeleteModal"
      @confirm="deleteAddress"
    />
    <div class="member-addresses__header">
      <h1 class="member-addresses__title">Address - {{ code }}</h1>
      <BaseButton @click="showAddressForm('add')">Tambah</BaseButton>
    </div>
    <div v-if="isAddressEmpty" class="member-addresses__list--no-address">No address found.</div>
    <ul v-else class="member-addresses__list">
      <AddressItem
        v-for="address in addresses"
        :key="address.code"
        :="address"
        @edit="showAddressForm('edit', address)"
        @delete="showDeleteModal"
      />
    </ul>
  </BaseContainer>
</template>

<script setup>
import AddressItem from './AddressItem.vue';
import AddresssFormModal from '../modals/AddressFormModal.vue';
import { ref, computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const props = defineProps(['code']);
const addresses = computed(() => store.getters['members/addresses'](props.code));

defineComponent({
  AddressItem,
  AddresssFormModal,
});

const isAddressEmpty = computed(() => !addresses.value || addresses.value.length === 0);

const addressCode = ref(null);

const isAddressFormVisible = ref(false);
const isDeleteModalVisible = ref(false);
const isSuccess = ref(false);

const formMode = ref(null);
const formItem = ref(null);

const successMessage = ref('');

const showAddressForm = (mode, item = null) => {
  if (mode === 'add' || mode === 'edit') {
    isAddressFormVisible.value = true;

    formMode.value = mode;
    formItem.value = item;
  }
};

const showDeleteModal = ({ code }) => {
  isDeleteModalVisible.value = true;
  addressCode.value = code;
};

const showSuccessModal = (action) => {
  isSuccess.value = true;
  successMessage.value = `Address berhasil ${action}`;
};

const hideAddressForm = () => (isAddressFormVisible.value = false);
const hideDeleteModal = () => (isDeleteModalVisible.value = false);
const hideSuccessModal = () => (isSuccess.value = false);

const submitAddressForm = async (data) => {
  if (formMode.value === 'add') {
    try {
      store.dispatch('members/addAddress', {
        newAddress: {
          ...data,
        },
        memberCode: props.code,
      });

      showSuccessModal('ditambah');
    } catch (error) {}
  } else if (formMode.value === 'edit') {
    try {
      store.dispatch('members/editAddress', {
        updatedAddress: {
          ...data,
          code: formItem.value.code,
        },
        memberCode: props.code,
      });

      showSuccessModal('diubah');
    } catch (error) {}
  }

  hideAddressForm();
};

const deleteAddress = async () => {
  try {
    store.dispatch('members/deleteAddress', {
      addressCode,
      memberCode: props.code,
    });

    showSuccessModal('dihapus');
  } catch (error) {}

  hideDeleteModal();
};
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

.member-addresses__list--no-address {
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  color: var(--color-black-muted);
}
</style>
