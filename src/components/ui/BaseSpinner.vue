<template>
  <div class="spinner">
    <div class="spinner__content">
      <div></div>
    </div>
  </div>
</template>

<style scoped>
.spinner {
  width: 64px;
  height: 64px;
  display: inline-block;
  overflow: hidden;
}

.spinner__content {
  width: 100%;
  height: 100%;
  position: relative;
}

.spinner__content div {
  position: absolute;
  top: 32px;
  left: 32px;
  width: 50px;
  height: 50px;
  border: 4px solid var(--color-primary);
  border-radius: 100%;
  border-top-color: transparent;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
