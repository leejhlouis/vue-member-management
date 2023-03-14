<template>
  <FormModal :title="title" @close="close">
    <BaseForm @submit.prevent="handleSubmit">
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
});

const emit = defineEmits(['close', 'submit']);

const attributes = ref({
  label: {
    attrName: 'name',
    val: '',
    isValid: true,
    invalidMessage: null,
  },
  province: {
    attrName: 'province',
    val: '',
    isValid: true,
    invalidMessage: null,
  },
  city: {
    attrName: 'city',
    val: '',
    isValid: true,
    invalidMessage: null,
  },
  address: {
    attrName: 'address',
    val: '',
    isValid: true,
    invalidMessage: null,
  },
});

const store = useStore();

const provinces = computed(() => store.getters['regions/provinces']);
const cities = computed(() => store.getters['regions/cities']());

const title = computed(() => `${props.mode === 'add' ? 'Add' : 'Edit'} address`);

const close = () => emit('close');

const handleSubmit = () => {
  alert(`${label.value} ${province.value} ${city.value} ${address.value}`);
};
</script>

<style scoped>
.form__group--flex {
  display: flex;
  gap: 2rem;
  width: 100%;
  box-sizing: border-box;
}
</style>
