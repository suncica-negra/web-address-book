import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";

const Register = () =>
  import ( /* webpackChunkName: "Register" */ "./components/Register.vue");

const Contacts = () =>
  import ( /* webpackPrefetch: true, webpackChunkName: "Contacts" */ "./components/Contacts.vue");

const NewContact = () =>
  import ( /* webpackChunkName: "NewContact" */ "./components/NewContact.vue");

const EditContact = () =>
  import ( /* webpackChunkName: "EditContact" */ "./components/EditContact.vue");

const Profile = () =>
  import ( /* webpackChunkName: "Profile" */ "./components/Profile.vue");

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
  },
  {
    path: "*",
    redirect: "/"
  }
];

export default new VueRouter({
  mode: 'history',
  routes
})
