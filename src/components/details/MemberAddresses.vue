<template>
  <BaseContainer class="member-addresses">
    <div class="member-addresses__header">
      <h1 class="member-addresses__title">Address - MEMBERID</h1>
      <BaseButton @click="addNewAddress">Tambah</BaseButton>
    </div>
  </BaseContainer>
</template>

<script>
export default {}
</script>

<style scoped>
.member-addresses {
  width: 100%;
}

.member-addresses__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0;
}
.member-addresses__title {
  font-weight: 500;
  font-size: 1.5rem;
}
</style>
