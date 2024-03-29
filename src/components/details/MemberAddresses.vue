<template>
  <div>
    <div v-if="!isLoadingAddresses" class="member-addresses">
      <AddresssFormModal
        v-if="isAddressFormVisible"
        :mode="formMode"
        :item="formItem"
        @close="hideAddressForm"
        @submit="submitAddressForm"
      />
      <DeleteAlertModal
        v-if="isDeleteModalVisible"
        @close="hideDeleteModal"
        @confirm="deleteAddress"
      />
      <LoadingModal v-if="isSubmitting" />
      <SuccessAlertModal v-if="isSuccess" :title="successMessage" @close="handleSuccess" />
      <div class="member-addresses__header">
        <h1 class="member-addresses__title">Address - {{ code }}</h1>
        <BaseButton has-icon @click="showAddressForm('add')">
          <template #icon>
            <BaseIcon> <PlusIcon /></BaseIcon>
          </template>
          Tambah
        </BaseButton>
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
    </div>
    <BaseLoading v-else />
  </div>
</template>

<script setup>
import AddressItem from './AddressItem.vue';
import AddresssFormModal from '../modals/AddressFormModal.vue';
import { PlusIcon } from '@heroicons/vue/24/solid';
import { ref, computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

defineComponent({
  AddressItem,
  AddresssFormModal,
  PlusIcon,
});

const { code } = defineProps(['code']);
const store = useStore();

const isLoadingAddresses = ref(false);
const isSubmitting = ref(false);

const addresses = computed(() => store.getters['addresses/addresses']);

const loadAddresses = async () => {
  isLoadingAddresses.value = true;

  try {
    await store.dispatch('addresses/loadAddresses', { memberCode: code });
  } catch (error) {
    console.error(error);
  }

  isLoadingAddresses.value = false;
};

loadAddresses();

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

const addAddress = async (data) => {
  try {
    await store.dispatch('addresses/addAddress', {
      newAddress: {
        ...data,
      },
      memberCode: code,
    });

    showSuccessModal('ditambah');
  } catch (error) {
    console.error(error);
  }
};

const editAddress = async (data) => {
  try {
    await store.dispatch('addresses/editAddress', {
      updatedAddress: {
        ...data,
        code: formItem.value.code,
      },
      memberCode: code,
    });

    showSuccessModal('diubah');
  } catch (error) {
    console.error(error);
  }
};

const submitAddressForm = async (data) => {
  hideAddressForm();
  isSubmitting.value = true;

  if (formMode.value === 'add') {
    await addAddress(data);
  } else if (formMode.value === 'edit') {
    await editAddress(data);
  } else {
    return;
  }

  isSubmitting.value = false;
};

const deleteAddress = async () => {
  hideDeleteModal();
  isSubmitting.value = true;

  try {
    await store.dispatch('addresses/deleteAddress', {
      addressCode: addressCode.value,
      memberCode: code,
    });

    isSubmitting.value = false;
    showSuccessModal('dihapus');
  } catch (error) {
    console.error(error);
  }
};

const handleSuccess = () => {
  hideSuccessModal();
  loadAddresses();
};
</script>

<style scoped>
.member-addresses {
  padding-bottom: 2rem;
}

.member-addresses__header,
.member-addresses--loading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
}
.member-addresses--loading {
  color: var(--color-black-muted);
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
