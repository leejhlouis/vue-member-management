<template>
  <tr class="members-list-table__row">
    <td class="members-list-table__cell">{{ code }}</td>
    <td class="members-list-table__cell">{{ name }}</td>
    <td class="members-list-table__cell">{{ email }}</td>
    <td class="members-list-table__cell">{{ phone }}</td>
    <td class="members-list-table__cell">{{ dob }}</td>
    <td class="members-list-table__cell members-list-table__cell--action">
      <BaseDropdown>
        <li>
          <RouterLink class="dropdown__item" :to="detailsLink">View details</RouterLink>
        </li>
        <li class="dropdown__item" @click="attemptDelete">Delete member</li>
      </BaseDropdown>
    </td>
  </tr>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['code', 'name', 'email', 'phone', 'dob', 'gender', 'profilePicture']);
const emit = defineEmits(['delete', 'success']);

const detailsLink = computed(() => `/members/${props.code}`);

const attemptDelete = () => {
  emit('delete', { code: props.code });
};
</script>

<style scoped>
.members-list-table__row:nth-child(even) {
  background-color: #f2f2f2;
}

.members-list-table__cell {
  border-bottom: 1px solid #ddd;
  padding: 12px 8px;
}

.members-list-table__row:hover {
  background-color: #eee;
}

.dropdown__item {
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}

.dropdown__item:hover {
  background: var(--color-white-muted);
}
</style>
