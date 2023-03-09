<template>
  <section class="container">
    <slot></slot>
  </section>
</template>

<style scoped>
.container {
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
}

@media screen and (max-width: 1023px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
