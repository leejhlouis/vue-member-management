<template>
  <BaseInput :name="name" :label="inputLabel" :invalid="invalid">
    <template #input>
      <input
        :id="name"
        class="form__input"
        :class="invalidClass"
        :type="type"
        :placeholder="inputLabel"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :readonly="readonly"
      />
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
    required: true,
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
});

defineEmits(['update:modelValue']);

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

<style>
.form__input {
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  font-size: 1rem;
}

.form__input.invalid {
  border: 1.25px solid #e22e2e;
}
</style>
