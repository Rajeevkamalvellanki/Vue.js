<template>
  <div class="home">
    <h1>Home Page</h1>

    <ContactFormEnhanced />
    <hr />
    <TaskTracker />
  </div>
</template>

<script setup>
import ContactFormEnhanced from "@/components/ContactFormEnhanced.vue";
import TaskTracker from "@/components/TaskTracker.vue";
</script>

<style scoped>
.home { text-align: center; padding: 20px; }
hr { margin: 40px 0; border: 0; border-top: 1px solid #ccc; }
</style>
