import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "./components/Home.vue";
import Contacts from "./components/Contacts.vue";
import NewContact from "./components/NewContact.vue";
import Register from "./components/Register.vue";
import Login from "./components/Login.vue";
import Profile from "./components/Profile.vue";
import EditContact from "./components/EditContact.vue";

Vue.use(VueRouter)

export const routes = [{
    path: "",
    name: "Home",
    component: Home
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts,
    beforeEnter(to, from, next) {
      if (localStorage.token) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: "/new-contact",
    name: "NewContact",
    component: NewContact,
    beforeEnter(to, from, next) {
      if (localStorage.token) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter(to, from, next) {
      if (!localStorage.token) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter(to, from, next) {
      if (!localStorage.token) {
        next()
      } else {
        next('/')
      }
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter(to, from, next) {
      if (localStorage.token) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: "/edit-contact/:id",
    name: "EditContact",
    component: EditContact,
    props: true,
    beforeEnter(to, from, next) {
      if (localStorage.token) {
        next()
      } else {
        next('/login')
      }
    }
  }
];

export default new VueRouter({
  mode: 'history',
  routes
})