<template>
  <BaseContainer>
    <div class="wrapper">
      <table class="members-list-table">
        <thead>
          <tr>
            <th class="members-list-table__header">Member code</th>
            <th class="members-list-table__header">Name</th>
            <th class="members-list-table__header">Email</th>
            <th class="members-list-table__header">Phone number</th>
            <th class="members-list-table__header">Date of birth</th>
            <th class="members-list-table__header">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="members-list-table__row">
            <td class="members-list-table__cell">0001</td>
            <td class="members-list-table__cell">John Smith</td>
            <td class="members-list-table__cell">johnsmith@example.com</td>
            <td class="members-list-table__cell">555-1234</td>
            <td class="members-list-table__cell">01/01/1980</td>
            <td class="members-list-table__cell members-list-table__cell--action">
              <BaseDropdown></BaseDropdown>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </BaseContainer>
</template>

<style scoped>
.wrapper {
  /* overflow-x: scroll;
  overflow-y: visible !important; */
  -ms-overflow-style: none;
  scrollbar-width: none;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
}

.wrapper::-webkit-scrollbar {
  display: none;
}

.members-list-table {
  border-collapse: collapse;
  width: 100%;
}

.members-list-table__header {
  background-color: var(--color-primary);
  color: var(--color-white);
  font-weight: 400;
  padding: 12px 8px;
  text-align: left;
}

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
</style>
