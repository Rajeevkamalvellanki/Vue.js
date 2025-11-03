<template>
  <div class="about">
    <h1>About Page</h1>

    <div v-if="$route.query.name || $route.query.email || $route.query.message">
      <p v-if="$route.query.name"><strong>Name:</strong> {{ $route.query.name }}</p>
      <p v-if="$route.query.email"><strong>Email:</strong> {{ $route.query.email }}</p>
      <p v-if="$route.query.message"><strong>Message:</strong> {{ $route.query.message }}</p>
    </div>
    
    <p v-else>No form data submitted.</p>
    
    <router-link to="/">← Back to Home</router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.about {
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
}

p {
  font-size: 16px;
  margin: 8px 0;
}

a {
  display: inline-block;
  margin-top: 20px;
  color: #42b883;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>
