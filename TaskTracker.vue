<template>
  <div class="task-tracker">
    <h2>Task Tracker 📝</h2>

    <div class="input-group">
      <input
        type="text"
        v-model="newTask"
        placeholder="Enter a new task"
        @keyup.enter="addTask"
      />
      <button @click="addTask" :disabled="!newTask.trim()">Add Task</button>
    </div>

    <ul>
      <li v-for="(task, index) in tasks" :key="index" :class="{ completed: task.completed }">
        <input type="checkbox" v-model="task.completed" />
        <span>{{ task.name }}</span>
        <button @click="removeTask(index)">Remove</button>
      </li>
    </ul>

    <p v-if="tasks.length">Total Tasks: {{ tasks.length }}</p>
    <p v-else>No tasks yet. Add your first task!</p>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { addToast } from "../utils/toast.js";

const newTask = ref("");
const tasks = ref([]);

// Load tasks from localStorage
const savedTasks = localStorage.getItem("tasks");
if (savedTasks) tasks.value = JSON.parse(savedTasks);

// Save to localStorage
watch(tasks, (newVal) => {
  localStorage.setItem("tasks", JSON.stringify(newVal));
}, { deep: true });

function addTask() {
  const taskName = newTask.value.trim();
  if (!taskName) return;
  tasks.value.push({ name: taskName, completed: false });
  newTask.value = "";
  addToast(`Task "${taskName}" added ✅`, "success");
}

function removeTask(index) {
  const removedTask = tasks.value[index].name;
  tasks.value.splice(index, 1);
  addToast(`Task "${removedTask}" removed ❌`, "error");
}

// Notify when task completed
watch(tasks, (newTasks, oldTasks) => {
  newTasks.forEach((task, i) => {
    if (task.completed && !oldTasks[i]?.completed) {
      addToast(`Task "${task.name}" completed 🎉`, "success");
    }
  });
}, { deep: true });
</script>

<style scoped>
.task-tracker {
  max-width: 500px;
  margin: 40px auto;
  padding: 25px;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
  text-align: center;
  font-family: 'Helvetica Neue', sans-serif;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 12px 10px;
  border-bottom: 1px solid #eee;
  transition: background 0.2s ease;
}

li:hover {
  background-color: #f1f9f6;
}

li.completed span {
  text-decoration: line-through;
  color: #888;
  transition: color 0.3s ease, text-decoration 0.3s ease;
}

li button {
  background-color: #e74c3c;
  color: #fff;
  border-radius: 8px;
  padding: 6px 12px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

li button:hover {
  background-color: #c0392b;
  transform: scale(1.05);
}

.input-group input {
  flex: 1;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #ccc;
  transition: border 0.3s ease;
}

.input-group input:focus {
  border-color: #42b883;
}
</style>
