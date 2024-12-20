<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
// Import your components as usual
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style src="./assets/main.css"></style>
