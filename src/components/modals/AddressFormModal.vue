<template>
  <FormModal :title="title" @close="close">
    <form class="form" @submit.prevent="handleSubmit">
      <div class="form__group">
        <label for="label" class="form__label">Label</label>
        <input
          id="label"
          type="text"
          v-model.trim="label"
          class="form__input"
          placeholder="Label"
        />
      </div>
      <div class="form__group--flex">
        <div class="form__group">
          <label for="province" class="form__label">Province</label>
          <input
            id="province"
            type="text"
            v-model.trim="province"
            class="form__input"
            placeholder="Province"
          />
        </div>
        <div class="form__group">
          <label for="city" class="form__label">City</label>
          <input id="city" type="text" v-model.trim="city" class="form__input" placeholder="City" />
        </div>
      </div>
      <div class="form__group">
        <label for="address" class="form__label">Address</label>
        <textarea
          id="address"
          rows="5"
          v-model.trim="address"
          class="form__input"
          placeholder="Address"
        />
      </div>

      <div class="form__actions">
        <BaseButton>Submit</BaseButton>
      </div>
    </form>
  </FormModal>
</template>

<script setup>
import FormModal from '../ui/modals/FormModal.vue';
import { defineEmits, ref, computed } from 'vue';

const props = defineProps({
  mode: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['close', 'submit']);

const label = ref('');
const province = ref('');
const city = ref('');
const address = ref('');

const title = computed(() => `${props.mode === 'add' ? 'Add' : 'Edit'} address`);

const close = () => {
  emit('close');
};

const handleSubmit = () => {
  alert(`${label.value} ${province.value} ${city.value} ${address.value}`);
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form__group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
  box-sizing: border-box;
}

.form__group--flex {
  display: flex;
  gap: 2rem;
  width: 100%;
  box-sizing: border-box;
}

.form__label {
  margin-bottom: 0.5rem;
}

.form__input {
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  font-size: 1rem;
}

.form__radio-group {
  display: flex;
  flex-direction: row;
}

.form__radio-label {
  display: flex;
  align-items: center;
  margin-right: 1rem;
}

.form__radio-input {
  margin-right: 0.5rem;
}

.form__actions {
  margin-top: 1.25rem;
  display: flex;
  justify-content: end;
  width: 100%;
}
</style>
