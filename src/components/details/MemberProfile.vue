<template>
  <BaseContainer class="member-profile">
    <SuccessModal
      v-if="isUpdateSuccess"
      title="Member berhasil diubah"
      @close="hideSuccessModal"
    ></SuccessModal>
    <div class="member-profile__header">
      <h1 class="member-profile__title">{{ title }}</h1>
      <BaseButton v-if="!isEditing" @click="enableEditing">Edit</BaseButton>
    </div>
    <BaseForm :submit="isEditing" :can-submit="canSubmit" @submit.prevent="handleSubmit">
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
const isUpdateSuccess = ref(false);

const enableEditing = () => (isEditing.value = true);
const disableEditing = () => (isEditing.value = false);

const showSuccessModal = () => (isUpdateSuccess.value = true);
const hideSuccessModal = () => (isUpdateSuccess.value = false);

const title = computed(() => `${isEditing.value ? 'Edit Profile' : 'Profile'} - ${code}`);

const canSubmit = computed(
  () =>
    attributes.value.name.val !== '' &&
    attributes.value.email.val !== '' &&
    attributes.value.phone.val !== '' &&
    attributes.value.dob.val !== '' &&
    !!attributes.value.gender.val,
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
    if (!attributes.value[attr].isValid && !attributes.value[attr].invalidMessage) {
      attributes.value[
        attr
      ].invalidMessage = `The ${attributes.value[attr].attrName} cannot be empty.`;
    }
  }
};

const validate = () => {
  setValid();

  if (!attributes.value.name.val || attributes.value.name.value === '') {
    attributes.value.name.isValid = false;
  } else if (!attributes.value.name.val.match(/^[a-z ,.'-]+$/i)) {
    attributes.value.name.isValid = false;
    attributes.value.name.invalidMessage = 'The name must be filled by alphabetical characters.';
  }

  if (!attributes.value.email.val || attributes.value.email.val === '') {
    attributes.value.email.isValid = false;
  } else if (
    !attributes.value.email.val.match(
      /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(gdn-commerce)\.com$/i,
    )
  ) {
    attributes.value.email.isValid = false;
    attributes.value.email.invalidMessage = 'The email address must end with "gdn-commerce.com".';
  }

  if (!attributes.value.phone.val || attributes.value.phone.val === '') {
    attributes.value.phone.isValid = false;
  } else if (isNaN(attributes.value.phone.val)) {
    attributes.value.phone.isValid = false;
    attributes.value.phone.invalidMessage = 'The phone number must be numeric.';
  }

  if (!attributes.value.dob.val || attributes.value.dob.val === '') {
    attributes.value.dob.isValid = false;
  }

  if (!attributes.value.gender.val) {
    attributes.value.gender.isValid = false;
  }

  setInvalid();
};

const handleSubmit = async () => {
  if (!isEditing.value) {
    return;
  }

  validate();

  if (!isValid.value) {
    return;
  }

  try {
    await store.dispatch('members/updateMember', {
      code: code,
      name: attributes.value.name.val,
      email: attributes.value.email.val,
      phone: attributes.value.phone.val,
      dob: attributes.value.dob.val,
      gender: attributes.value.gender.val,
    });

    disableEditing();
    showSuccessModal();
  } catch (error) {}
};
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
</style>
