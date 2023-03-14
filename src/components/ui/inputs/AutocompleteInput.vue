<template>
  <div class="form-group__wrapper" ref="autocomplete">
    <TextFieldInput
      :type="type"
      :name="name"
      :label="label"
      v-model="inputtedValue"
      :readonly="readonly"
      :invalid="invalid"
      @click="initAutocomplete"
      @input="getAutocomplete"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter.prevent="onEnter"
      class="form__group--relative"
    >
      <ul v-if="isShown" class="form__autocomplete-list">
        <li
          v-for="(item, i) in filteredItems"
          :key="item.code"
          class="form__autocomplete-item"
          :class="{ 'form__autocomplete-item--active': i === counter }"
          @click="setItem(item)"
        >
          {{ item.label }}
        </li>
      </ul>
    </TextFieldInput>
  </div>
</template>

<script setup>
import { ref, defineProps, computed } from 'vue';

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
  modelValue: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
    default: null,
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
  items: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue', 'onChange']);

const inputtedValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

const autocomplete = ref(null);
const isShown = ref(false);
const counter = ref(0);

const showAutocomplete = () => (isShown.value = true);
const hideAutocomplete = () => (isShown.value = false);

const filter = (array, attr, substr) =>
  array.filter((el) => el[attr].toLowerCase().includes(substr.toLowerCase()));

const filteredItems = computed(() => {
  return filter(props.items, 'label', inputtedValue.value);
});

const initAutocomplete = () => {
  showAutocomplete();
};

const getAutocomplete = (event) => {
  inputtedValue.value = event.target.value;
  showAutocomplete();
};

const setItem = ({ label, code }) => {
  inputtedValue.value = label;
  hideAutocomplete();

  emit('onChange', { code });
};

const onArrowUp = () => {
  if (counter.value > 0) {
    counter.value--;
  }
};

const onArrowDown = () => {
  if (counter.value < filteredItems.value.length - 1) {
    counter.value++;
  }
};
const onEnter = () => {
  setItem(filteredItems.value[counter.value]);
};

const hideIfClickedOutside = ({ target }) => {
  if (autocomplete.value && !autocomplete.value.contains(target)) {
    hideAutocomplete();
    document.removeEventListener('click', hideIfClickedOutside);
  }
};

window.addEventListener('click', hideIfClickedOutside);
</script>

<style scoped>
.form-group__wrapper {
  width: 100%;
}
.form__group--relative {
  position: relative;
}

.form__autocomplete-list {
  background: var(--color-white);
  box-shadow: var(--box-shadow);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  position: absolute;
  list-style-type: none;
  z-index: 99;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 0.5rem;
}

.form__autocomplete-item {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
}

.form__autocomplete-item--active,
.form__autocomplete-item:hover {
  background: var(--color-white-muted);
}

.form__autocomplete-item--active:hover {
  background: #e9e9e9;
}
</style>
