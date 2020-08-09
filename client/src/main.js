import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Vuelidate from 'vuelidate'
import {
	routes
} from "./routes";
import store from './store'

Vue.use(Vuelidate)

Vue.use(VueRouter);

const router = new VueRouter({
	routes,
	mode: "history"
});

new Vue({
	render: h => h(App),
	router,
	store
}).$mount("#app")