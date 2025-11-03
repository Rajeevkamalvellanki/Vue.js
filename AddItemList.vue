<template>
  <div class="list-container">
    <h2>Item List</h2>

    <!-- Input field bound to newItem -->
    <input
      type="text"
      v-model="newItem"
      placeholder="Enter a new item"
    />

    <!-- Button with v-on:click event -->
    <button @click="addItem">Add Item</button>

    <!-- Display the list -->
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Reactive variables
const newItem = ref("");
const items = ref([]);

// Method: add new item to list
function addItem() {
  if (newItem.value.trim() !== "") {
    items.value.push(newItem.value);
    newItem.value = ""; // clear input
  } else {
    alert("Please enter an item before adding!");
  }
}
</script>

<style scoped>
.list-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #f8f9fa;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: 'Arial', sans-serif;
}

input {
  width: 70%;
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #42b883;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #2e8b6c;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

li {
  background: #fff;
  padding: 8px;
  border-radius: 6px;
  margin-bottom: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
</style>
