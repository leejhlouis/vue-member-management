<template>
  <BaseInput :name="name" :label="inputLabel" :invalid="invalid">
    <template #input>
      <input
        :id="name"
        class="form__input"
        :class="[invalidClass, { 'form__input--border': !noBorder }]"
        :type="type"
        :placeholder="inputLabel"
        v-model="value"
        :readonly="readonly"
      />
      <slot></slot>
    </template>
  </BaseInput>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    required: false,
    default: 'text',
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
    default: null,
  },
  modelValue: {
    type: String,
    required: false,
  },
  readonly: {
    type: Boolean,
    required: false,
    default: false,
  },
  invalid: {
    type: String,
    required: false,
    default: null,
  },
  noBorder: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

const invalidClass = computed(() => {
  return {
    invalid: !!props.invalid,
  };
});

const inputLabel = computed(() =>
  !!props.label ? props.label : nameWithCapitalizedFirstLetter.value,
);

const nameWithCapitalizedFirstLetter = computed(
  () => props.name.charAt(0).toUpperCase() + props.name.slice(1),
);
</script>

<style scoped>
.form__input {
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 1rem;
}

.form__input--border {
  border: 1px solid #ccc;
}

.form__input.invalid {
  border: 1.25px solid #e22e2e;
}
</style>
