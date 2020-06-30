<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  components: {
    Navbar,
    Footer: () => import('./components/Footer.vue')
  }
}
</script>

<style src="./assets/main.styles.css"></style>
