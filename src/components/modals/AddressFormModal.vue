<template>
  <FormModal :title="title" @close="close">
    <BaseForm :can-submit="canSubmit" @submit.prevent="handleSubmit">
      <TextFieldInput
        name="label"
        v-model.trim="attributes.label.val"
        :invalid="attributes.label.invalidMessage"
      />
      <div class="form__group--flex">
        <AutocompleteInput
          name="province"
          :items="provinces"
          v-model="attributes.province.val"
          :invalid="attributes.province.invalidMessage"
          @on-change="filterCities"
        />
        <AutocompleteInput
          name="city"
          :items="cities"
          v-model="attributes.city.val"
          :invalid="attributes.city.invalidMessage"
        />
      </div>
      <TextAreaInput
        name="address"
        v-model.trim="attributes.address.val"
        :invalid="attributes.address.invalidMessage"
      />
    </BaseForm>
  </FormModal>
</template>

<script setup>
import FormModal from '../ui/modals/FormModal.vue';
import { defineEmits, ref, computed } from 'vue';
import { useStore } from 'vuex';

const props = defineProps({
  mode: {
    type: String,
    required: true,
  },
  item: {
    type: Object,
    required: false,
    default: null,
  },
});

const emit = defineEmits(['close', 'submit']);

const attributes = ref({
  label: {
    attrName: 'name',
    val: !!props.item ? props.item.label : '',
    isValid: true,
    invalidMessage: null,
  },
  province: {
    attrName: 'province',
    val: !!props.item ? props.item.province : '',
    isValid: true,
    invalidMessage: null,
  },
  city: {
    attrName: 'city',
    val: !!props.item ? props.item.city : '',
    isValid: true,
    invalidMessage: null,
  },
  address: {
    attrName: 'address',
    val: !!props.item ? props.item.address : '',
    isValid: true,
    invalidMessage: null,
  },
});

const store = useStore();

const loadRegions = async () => {
  try {
    await store.dispatch('regions/loadRegions');
  } catch (error) {
    console.error(error);
  }
};

const provinceCode = ref('');

const provinces = computed(() => store.getters['regions/provinces']);
const cities = computed(() => store.getters['regions/cities'](provinceCode.value));

const title = computed(() => `${props.mode === 'add' ? 'Add' : 'Edit'} address`);

const filterCities = ({ code }) => {
  provinceCode.value = code;
  attributes.value.city.val = '';
};

const close = () => emit('close');

const canSubmit = computed(
  () =>
    attributes.value.label.val !== '' &&
    attributes.value.province.val !== '' &&
    attributes.value.city.val !== '' &&
    attributes.value.address.val !== '',
);

const isValid = computed(() => {
  for (const attr in attributes.value) {
    if (!attributes.value[attr].isValid) {
      return false;
    }
  }

  return true;
});

const setValid = () => {
  for (const attr in attributes.value) {
    attributes.value[attr].isValid = true;
    attributes.value[attr].invalidMessage = null;
  }
};

const setInvalid = () => {
  for (const attr in attributes.value) {
    if (!attributes.value[attr].val || attributes.value[attr].val === '') {
      attributes.value[attr].isValid = false;
      attributes.value[
        attr
      ].invalidMessage = `The ${attributes.value[attr].attrName} cannot be empty.`;
    }
  }
};

const validate = () => {
  setValid();
  setInvalid();

  if (attributes.value.label.isValid && !attributes.value.label.val.match(/^[a-zA-Z0-9]+$/)) {
    attributes.value.label.isValid = false;
    attributes.value.label.invalidMessage = 'The name must be filled by alphanumerical characters.';
  }
};

const handleSubmit = () => {
  validate();

  if (!isValid.value) {
    return;
  }

  emit('submit', {
    label: attributes.value.label.val,
    province: attributes.value.province.val,
    city: attributes.value.city.val,
    address: attributes.value.address.val,
  });
};

loadRegions();
</script>

<style scoped>
.form__group--flex {
  display: flex;
  gap: 2rem;
  width: 100%;
  box-sizing: border-box;
}
</style>
