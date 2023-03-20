<template>
  <FormModal title="Create new member" @close="close">
    <MemberForm @submit="handleSubmit" />
  </FormModal>
</template>

<script setup>
import MemberForm from '../forms/MemberForm.vue';
import FormModal from '../ui/modals/FormModal.vue';
import { defineEmits } from 'vue';

const emit = defineEmits(['close', 'submit']);

const close = () => emit('close');
const handleSubmit = (payload) => emit('submit', payload);
</script>
