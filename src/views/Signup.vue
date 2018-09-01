<template>
  <div class="container c-signup-container">
      <h3 class="c-text_copy">Account Register</h3>
      <form @submit.prevent="signUp">
        <div class="row justify-content-center">
          <div class="col-6">
            <div class="form-group">
              <label for="exampleInputEmail1" class="c-label" >Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
            </div>
            <div class="form-group">
              <label for="password" class="c-label" >Password</label>
              <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
            </div>
            <div class="form-group">
                <label for="displayName" class="c-label"  >Display Name</label>
                <input type="text" class="form-control" id="displayName" placeholder="Display Name" v-model="displayName">
            </div>
            <div class="form-group">
                <label for="dateOfBirth" class="c-label"  >Date Of Birth</label>
                <input type="text" class="form-control" id="dateOfBirth" placeholder="Date of Birth" v-model="dateOfBirth">
            </div>
            <div class="form-group">
                <label for="gender" class="c-label"  >Gender</label>
                <input type="text" class="form-control" id="gender" placeholder="Gender" v-model="gender">
            </div>
            <div class="c-submit-button">
              <input
                type="submit" class="btn btn-primary c-button__submit"
                value="Submit"
              >
            </div>
          </div>
        </div>
      </form>
    </div>
</template>

<script>
import * as firebase from '../api/firebase'
import * as back from '../api/back'

import router from '../router'


export default {
  name: 'Signup',
  data(){
    return {
      email:'',
      password:'',
      displayName:'',
      dateOfBirth:'',
      gender:''
    }
  },
  methods:{
    async signUp(){

      let signUpUser
      try{
        signUpUser = await firebase.signUp(this.email,this.password)
      }catch(err){
        alert(err)
        this.email=''
        this.password=''
        return
      }

      try{
        await back.addUserToDB({
          'u_id':signUpUser.user.uid,
          'name':this.displayName,
          'gender':this.gender
        })
      }catch(err){
        alert(err)
        return
      }

      router.push('profile')
    }
  },
  created(){
  }
}
</script>

<style scoped>
.c-signup-container {
    margin: 80px auto;
}

.c-submit-button {
    display: flex;
    justify-content: center;
}

.c-text_copy {
    text-align: center;
    margin: 24px auto;
}

.c-label {
    display: none;
}

.btn {
    background-color: #00882B;
    border:#00882B;
    border-radius: 24px;
    margin-right: 16px;
}

.btn:hover {
    background-color: #389e0d;
    border: #389e0d;
    box-shadow: 0 2px 4px grey;
}
</style>
