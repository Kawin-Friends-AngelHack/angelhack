<template>
  <div class="container c-signup-container">
      <h3 class="c-text_copy">Login</h3>
      <form @submit.prevent="signIn">
        <div class="row justify-content-center">
          <div class="col-6">
            <div class="form-group">
              <label for="email" class="c-label">Email address</label>
              <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email" v-model="email">
            </div>
            <div class="form-group">
              <label for="password" class="c-label">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
            </div>
            <div class="c-submit-button">
              <input
                type="submit"
                class="btn btn-primary c-button__submit"
                value="Sign in"
              >
            </div>
            <div class="row">
              <img class="img-center" src="../assets/login-btn.png">
            </div>
            <div class="row justify-content-center">
              <div class="c-signup-container">
                <span>First time here?</span> <router-link to="/signup" href="#" class="c-signup-link">Sign Up</router-link>
              </div>
            </div>
          </div>
        </div>
      </form>
  </div>
</template>

<script>
import * as firebase from '../api/firebase'
import router from '../router'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data(){
    return {
      email:'',
      password:''
    }
  },
  methods:{
    ...mapActions([
      'changeLoginState',
      'changeLoadingState'
    ]),
    async signIn(){
      this.changeLoadingState(true)
      let user
      try{
        user = await firebase.signIn(this.email,this.password)
      }catch(err){
        alert(err)
        this.email=''
        this.password=''
        location.reload()
      }

      console.log(user.uid)
      this.changeLoginState(true)
      // console.log(firebase.getUser())
      router.push('event')
      this.changeLoadingState(false)
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

.c-signup-link {
    color: #00882B;
    margin-left: 16px;
}

.c-signup-link:hover {
    color: #389e0d;
}

.c-signup-container {
    margin: 16px auto;
}

.img-center{
  width:200px;
  margin:auto;
}
</style>

