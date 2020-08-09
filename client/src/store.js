import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jwtDecode from "jwt-decode";

import router from './routes'
const url = "./api/contact-manager/";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
    },
    storeUser(state, user) {
      state.user = user
    },
    clearAuthData(state) {
      state.idToken = null
      state.userId = null
    }
  },
  actions: {
    setLogoutTimer({
      commit
    }, expirationTime) {
      setTimeout(() => {
        commit('clearAuthData')
        localStorage.removeItem('expirationDate')
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        router.replace('/')
      }, expirationTime)
    },
    signup({
      commit,
      dispatch
    }, authData) {
      axios.post(url + "register", {
          email: authData.email,
          password: authData.password,
          username: authData.username,
          name: authData.name
        })
        .then(res => {
          console.log(res)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.user._id
          });
          const decoded = jwtDecode(res.data.idToken);
          var utcSeconds = decoded.exp;
          var expDate = new Date(utcSeconds)
          var dateParse = Date.parse(expDate);
          const now = new Date();
          const nowParse = Date.parse(now);
          const newNow = nowParse / 1000;
          var time = new Date(0);
          time.setUTCSeconds(utcSeconds);
          const exp = dateParse - newNow;
          const expNum = 3600000 - exp;
          const expirationTime = exp + expNum;
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.user._id)
          localStorage.setItem('expirationDate', time)
          dispatch('setLogoutTimer', expirationTime)
        })
        .catch(error => alert("Something went wrong. \nPlease try again \n" + error))
    },
    login({
      commit,
      dispatch
    }, authData) {
      axios.post(url + "login", {
          email: authData.email,
          password: authData.password
        })
        .then(res => {
          const decoded = jwtDecode(res.data.idToken);
          var utcSeconds = decoded.exp;
          var expDate = new Date(utcSeconds)
          var dateParse = Date.parse(expDate);
          const now = new Date();
          const nowParse = Date.parse(now);
          const newNow = nowParse / 1000;
          var time = new Date(0);
          time.setUTCSeconds(utcSeconds);
          const exp = dateParse - newNow;
          const expNum = 3600000 - exp;
          const expirationTime = exp + expNum;
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.user._id)
          localStorage.setItem('expirationDate', time)
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.user._id
          })
          dispatch('setLogoutTimer', expirationTime)
        }).catch(error => alert("Username and / or password are incorrect \n" + error))
    },
    tryAutoLogin({
      commit,
      dispatch
    }) {
      const token = localStorage.getItem('token')
      if (!token) {
        return
      }
      const expirationDate = localStorage.getItem('expirationDate')
      const now = new Date()
      if (now >= expirationDate) {
        return
      }
      const decoded = jwtDecode(token);
      var utcSeconds = decoded.exp;
      const now1 = new Date();
      const nowParse = Date.parse(now1);
      const newNow = nowParse / 1000;
      const expirationTime = (utcSeconds - newNow) * 1000;
      const userId = localStorage.getItem('userId')
      commit('authUser', {
        token: token,
        userId: userId
      })
      dispatch('setLogoutTimer', expirationTime)
    },
    logout({
      commit
    }) {
      commit('clearAuthData')
      localStorage.removeItem('expirationDate')
      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      router.replace('/login')
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    isAuthenticated(state) {
      return state.idToken !== null
    }
  }
})