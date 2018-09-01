<template>
  <div class="signup">
    <form @submit.prevent="signUp">
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
  name: 'Signup',
  data(){
    return {
      email:'',
      password:''
    }
  },
  methods:{
    async signUp(){

      let user
      try{
        user = await firebase.signUp(this.email,this.password)
      }catch(err){
        alert(err)
        this.email=''
        this.password=''
      }

      console.log(user.user.uid)
    }
  },
  created(){
  }
}
</script>
