<template>
  <div class="toast-container">
    <div
      v-for="(toast, index) in toasts"
      :key="index"
      class="toast"
      :class="toast.type"
    >
      {{ toast.message }}
    </div>
  </div>
</template>

<script setup>
import { toasts } from "../utils/toast.js";
</script>

<style scoped>
.toast-container {
  position: fixed;
  top: 25px;
  right: 25px;
  z-index: 9999;
}

.toast {
  margin-bottom: 10px;
  padding: 14px 22px;
  border-radius: 12px;
  color: #fff;
  font-weight: 600;
  min-width: 220px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
  animation: slide-in 0.4s ease, fade-out 0.3s ease 1.7s forwards;
}

@keyframes slide-in {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes fade-out {
  to { opacity: 0; transform: translateX(50%); }
}
</style>
