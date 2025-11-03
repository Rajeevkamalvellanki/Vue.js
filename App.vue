<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
</script>

<style scoped>
nav {
  background-color: #42b883;
  padding: 15px;
  text-align: center;
}

nav a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
}

nav a.router-link-exact-active {
  border-bottom: 2px solid white;
}

#app {
  font-family: 'Arial', sans-serif;
}
</style>
