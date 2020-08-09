<template>
   <form @submit="editContact">
      <div class="container mt-5 pt-5">
        <Form :contacts="contacts"/>
        <p class="required">
        * Required fields
        </p>
        <div class="form-group row">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary mb-5">Edit Contact</button>
          </div>
        </div>
      </div>
   </form>
</template>

<script>
import ContactService from "../ContactService";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Form from "./Form.vue";

const url = "./api/contacts/";

export default {
  data() {
    return {
      contacts: []
    }
  },
  components: {
    Form
  },
  props: ["id"],
  mounted() {
    this.fetchContact();
  },
  methods: {
    async fetchContact() {
      try {
        this.contacts = await ContactService.editContact(this.id);
      } catch (err) {
        this.error = err.message;
      }
    },
    async editContact() {
      const decoded = jwtDecode(localStorage.token);
      var username = decoded.email;
      var utcSeconds = decoded.exp;
      var time = new Date(0);
      time.setUTCSeconds(utcSeconds);
      if (time >= new Date()) {
        await axios.put(url + username + "/" + this.id, {
          firstName: this.contacts[0].firstName,
          lastName: this.contacts[0].lastName,
          homeAddress: this.contacts[0].homeAddress,
          email: this.contacts[0].email,
          birthday: this.contacts[0].birthday,
          phone1: this.contacts[0].phone1,
          phone2: this.contacts[0].phone2,
          Network1: this.contacts[0].Network1,
          socialNetwork1: this.contacts[0].socialNetwork1,
          Network2: this.contacts[0].Network2,
          socialNetwork2: this.contacts[0].socialNetwork2,
          Network3: this.contacts[0].Network3,
          socialNetwork3: this.contacts[0].socialNetwork3,
          Network4: this.contacts[0].Network4,
          socialNetwork5: this.contacts[0].socialNetwork5,
          Network5: this.contacts[0].Network5,
          socialNetwork6: this.contacts[0].socialNetwork6,
          Network6: this.contacts[0].Network6,
          socialNetwork7: this.contacts[0].socialNetwork7,
          hobbies: this.contacts[0].hobbies,
          businessAddress: this.contacts[0].businessAddress,
          businessPhoneNumber: this.contacts[0].businessPhoneNumber,
          businessMobilePhone: this.contacts[0].businessMobilePhone,
          Network7: this.contacts[0].Network7,
          socialNetwork: this.contacts[0].socialNetwork,
          Network8: this.contacts[0].Network8,
          socialNetwork4: this.contacts[0].socialNetwork4,
          Network9: this.contacts[0].Network9,
          socialNetwork8: this.contacts[0].socialNetwork8,
          businessEmail: this.contacts[0].businessEmail
        }).then(this.$router.push({
          name: "Contacts"
        }));
      } else {
        return alert("Login session has expired. Please click on `logout` and then log in again.")
      }
    }
  }
}
</script>

<style scoped>
.required {
  color: red;
}
</style>