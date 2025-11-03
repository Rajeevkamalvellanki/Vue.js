<template>
  <div class="contact-form">
    <h2>Contact Us</h2>

    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input id="name" v-model="name" type="text" placeholder="Enter your name" />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" v-model="email" type="email" placeholder="Enter your email" />
      </div>

      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" placeholder="Write your message"></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>

    <div class="output" v-if="submitted">
      <h3>Submitted Data:</h3>
      <p><strong>Name:</strong> {{ name }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
      <p><strong>Message:</strong> {{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      submitted: false,
    };
  },
  methods: {
    submitForm() {
      this.submitted = true;
      console.log("Form Submitted:", this.name, this.email, this.message);
      // You can also reset the form if needed:
      // this.name = ''; this.email = ''; this.message = '';
    },
  },
};
</script>

<style scoped>
.contact-form {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input, textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  background-color: #42b883;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.output {
  margin-top: 20px;
  padding: 10px;
  border-top: 1px solid #ccc;
}
</style>
