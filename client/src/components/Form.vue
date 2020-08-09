<template>
   <div>
      <div class="form-group row">
         <label class="col-sm-2 col-form-label"></label>
         <div class="col-sm-10">
            <p><i>Personal Data</i></p>
         </div>
      </div>
      <div class="form-group row">
         <label for="inputEmail3" class="col-sm-2 col-form-label">First Name <span>*</span></label>
         <div class="col-sm-10">
            <input name="firstName" type="text" class="form-control" id="inputEmail3" placeholder="First Name" required v-model="contacts[0].firstName">
         </div>
      </div>
      <div class="form-group row">
         <label for="inputPassword3" class="col-sm-2 col-form-label">Last Name <span>*</span></label>
         <div class="col-sm-10">
            <input name="lastName" type="text" class="form-control" id="inputPassword3" placeholder="Last Name" required v-model="contacts[0].lastName">
         </div>
      </div>
      <div class="form-group row">
         <label for="inlineFormInputGroup" class="col-sm-2 col-form-label">E-mail(s) <span>*</span></label>
         <div class="col-sm-10">
            <div class="input-group mb-2">
               <div class="input-group-prepend">
                  <div class="input-group-text">@</div>
               </div>
               <input name="email" type="text" class="form-control" id="inlineFormInputGroup" placeholder="E-mail(s separated by a comma)" required v-model="contacts[0].email">
            </div>
         </div>
      </div>
      <div class="form-group row">
         <label for="inlineFormInputGroup1" class="col-sm-2 col-form-label">Home Address</label>
         <div class="col-sm-10">
            <div class="input-group mb-2">
               <div class="input-group-prepend">
                  <div class="input-group-text">&#127968;</div>
               </div>
               <input name="homeAddress" type="text" class="form-control" id="inlineFormInputGroup1" placeholder="Home Address" v-model="contacts[0].homeAddress">
            </div>
         </div>
      </div>
      <div class="form-group row">
         <label for="inlineFormInputGroup2" class="col-sm-2 col-form-label">Birthday</label>
         <div class="col-sm-10 col-md-4">
            <div class="input-group mb-2">
               <div class="input-group-prepend">
                  <div class="input-group-text">&#127882;</div>
               </div>
               <input name="birthday" type="date" class="form-control" id="inlineFormInputGroup2" placeholder="Birthday" v-model="contacts[0].birthday">
            </div>
         </div>
      </div>
      <div class="form-group row">
         <label for="inlineFormInputGroup3" class="col-sm-2 col-form-label">Mobile Phone <span>*</span></label>
         <div class="col-sm-10 col-md-4">
            <div class="input-group mb-2">
               <div class="input-group-prepend">
                  <div class="input-group-text">&#128241;</div>
               </div>
               <input name="phone1" type="number" class="form-control" id="inlineFormInputGroup3" placeholder="Mobile Phone" required v-model="contacts[0].phone1">
            </div>
         </div>
      </div>
      <div class="form-group row">
         <label for="inlineFormInputGroup4" class="col-sm-2 col-form-label">Phone</label>
         <div class="col-sm-10 col-md-4">
            <div class="input-group mb-2">
               <div class="input-group-prepend">
                  <div class="input-group-text">&phone;</div>
               </div>
               <input name="phone2" type="number" class="form-control" id="inlineFormInputGroup4" placeholder="Phone" v-model="contacts[0].phone2">
            </div>
         </div>
      </div>
      <div class="form-group row">
         <label for="inputPassword6" class="col-sm-2 col-form-label">Social Network</label>
         <div class="col-sm-10">
            <div class="input-group mb-2">
               <div class="input-group-prepend">
                  <div class="input-group-text">&#128079;</div>
               </div>
               <input name="Network1" type="text" class="form-control col-md-4" placeholder="Name of social network" v-model="contacts[0].Network1">
               <input name="socialNetwork1" type="url" class="form-control" id="inputPassword6" placeholder="Link to user profile" v-model="contacts[0].socialNetwork1">
            </div>
         </div>
      </div>
      <div class="form-group row">
         <label for="inputPassword7" class="col-sm-2 col-form-label">Social Network</label>
         <div class="col-sm-10">
            <div class="input-group mb-2">
               <div class="input-group-prepend">
                  <div class="input-group-text">&#128079;</div>
               </div>
               <input name="Network2" type="text" class="form-control col-md-4" placeholder="Name of social network" v-model="contacts[0].Network2">
               <input name="socialNetwork2" type="url" class="form-control" id="inputPassword7" placeholder="Link to user profile" v-model="contacts[0].socialNetwork2">
            </div>
         </div>
      </div>
      <div class="form-group row">
         <label for="inputPassword8" class="col-sm-2 col-form-label">Social Network</label>
         <div class="col-sm-10">
            <div class="input-group mb-2">
               <div class="input-group-prepend">
                  <div class="input-group-text">&#128079;</div>
               </div>
               <input name="Network3" type="text" class="form-control col-md-4" placeholder="Name of social network" v-model="contacts[0].Network3">
               <input name="socialNetwork3" type="url" class="form-control" id="inputPassword8" placeholder="Link to user profile" v-model="contacts[0].socialNetwork3">
            </div>
         </div>
      </div>
      <div class="form-group row">
         <label for="inputPassword10" class="col-sm-2 col-form-label">Social Network</label>
         <div class="col-sm-10">
            <div class="input-group mb-2">
               <div class="input-group-prepend">
                  <div class="input-group-text">&#128079;</div>
               </div>
               <input name="Network4" type="text" class="form-control col-md-4" placeholder="Name of social network" v-model="contacts[0].Network4">
               <input name="socialNetwork5" type="url" class="form-control" id="inputPassword10" placeholder="Link to user profile" v-model="contacts[0].socialNetwork5">
            </div>
         </div>
      </div>
      <div class="form-group row">
         <label for="inputPassword11" class="col-sm-2 col-form-label">Social Network</label>
         <div class="col-sm-10">
            <div class="input-group mb-2">
               <div class="input-group-prepend">
                  <div class="input-group-text">&#128079;</div>
               </div>
               <input name="Network5" type="text" class="form-control col-md-4" placeholder="Name of social network" v-model="contacts[0].Network5">
               <input name="socialNetwork6" type="url" class="form-control" id="inputPassword11" placeholder="Link to user profile" v-model="contacts[0].socialNetwork6">
            </div>
         </div>
      </div>
      <div class="form-group row">
         <label for="inputPassword12" class="col-sm-2 col-form-label">Social Network</label>
         <div class="col-sm-10">
            <div class="input-group mb-2">
               <div class="input-group-prepend">
                  <div class="input-group-text">&#128079;</div>
               </div>
               <input name="Network6" type="text" class="form-control col-md-4" placeholder="Name of social network" v-model="contacts[0].Network6">
               <input name="socialNetwork7" type="url" class="form-control" id="inputPassword12" placeholder="Link to user profile" v-model="contacts[0].socialNetwork7">
            </div>
         </div>
      </div>
      <div class="form-group row">
         <label for="inputPassword14" class="col-sm-2 col-form-label">Hobbies</label>
         <div class="col-sm-10">
            <div class="input-group mb-2">
               <div class="input-group-prepend">
                  <div class="input-group-text">&#127937;</div>
               </div>
               <input name="hobbies" type="text" class="form-control" id="inputPassword14" placeholder="Hobbies" v-model="contacts[0].hobbies">
            </div>
         </div>
      </div>
      <div class="form-group row">
         <label class="col-sm-2 col-form-label"></label>
         <div class="col-sm-10">
            <p><i>Business Data</i></p>
         </div>
      </div>
      <div class="form-group row">
         <label for="inputPassword4" class="col-sm-2 col-form-label">Business Address</label>
         <div class="col-sm-10">
            <input name="businessAddress" type="text" class="form-control" id="inputPassword4" placeholder="Business Address" v-model="contacts[0].businessAddress">
         </div>
      </div>
      <div class="form-group row">
         <label for="inlineFormInputGroup7" class="col-sm-2 col-form-label">Business E-mail(s)</label>
         <div class="col-sm-10">
            <div class="input-group mb-2">
               <div class="input-group-prepend">
                  <div class="input-group-text">@</div>
               </div>
               <input name="businessEmail" type="text" class="form-control" id="inlineFormInputGroup7" placeholder="Business E-mail(s separated by a comma)" v-model="contacts[0].businessEmail">
            </div>
         </div>
      </div>
      <div class="form-group row">
         <label for="inlineFormInputGroup5" class="col-sm-2 col-form-label">Phone Number</label>
         <div class="col-sm-10 col-md-4">
            <div class="input-group mb-2">
               <div class="input-group-prepend">
                  <div class="input-group-text">&phone;</div>
               </div>
               <input name="businessPhoneNumber" type="number" class="form-control" id="inlineFormInputGroup5" placeholder="Business Phone Number" v-model="contacts[0].businessPhoneNumber">
            </div>
         </div>
      </div>
      <div class="form-group row">
         <label for="inlineFormInputGroup6" class="col-sm-2 col-form-label">Mobile Phone</label>
         <div class="col-sm-10 col-md-4">
            <div class="input-group mb-2">
               <div class="input-group-prepend">
                  <div class="input-group-text">&#128241;</div>
               </div>
               <input name="businessMobilePhone" type="number" class="form-control" id="inlineFormInputGroup6" placeholder="Business Mobile Phone" v-model="contacts[0].businessMobilePhone">
            </div>
         </div>
      </div>
      <div class="form-group row">
         <label for="inputPassword5" class="col-sm-2 col-form-label">Social Network</label>
         <div class="col-sm-10">
            <div class="input-group mb-2">
               <div class="input-group-prepend">
                  <div class="input-group-text">&#128101;</div>
               </div>
               <input name="Network7" type="text" class="form-control col-md-4" placeholder="Name of social network" v-model="contacts[0].Network7">
               <input name="socialNetwork" type="url" class="form-control" id="inputPassword5" placeholder="Link to user profile" v-model="contacts[0].socialNetwork">
            </div>
         </div>
      </div>
      <div class="form-group row">
         <label for="inputPassword9" class="col-sm-2 col-form-label">Social Network</label>
         <div class="col-sm-10">
            <div class="input-group mb-2">
               <div class="input-group-prepend">
                  <div class="input-group-text">&#128101;</div>
               </div>
               <input name="Network8" type="text" class="form-control col-md-4" placeholder="Name of social network" v-model="contacts[0].Network8">
               <input name="socialNetwork4" type="url" class="form-control" id="inputPassword9" placeholder="Link to user profile" v-model="contacts[0].socialNetwork4">
            </div>
         </div>
      </div>
      <div class="form-group row">
         <label for="inputPassword13" class="col-sm-2 col-form-label">Social Network</label>
         <div class="col-sm-10">
            <div class="input-group mb-2">
               <div class="input-group-prepend">
                  <div class="input-group-text">&#128101;</div>
               </div>
               <input name="Network9" type="text" class="form-control col-md-4" placeholder="Name of social network" v-model="contacts[0].Network9">
               <input name="socialNetwork8" type="url" class="form-control" id="inputPassword13" placeholder="Link to user profile" v-model="contacts[0].socialNetwork8">
            </div>
         </div>
      </div>
   </div>
</template>

<script>	
export default {
  data() {
    return {

    }
  },
  props: ["contacts"]
}
</script>

<style scoped>
span {
  color: red;
}
</style>