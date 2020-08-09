<template>
   <div class="container col-md-6 mb-5">
      <div class="card">
         <div class="card-header">
            <img :src="image" title="Source: pngfuel.com" /> 
            <p>Username: {{ username }}</p>
            <p>Name: {{name }}</p>
            <p>Email: {{ email }}</p>
            <p>Login session expires at: {{ exp }}</p>
         </div>
      </div>
   </div>
</template>

<script>
import Image from "../assets/avatar1.png";
import jwtDecode from "jwt-decode";

export default {
	data() {
		const decoded = jwtDecode(localStorage.token);
		var utcSeconds = decoded.exp;
		var time = new Date(0);
		time.setUTCSeconds(utcSeconds);
		var exp = time.toLocaleString();
		return {
			image: Image,
			username: decoded.username,
			name: decoded.name,
			email: decoded.email,
			exp: exp
		}
	}
}
</script>

<style scoped>
.container {
	padding-top: 100px;
}

img {
	width: 100px;
	float: left;
	margin-right: 35px;
}
</style>