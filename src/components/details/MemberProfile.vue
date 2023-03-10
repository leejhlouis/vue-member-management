<template>
  <BaseContainer class="member-profile">
    <div class="member-profile__header">
      <h1 class="member-profile__title">{{ title }}</h1>
      <BaseButton v-if="!isEditing" @click="enableEditing">Edit</BaseButton>
    </div>
    <form class="form" @submit.prevent="handleSubmit">
      <div class="form__group">
        <label for="name" class="form__label">Name</label>
        <input
          id="name"
          type="text"
          v-model.trim="name"
          class="form__input"
          placeholder="Name"
          :readonly="!isEditing"
        />
      </div>
      <div class="form__group">
        <label for="email" class="form__label">Email address</label>
        <input
          id="email"
          type="email"
          v-model.trim="email"
          class="form__input"
          placeholder="Email address"
          :readonly="!isEditing"
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
          :readonly="!isEditing"
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
          :readonly="!isEditing"
        />
      </div>
      <div class="form__group">
        <label class="form__label">Gender</label>
        <div class="form__radio-group">
          <label for="male" class="form__radio-label">
            <input
              id="male"
              type="radio"
              v-model="gender"
              value="Male"
              class="form__radio-input"
              :readonly="!isEditing"
            />
            Male
          </label>
          <label for="female" class="form__radio-label">
            <input
              id="female"
              type="radio"
              v-model="gender"
              value="Female"
              class="form__radio-input"
              :readonly="!isEditing"
            />
            Female
          </label>
        </div>
      </div>
      <div v-if="isEditing" class="form__actions">
        <BaseButton>Submit</BaseButton>
      </div>
    </form>
  </BaseContainer>
</template>

<script setup>
import { computed, ref } from 'vue';

const isEditing = ref(false);

const name = ref('John Doe');
const email = ref('johndoe@gmail.com');
const phoneNumber = ref('0853-2434-2143');
const dateOfBirth = ref('2002-07-21');
const gender = ref('Male');

const enableEditing = () => {
  isEditing.value = true;
};

const title = computed(() => `${isEditing.value ? 'Edit Profile' : 'Profile'} - MEMBERID`);
</script>

<style scoped>
.member-profile {
  width: 100%;
}
.member-profile__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0;
}
.member-profile__title {
  font-weight: 500;
  font-size: 1.5rem;
}
.form {
  padding-top: 1rem;
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
