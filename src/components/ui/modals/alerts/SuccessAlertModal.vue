<template>
  <AlertModal :title="title" @close="close" closeButtonCaption="Tutup">
    <template #illustration>
      <BaseIcon :size="120" color="#33bd02">
        <CheckCircleIcon />
      </BaseIcon>
    </template>
  </AlertModal>
</template>

<script setup>
import { defineComponent } from 'vue';
import { CheckCircleIcon } from '@heroicons/vue/24/solid';

defineProps(['title']);

const emit = defineEmits(['close']);

defineComponent({ CheckCircleIcon });

const close = () => emit('close');
</script>
