<template>
  <FormModal title="Create new member" @close="close">
    <form class="form" @submit.prevent="handleSubmit">
      <div class="form__group">
        <label for="name" class="form__label">Name</label>
        <input
          id="name"
          type="text"
          v-model.trim="attributes.name.val"
          class="form__input"
          :class="invalidClass('name')"
          placeholder="Name"
        />
        <p v-if="!!attributes.name.invalidMessage" class="form__invalid-message">
          {{ attributes.name.invalidMessage }}
        </p>
      </div>
      <div class="form__group">
        <label for="email" class="form__label">Email address</label>
        <input
          id="email"
          type="email"
          v-model.trim="attributes.email.val"
          class="form__input"
          :class="invalidClass('email')"
          placeholder="Email address"
        />
        <p v-if="!!attributes.email.invalidMessage" class="form__invalid-message">
          {{ attributes.email.invalidMessage }}
        </p>
      </div>
      <div class="form__group">
        <label for="phone" class="form__label">Phone number</label>
        <input
          id="phone"
          type="tel"
          v-model.trim="attributes.phone.val"
          class="form__input"
          :class="invalidClass('phone')"
          placeholder="Phone number"
        />
        <p v-if="!!attributes.phone.invalidMessage" class="form__invalid-message">
          {{ attributes.phone.invalidMessage }}
        </p>
      </div>
      <div class="form__group">
        <label for="dob" class="form__label">Date of birth</label>
        <input
          id="dob"
          type="date"
          v-model.trim="attributes.dob.val"
          class="form__input"
          :class="invalidClass('dob')"
          placeholder="Date of birth"
        />
        <p v-if="!!attributes.dob.invalidMessage" class="form__invalid-message">
          {{ attributes.dob.invalidMessage }}
        </p>
      </div>
      <div class="form__group">
        <label class="form__label">Gender</label>
        <div class="form__radio-group">
          <label for="male" class="form__radio-label">
            <input
              id="male"
              type="radio"
              v-model="attributes.gender.val"
              value="Male"
              class="form__radio-input"
            />
            Male
          </label>
          <label for="female" class="form__radio-label">
            <input
              id="female"
              type="radio"
              v-model="attributes.gender.val"
              value="Female"
              class="form__radio-input"
            />
            Female
          </label>
        </div>
        <p v-if="!!attributes.gender.invalidMessage" class="form__invalid-message">
          {{ attributes.gender.invalidMessage }}
        </p>
      </div>
      <div class="form__actions">
        <BaseButton :disabled="!canSubmit">Submit</BaseButton>
      </div>
    </form>
  </FormModal>
</template>

<script setup>
import FormModal from '../ui/modals/FormModal.vue';
import { defineEmits, ref, computed } from 'vue';

const emit = defineEmits(['close', 'submit']);

const attributes = ref({
  name: {
    attrName: 'name',
    val: '',
    isValid: true,
    invalidMessage: null,
  },
  email: {
    attrName: 'email address',
    val: '',
    isValid: true,
    invalidMessage: null,
  },
  phone: {
    attrName: 'phone number',
    val: '',
    isValid: true,
    invalidMessage: null,
  },
  dob: {
    attrName: 'date of birth',
    val: '',
    isValid: true,
    invalidMessage: null,
  },
  gender: {
    attrName: 'gender',
    val: null,
    isValid: true,
    invalidMessage: null,
  },
});

const close = () => {
  emit('close');
};

const invalidClass = (attr) => {
  return {
    invalid: !attributes.value[attr].isValid,
  };
};

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

const handleSubmit = () => {
  validate();

  if (!isValid.value) {
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

.form__input.invalid {
  border: 1.25px solid #e22e2e;
}

.form__invalid-message {
  color: #e22e2e;
  padding-top: 0.5rem;
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
