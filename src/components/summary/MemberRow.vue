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
          <RouterLink class="dropdown__item" :to="detailsLink">View member details</RouterLink>
        </li>
        <li class="dropdown__item dropdown__item--no-border" @click="attemptDelete">
          Delete member
        </li>
      </BaseDropdown>
    </td>
  </tr>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['code', 'name', 'email', 'phone', 'dob', 'gender', 'profilePicture']);
const emit = defineEmits(['delete']);

const detailsLink = computed(() => `/members/${props.code}`);
const attemptDelete = () => emit('delete');
</script>

<style scoped>
.members-list-table__row:nth-child(even) {
  background-color: #f2f2f2;
}

.members-list-table__cell {
  border-bottom: 1px solid #ddd;
  padding: 12px 8px;
}

.members-list-table__cell--action {
  width: 0;
  min-width: fit-content;
}

.members-list-table__row:hover {
  background-color: #eee;
}

.dropdown__item {
  white-space: nowrap;
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

.dropdown__item--no-border {
  border-bottom: none;
}
</style>
