<template>
   <div class="container mt-5 pt-5">
      <hr>
      <h3>My Contacts:</h3>
      <div class="search">
         <label>Search by First Name:</label>
         <input type="text" v-model="searchQuery" placeholder="Search.."/>
         <label>and / or Search by Last Name:</label>
         <input type="text" v-model="searchQueryLast" placeholder="Search.."/>
      </div>
      <p class="error" v-if="error">{{ error }}</p>
      <transition-group name="slide" mode="out-in">
         <div v-for="(contact, i) in resultQuery"
            :item="contact"
            :index="i"
            :key="contact._id">
            <div class="card mb-4 mt-2">
               <div class="card-header">
                  <h5 >{{ contact.firstName }} {{ contact.lastName }}
                     <button class="btn btn-outline-primary float" @click="handleEditClick(contact._id)">Edit Contact</button>
                  </h5>
               </div>
               <div class="card-body">
                  <p><i>Personal Data</i></p>
                  <div class="float-child">
                     <p v-if="contact.homeAddress" class="card-text">Home Address: <strong>{{ contact.homeAddress }}</strong></p>
                     <p class="card-text">Email(s): <strong>{{ contact.email }}</strong></p>
                     <p v-if="contact.birthday" class="card-text">Birthday: <strong>{{ contact.birthday }}</strong></p>
                     <p class="card-text">Mobile Phome: <strong>{{ contact.phone1 }}</strong></p>
                     <p v-if="contact.phone2" class="card-text">Other Phone: <strong>{{ contact.phone2 }}</strong></p>
                     <p v-if="contact.hobbie" class="card-text">Hobbies: <strong>{{ contact.hobbies }}</strong></p>
                  </div>
                  <div class="float-child" v-if="contact.Network1 || contact.Network2 || contact.Network3 || contact.Network4 || contact.Network5 || contact.Network6">
                     <p class="card-text">Social Networks:</p>
                     <p class="card-text"><strong><a :href=" contact.socialNetwork1 " target="_blank">{{ contact.Network1 }}</a></strong></p>
                     <p class="card-text"><strong><a :href=" contact.socialNetwork2 " target="_blank">{{ contact.Network2 }}</a></strong></p>
                     <p class="card-text"><strong><a :href=" contact.socialNetwork3 " target="_blank">{{ contact.Network3 }}</a></strong></p>
                     <p class="card-text"><strong><a :href=" contact.socialNetwork5 " target="_blank">{{ contact.Network4 }}</a></strong></p>
                     <p class="card-text"><strong><a :href=" contact.socialNetwork6 " target="_blank">{{ contact.Network5 }}</a></strong></p>
                     <p class="card-text"><strong><a :href=" contact.socialNetwork7 " target="_blank">{{ contact.Network6 }}</a></strong></p>
                  </div>
                  <div class="clear-both"></div>
                  <div class="center-data" v-if="contact.businessAddress || contact.businessEmail || contact.businessPhoneNumber || contact.businessMobilePhone || contact.Network7 || contact.Network8 || contact.Network9">
                     <p><i>Business Data</i></p>
                  </div>
                  <div class="center">
                     <p v-if="contact.businessAddress" class="card-text">Business Address: <strong>{{ contact.businessAddress }}</strong></p>
                     <p v-if="contact.businessEmail" class="card-text">Business Email(s): <strong>{{ contact.businessEmail }}</strong></p>
                     <p v-if="contact.businessPhoneNumber" class="card-text">Business Phone Number: <strong>{{ contact.businessPhoneNumber }}</strong></p>
                     <p v-if="contact.businessMobilePhone" class="card-text">Business Mobile Phone: <strong>{{ contact.businessMobilePhone }}</strong></p>
                     <p v-if="contact.Network7 || contact.Network8 || contact.Network9" class="card-text">Social Networks:</p>
                     <p v-if="contact.Network7" class="card-text"><strong><a :href=" contact.socialNetwork " target="_blank">{{ contact.Network7 }}</a></strong></p>
                     <p v-if="contact.Network8" class="card-text"><strong><a :href=" contact.socialNetwork4 " target="_blank">{{ contact.Network8 }}</a></strong></p>
                     <p v-if="contact.Network9" class="card-text"><strong><a :href=" contact.socialNetwork8 " target="_blank">{{ contact.Network9 }}</a></strong></p>
                  </div>
                  <button class="btn btn-outline-danger" @click="handleClick(contact._id)">Delete Contact</button>
                  <br><br>
                  <transition name="fade" mode="out-in">
                     <button class="btn btn-outline-danger alert alert-danger" @click="deleteContact(contact._id)" v-if="selectedItem === contact._id">
                     Sure? You cannot restore a contact, just enter a new one. If sure click here.
                     </button>
                  </transition>
               </div>
            </div>
         </div>
      </transition-group>
   </div>
