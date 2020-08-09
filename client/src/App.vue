<template>
   <div id="app">
      <Header />
      <transition name="anim" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutUp" mode="out-in">
         <router-view />
      </transition>
      <Footer />
   </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  created() {
    this.$store.dispatch('tryAutoLogin')
  }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #d3d3e0;
  font-family: Quantico;
  font-weight: 100;
}
</style>