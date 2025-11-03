<template>
  <div class="contact-form">
    <h2>Contact Form 📧</h2>

    <div class="form-group">
      <label for="name">Name:</label>
      <input id="name" type="text" v-model="name" />
      <span class="error" v-if="nameError">{{ nameError }}</span>
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input id="email" type="email" v-model="email" />
      <span class="error" v-if="emailError">{{ emailError }}</span>
    </div>

    <div class="form-group">
      <label for="message">Message:</label>
      <textarea id="message" v-model="message"></textarea>
      <span class="error" v-if="messageError">{{ messageError }}</span>
    </div>

    <button :disabled="!isFormValid" @click="submitForm">Submit</button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { addToast } from "../utils/toast.js";

const router = useRouter();

const name = ref("");
const email = ref("");
const message = ref("");

const nameError = computed(() => (!name.value.trim() ? "Name is required" : ""));
const emailError = computed(() => {
  if (!email.value.trim()) return "Email is required";
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !pattern.test(email.value) ? "Invalid email format" : "";
});
const messageError = computed(() => (!message.value.trim() ? "Message is required" : ""));
const isFormValid = computed(() => !nameError.value && !emailError.value && !messageError.value);

function submitForm() {
  if (isFormValid.value) {
    addToast("Form submitted successfully ✅", "success");

    router.push({
      path: "/about",
      query: {
        name: name.value,
        email: email.value,
        message: message.value,
      },
    });
  } else {
    addToast("Please fill all fields correctly", "error");
  }
}
</script>

<style scoped>
.contact-form {
  max-width: 500px;
  margin: 30px auto;
  padding: 25px 30px;
  border-radius: 12px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  font-family: Arial, sans-serif;
  text-align: left;
}

.form-group { margin-bottom: 18px; }
label { font-weight: bold; display: block; margin-bottom: 6px; }
input, textarea { width: 100%; padding: 10px 12px; border-radius: 6px; border: 1px solid #ccc; box-sizing: border-box; }
textarea { min-height: 100px; resize: vertical; }
button { width: 100%; padding: 12px; border-radius: 8px; border: none; background-color: #42b883; color: #fff; font-size: 16px; cursor: pointer; }
button:disabled { background-color: #a5d6a7; cursor: not-allowed; }
.error { color: #d9534f; font-size: 13px; margin-top: 4px; display: block; }
</style>
