<template>
  <div class="contact-form">
    <h2>Contact Us</h2>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input id="name" v-model="name" type="text" placeholder="Enter your name" />
        <span v-if="nameError" class="error">{{ nameError }}</span>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input id="email" v-model="email" type="email" placeholder="Enter your email" />
        <span v-if="emailError" class="error">{{ emailError }}</span>
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="message" placeholder="Enter your message"></textarea>
        <span v-if="messageError" class="error">{{ messageError }}</span>
      </div>

      <button type="submit" :disabled="!isFormValid">Submit</button>
    </form>


  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const name = ref("");
const email = ref("");
const message = ref("");

// Validation
const nameError = computed(() => (!name.value.trim() ? "Name is required" : ""));
const emailError = computed(() => {
  if (!email.value.trim()) return "Email is required";
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !emailPattern.test(email.value) ? "Invalid email format" : "";
});
const messageError = computed(() => (!message.value.trim() ? "Message is required" : ""));
const isFormValid = computed(() => !nameError.value && !emailError.value && !messageError.value);

function submitForm() {
  if (isFormValid.value) {
    // Redirect to About page with query parameters
    router.push({
      path: "/about",
      query: {
        name: name.value,
        email: email.value,
        message: message.value,
      },
    });
  }
}
</script>

<style scoped>
.contact-form {
  max-width: 500px;
  margin: 50px auto;
  padding: 25px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  font-family: 'Arial', sans-serif;
  text-align: center;
}

h2 {
  color: #42b883;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 18px;
  text-align: left;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 6px;
  color: #555;
}

input,
textarea {
  width: 100%;
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
  box-sizing: border-box;
  transition: border 0.2s;
}

input:focus,
textarea:focus {
  border-color: #42b883;
  outline: none;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

button {
  display: block;
  width: 100%;
  background-color: #42b883;
  color: #fff;
  padding: 12px 0;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:disabled {
  background-color: #a5d6a7;
  cursor: not-allowed;
}

button:hover:enabled {
  background-color: #36976f;
}

.error {
  color: #d9534f;
  font-size: 13px;
  margin-top: 4px;
  display: block;
}

.output {
  margin-top: 25px;
  padding: 15px;
  border-top: 2px solid #ddd;
  background-color: #fff;
  border-radius: 8px;
  text-align: left;
}

.output p {
  margin: 6px 0;
}
</style>
