<template>
  <DeleteConfirmationModal v-if="isDeleteModalVisible" @close="close" />
  <tr class="members-list-table__row">
    <td class="members-list-table__cell">0001</td>
    <td class="members-list-table__cell">John Smith</td>
    <td class="members-list-table__cell">johnsmith@example.com</td>
    <td class="members-list-table__cell">555-1234</td>
    <td class="members-list-table__cell">01/01/1980</td>
    <td class="members-list-table__cell members-list-table__cell--action">
      <BaseDropdown>
        <li>
          <RouterLink class="dropdown__item" to="/members/1">View details</RouterLink>
        </li>
        <li class="dropdown__item" @click="deleteMember">Delete member</li>
      </BaseDropdown>
    </td>
  </tr>
</template>

<script setup>
import { ref, defineComponent } from 'vue'
import DeleteConfirmationModal from '../modals/DeleteConfirmationModal.vue'

defineComponent({
  DeleteConfirmationModal
})

const isDeleteModalVisible = ref(false)

const close = () => {
  isDeleteModalVisible.value = false
}

const deleteMember = () => {
  isDeleteModalVisible.value = true
}
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
  cursor: pointer;
}

.dropdown__item {
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: inherit;
  display: block;
}

.dropdown__item:not(:last-of-type) {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.dropdown__item:hover {
  background: var(--color-white-muted);
}
</style>
