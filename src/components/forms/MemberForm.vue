<template>
  <BaseForm :submit="!readonly" :can-submit="canSubmit" @submit.prevent="handleSubmit">
    <TextFieldInput
      name="name"
      v-model.trim="attributes.name.val"
      :invalid="attributes.name.invalidMessage"
      :readonly="readonly"
    />
    <TextFieldInput
      name="email"
      label="Email address"
      type="email"
      v-model.trim="attributes.email.val"
      :invalid="attributes.email.invalidMessage"
      :readonly="readonly"
    />
    <TextFieldInput
      name="phone"
      label="Phone number"
      type="tel"
      v-model.trim="attributes.phone.val"
      :invalid="attributes.phone.invalidMessage"
      :readonly="readonly"
    />
    <TextFieldInput
      name="dob"
      label="Date of birth"
      type="date"
      v-model.trim="attributes.dob.val"
      :invalid="attributes.dob.invalidMessage"
      :readonly="readonly"
    />
    <OptionsInput
      name="gender"
      :options="[
        { label: 'Male', value: 'M' },
        { label: 'Female', value: 'F' },
      ]"
      v-model.trim="attributes.gender.val"
      :invalid="attributes.gender.invalidMessage"
      :readonly="readonly"
    />
    <TextFieldInput
      v-if="!readonly"
      name="profilePicture"
      label="Profile picture"
      type="file"
      v-model.trim="attributes.profilePicture.val"
      :invalid="attributes.profilePicture.invalidMessage"
      :readonly="readonly"
      no-border
    />
    <TextFieldInput
      v-else
      name="profilePicture"
      label="Profile picture"
      type="text"
      v-model.trim="props.profilePicture"
      :invalid="attributes.profilePicture.invalidMessage"
      :readonly="readonly"
    />
  </BaseForm>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps([
  'name',
  'email',
  'phone',
  'dob',
  'gender',
  'profilePicture',
  'readonly',
]);

const emit = defineEmits(['submit']);

const attributes = ref({
  name: {
    attrName: 'name',
    val: props.name ? props.name : '',
    isValid: true,
    invalidMessage: null,
  },
  email: {
    attrName: 'email address',
    val: props.email ? props.email : '',
    isValid: true,
    invalidMessage: null,
  },
  phone: {
    attrName: 'phone number',
    val: props.phone ? props.phone : '',
    isValid: true,
    invalidMessage: null,
  },
  dob: {
    attrName: 'date of birth',
    val: props.dob ? props.dob : '',
    isValid: true,
    invalidMessage: null,
  },
  gender: {
    attrName: 'gender',
    val: props.gender ? props.gender : '',
    isValid: true,
    invalidMessage: null,
  },
  profilePicture: {
    attrName: 'profile picture',
    val: '',
    isValid: true,
    invalidMessage: null,
  },
});

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
    if (!attributes.value[attr].val && attributes.value[attr].val === '') {
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

  if (attributes.value.name.isValid && !attributes.value.name.val.match(/^[a-z ,.'-]+$/i)) {
    attributes.value.name.isValid = false;
    attributes.value.name.invalidMessage = 'The name must be filled by alphabetical characters.';
  }

  if (
    attributes.value.email.isValid &&
    !attributes.value.email.val.match(
      /^[a-zA-Z0-9_.+-]+@(?:(?:[a-zA-Z0-9-]+\.)?[a-zA-Z]+\.)?(gdn-commerce)\.com$/i,
    )
  ) {
    attributes.value.email.isValid = false;
    attributes.value.email.invalidMessage = 'The email address must end with "gdn-commerce.com".';
  }

  if (attributes.value.phone.isValid && isNaN(attributes.value.phone.val)) {
    attributes.value.phone.isValid = false;
    attributes.value.phone.invalidMessage = 'The phone number must be numeric.';
  }
};

const canSubmit = computed(() => {
  if (props.readonly) {
    return props.readonly;
  }

  if (
    attributes.value.name.val === '' &&
    attributes.value.email.val === '' &&
    attributes.value.phone.val === '' &&
    attributes.value.dob.val === '' &&
    !attributes.value.gender.val
  ) {
    return false;
  }
  validate();

  return isValid.value;
});

const handleSubmit = () => {
  validate();

  if (!isValid.value || props.readonly) {
    return;
  }

  emit('submit', {
    name: attributes.value.name.val,
    email: attributes.value.email.val,
    phone: attributes.value.phone.val,
    dob: attributes.value.dob.val,
    gender: attributes.value.gender.val,
  });
};
</script>
