<template>
  <BaseInput v-if="!readonly" :name="name" :label="inputLabel" :invalid="invalid">
    <template #input>
      <div class="form__radio-group">
        <label v-for="({ label, value }, index) in options" :key="index" class="form__radio-label">
          <input
            type="radio"
            class="form__radio-input"
            :value="value"
            v-model="selected"
            :disabled="readonly"
          />
          {{ label }}
        </label>
      </div>
    </template>
  </BaseInput>
  <TextFieldInput
    v-else
    :name="name"
    :label="inputLabel"
    type="text"
    v-model.trim="selected"
    :readonly="readonly"
  />
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
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
  options: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const selected = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

const inputLabel = computed(() =>
  props.label ? props.label : nameWithCapitalizedFirstLetter.value,
);

const nameWithCapitalizedFirstLetter = computed(
  () => props.name.charAt(0).toUpperCase() + props.name.slice(1),
);
</script>

<style scoped>
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
</style>
