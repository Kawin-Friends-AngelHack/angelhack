<template>
  <div class="login">
    <form @submit.prevent="signIn">
      <input v-model="email" type="text">
      <input v-model="password" type="password">
      <input
        type="submit"
        value="Submit"
      >
    </form>
  </div>
</template>

<script>
import * as firebase from '../api/firebase'

export default {
  name: 'Login',
  data(){
    return {
      email:'',
      password:''
    }
  },
  methods:{
    async signIn(){

      let user
      try{
        user = await firebase.signIn(this.email,this.password)
      }catch(err){
        alert(err)
        this.email=''
        this.password=''
      }

      console.log(user.uid)
      console.log(firebase.getUser())
    }
  },
  created(){
  }
}
</script>
