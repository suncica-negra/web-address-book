<template>
   <div class="container col-md-6">
      <div class="row mb-5">
         <div class="themed-grid-col">
            <h2>Register</h2>
            <div class="card">
               <div class="card-body">
                  <form @submit.prevent="onSubmit" :class="{invalid: $v.name.$error}">
                     <div class="form-group">
                        <label for="name">Name</label>
                        <input id="name" class="form-control" placeholder="Enter name and surname" name="name" v-model="name">
                        <p class="red" v-if="!$v.name.required">This field must not be empty.</p>
                     </div>
                     <div class="form-group" :class="{invalid: $v.username.$error}">
                        <label for="korisnicko">Username *</label>
                        <input id="korisnicko" class="form-control" placeholder="Enter username" name="username" v-model="username">
                        <p class="red" v-if="!$v.username.required">This field must not be empty.</p>
                     </div>
                     <div class="form-group" :class="{invalid: $v.email.$error}">
                        <label for="email">Email *</label>
                        <input type="email" id="email" class="form-control" placeholder="Enter email" name="email" v-model="email" @blur="$v.email.$touch()">
                        <p class="red" v-if="!$v.email.email">Please provide a valid email address.</p>
                        <p class="red" v-if="!$v.email.required">This field must not be empty.</p>
                     </div>
                     <div class="form-group" :class="{invalid: $v.password.$error}">
                        <label for="password">Password</label>
                        <input id="password" type="password" class="form-control" placeholder="Enter at least 6 characters password" name="password" pattern=".{6,}" v-model="password">
                     </div>
                     <div class="form-group" :class="{invalid: $v.confirmPassword.$error}">
                        <label for="confirmPassword">Confirm Password</label>
                        <input id="confirmPassword" type="password" class="form-control" placeholder="Enter the password as in the field above" name="confirmPassword" pattern=".{6,}" v-model="confirmPassword">
                     </div>
                     <p><small>* If the entered email is the same as the one already entered in the database, you cannot register. Email must be unique.</small></p>
                     <p><b class="usklicnik">⚠️</b> <small>Personal data will not be shared with third parties. We care about your privacy.</small></p>
                     <button type="submit" class="btn btn-dark" :disabled="$v.$invalid">Register me</button>
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
  email,
  minLength,
  sameAs
} from 'vuelidate/lib/validators'
import axios from 'axios'
const url = "./api/contact-manager/";

export default {
  data() {
    return {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      err: false
    }
  },
  validations: {
    email: {
      required,
      email,
      unique: val => {
        if (val === '') return true
        return axios.get(url + "user/" + val)
          .then(res => {
            if (!res.data.error) {
              return false
            } else {
              return true
            }
          })
      }
    },
    name: {
      required
    },
    username: {
      required
    },
    password: {
      required,
      minLen: minLength(6)
    },
    confirmPassword: {
      //        sameAs: sameAs('password')
      sameAs: sameAs(vm => {
        return vm.password
      })
    }
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        name: this.name,
        password: this.password,
        confirmPassword: this.confirmPassword,
        username: this.username
      }
      this.$store.dispatch('signup', formData).then(() => this.$router.push("/"))
    }
  }
}
</script>

<style scoped>
	.row {
  padding-top: 100px;
}

.form-group.invalid label {
  color: red;
}

.form-group.invalid input {
  border: 1px solid red;
  background-color: #ffc9aa;
}

.red {
  color: red;
}
</style>