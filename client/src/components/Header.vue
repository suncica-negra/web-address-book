<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container" @mouseover="upHere = true" @mouseleave="upHere = false">
         <a class="navbar-brand">Web Address Book &#128211;</a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent" v-show="upHere">
            <ul class="navbar-nav">
               <li class="nav-item" >
                  <router-link class="nav-link" to="/">Home</router-link>
               </li>
               <li class="nav-item" >
                  <router-link class="nav-link" v-if="auth" to="/contacts">My Contacts</router-link>
               </li>
               <li class="nav-item" >
                  <router-link class="nav-link" v-if="auth" to="/profile">My Profile</router-link>
               </li>
            </ul>
            <ul class="navbar-nav ml-auto">
               <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Menu
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                     <router-link class="dropdown-item" v-if="!auth" to="/register">&#128272; Register</router-link>
                     <router-link class="dropdown-item" v-if="!auth" to="/login">&#128273; Login</router-link>
                     <router-link class="dropdown-item" v-if="auth" to="/new-contact">&#128073; Add Contact</router-link>
                     <a class="dropdown-item" v-if="auth" href="#" @click="logout">&#10006; Logout</a>         
                  </div>
               </li>
            </ul>
         </div>
      </div>
   </nav>
</template>

<script>
export default {
  data() {
    return {
      upHere: false
    }
  },
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
nav {
  font-size: 20px;
}

.navbar-brand {
  font-size: 25px;
}
</style>