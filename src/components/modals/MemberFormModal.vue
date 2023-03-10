<template>
  <FormModal title="Create new member" @close="close">
    <form class="form" @submit.prevent="handleSubmit">
      <div class="form__group">
        <label for="name" class="form__label">Name</label>
        <input id="name" type="text" v-model.trim="name" class="form__input" placeholder="Name" />
      </div>
      <div class="form__group">
        <label for="email" class="form__label">Email address</label>
        <input
          id="email"
          type="email"
          v-model.trim="email"
          class="form__input"
          placeholder="Email address"
        />
      </div>
      <div class="form__group">
        <label for="phone" class="form__label">Phone number</label>
        <input
          id="phone"
          type="tel"
          v-model.trim="phoneNumber"
          class="form__input"
          placeholder="Phone number"
        />
      </div>
      <div class="form__group">
        <label for="dob" class="form__label">Date of birth</label>
        <input
          id="dob"
          type="date"
          v-model.trim="dateOfBirth"
          class="form__input"
          placeholder="Date of birth"
        />
      </div>
      <div class="form__group">
        <label class="form__label">Gender</label>
        <div class="form__radio-group">
          <label for="male" class="form__radio-label">
            <input id="male" type="radio" v-model="gender" value="Male" class="form__radio-input" />
            Male
          </label>
          <label for="female" class="form__radio-label">
            <input
              id="female"
              type="radio"
              v-model="gender"
              value="Female"
              class="form__radio-input"
            />
            Female
          </label>
        </div>
      </div>
      <div class="form__actions">
        <BaseButton>Submit</BaseButton>
      </div>
    </form>
  </FormModal>
</template>

<script setup>
import FormModal from '../ui/modals/FormModal.vue';
import { defineEmits, ref } from 'vue';

const emit = defineEmits(['close', 'submit']);

const name = ref('');
const email = ref('');
const phoneNumber = ref('');
const dateOfBirth = ref('');
const gender = ref(null);

const close = () => {
  emit('close');
};

const handleSubmit = () => {
  alert(`${name.value} ${email.value} ${phoneNumber.value} ${dateOfBirth.value} ${gender.value}`);
  // emit('submit')
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