</template>

<script>
import ContactService from "../ContactService";

export default {
  data() {
    return {
      contacts: [],
      error: "",
      selectedItem: null,
      searchQuery: null,
      searchQueryLast: null
    }
  },
  computed: {
    resultQuery() {
      if (this.searchQuery && this.searchQueryLast) {
        return this.contacts.filter((item) => {
          return this.searchQuery.toLowerCase().split(' ').every(v => item.firstName.toLowerCase().includes(v)) &&
            this.searchQueryLast.toLowerCase().split(' ').every(v => item.lastName.toLowerCase().includes(v))
        })
      } else if (this.searchQuery) {
        return this.contacts.filter((item) => {
          return this.searchQuery.toLowerCase().split(' ').every(v => item.firstName.toLowerCase().includes(v))
        })
      } else if (this.searchQueryLast) {
        return this.contacts.filter((item) => {
          return this.searchQueryLast.toLowerCase().split(' ').every(v => item.lastName.toLowerCase().includes(v))
        })
      } else {
        return this.contacts;
      }
    }
  },
  async created() {
    try {
      this.contacts = await ContactService.getContacts();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async deleteContact(id) {
      await ContactService.deleteContact(id);
      this.contacts = await ContactService.getContacts();
    },
    handleEditClick(id) {
      this.$router.push({
        name: "EditContact",
        params: {
          id
        }
      });
    },
    handleClick(id) {
      if (this.selectedItem != id) {
        this.selectedItem = id
      } else {
        this.selectedItem = ''
      }
    }
  }
}
</script>

<style scoped>
.fade-enter-active {
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
}

.fade-leave-active {
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
  position: absolute;
}

.fade-enter,
.fade-leave-to {
  transform: scale(0);
  opacity: 0;
}

.fade-move {
  transition: transform 0.5s;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 1.5s ease-out, opacity 1.5s ease-out;
}

.slide-enter,
.slide-leave-to {
  transform: scale(0);
  opacity: 0;
}

.slide-move {
  transition: transform 1.5s;
}

.float-child {
  width: 50%;
  float: left;
  padding: 20px;
}

.center {
  padding: 20px;
  width: 50%;
  margin: auto;
}

.center-data {
  width: 50%;
  margin: auto;
}

strong {
  font-weight: bold;
}

.clear-both {
  clear: both;
}

@media only screen and (max-width: 850px) {
  .float-child {
    width: 100%;
    padding: 20px;
  }
  .center {
    padding: 20px;
    width: 100%;
    margin: auto;
  }
  .center-data {
    width: 100%;
    margin: auto;
  }
}

.float {
  float: right;
}

input[type=text] {
  width: 130px;
  box-sizing: border-box;
  box-shadow: grey 0 0 5px 1px;
  border: 2px solid #ccc;
  border-radius: 10px;
  font-size: 16px;
  background-color: #d3d3e0;
  background-image: url('../assets/search.png');
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  margin: 0 20px 20px 20px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  transition-property: width, background-color, box-shadow;
}

input[type=text]:focus {
  width: 30%;
  background-color: white;
  box-shadow: black 0 0 20px 2px;
}

.search {
  margin: auto;
  width: 80%;
}
</style>
