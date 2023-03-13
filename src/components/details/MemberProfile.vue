<template>
  <BaseContainer class="member-profile">
    <div class="member-profile__header">
      <h1 class="member-profile__title">{{ title }}</h1>
      <BaseButton v-if="!isEditing" @click="enableEditing">Edit</BaseButton>
    </div>
    <BaseForm :submit="isEditing" @submit.prevent="handleSubmit">
      <TextFieldInput
        name="name"
        v-model.trim="attributes.name.val"
        :invalid="attributes.name.invalidMessage"
        :readonly="!isEditing"
      />
      <TextFieldInput
        name="email"
        label="Email address"
        type="email"
        v-model.trim="attributes.email.val"
        :invalid="attributes.email.invalidMessage"
        :readonly="!isEditing"
      />
      <TextFieldInput
        name="phone"
        label="Phone number"
        type="tel"
        v-model.trim="attributes.phone.val"
        :invalid="attributes.phone.invalidMessage"
        :readonly="!isEditing"
      />
      <TextFieldInput
        name="dob"
        label="Date of birth"
        type="date"
        v-model.trim="attributes.dob.val"
        :invalid="attributes.dob.invalidMessage"
        :readonly="!isEditing"
      />
      <OptionsInput
        name="gender"
        :options="[
          { label: 'Male', value: 'M' },
          { label: 'Female', value: 'F' },
        ]"
        v-model.trim="attributes.gender.val"
        :invalid="attributes.gender.invalidMessage"
        :readonly="!isEditing"
      />
    </BaseForm>
  </BaseContainer>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const { code } = defineProps(['code']);
const member = computed(() => store.getters['members/getMemberByCode'](code));

const attributes = ref({
  name: {
    attrName: 'name',
    val: member.value.name,
    isValid: true,
    invalidMessage: null,
  },
  email: {
    attrName: 'email address',
    val: member.value.email,
    isValid: true,
    invalidMessage: null,
  },
  phone: {
    attrName: 'phone number',
    val: member.value.phone,
    isValid: true,
    invalidMessage: null,
  },
  dob: {
    attrName: 'date of birth',
    val: member.value.dob,
    isValid: true,
    invalidMessage: null,
  },
  gender: {
    attrName: 'gender',
    val: member.value.gender,
    isValid: true,
    invalidMessage: null,
  },
});

const isEditing = ref(false);

const enableEditing = () => {
  isEditing.value = true;
};

const title = computed(() => `${isEditing.value ? 'Edit Profile' : 'Profile'} - ${code}`);
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
