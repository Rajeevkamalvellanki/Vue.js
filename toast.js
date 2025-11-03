import { reactive } from "vue";

export const toasts = reactive([]);

export function addToast(message, type = "success", duration = 2000) {
  toasts.push({ message, type });
  setTimeout(() => {
    toasts.shift();
  }, duration);
}
