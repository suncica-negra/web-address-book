<template>
   <div class="container col-md-6">
      <div class="row mb-3">
         <div class="col-md-12 themed-grid-col">
            <h2 class="srednji">Login</h2>
            <div class="card">
               <div class="card-body">
                  <form @submit.prevent="onSubmit">
                     <div class="form-group" :class="{invalid: $v.email.$error}">
                        <label for="email">Email</label>
                        <input id="email" class="form-control" placeholder="Enter your email" name="email" v-model="email" @blur="$v.email.$touch()">
                        <p class="red" v-if="$v.email.$error === true">User does not exist. Please register or enter the correct email.</p>
                     </div>
                     <div class="form-group" :class="{invalid: $v.password.$error}">
                        <label for="password">Password</label>
                        <input id="password" type="password" class="form-control" placeholder="Enter your password" name="password" v-model="password" >
                     </div>
                     <button type="submit" class="btn btn-dark" :disabled="$v.$invalid">Sign me up</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import {
  required,
  minLength
} from 'vuelidate/lib/validators'
import axios from 'axios'
const url = "./api/contact-manager/";

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  validations: {
    email: {
      required,
      unique: val => {
        if (val === '') return true
        return axios.get(url + "user/" + val)
          .then(res => {
            if (!res.data.error) {
              return true
            } else {
              return false
            }
          })
      }
    },
    password: {
      required,
      minLen: minLength(6)
    }
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password,
      }
      this.$store.dispatch('login', {
        email: formData.email,
        password: formData.password
      }).then(() => this.$router.push("/"))
    }
  }
}
</script>

<style scoped>
.row {
  padding-top: 100px;
}

.red {
  color: red;
}
</style>