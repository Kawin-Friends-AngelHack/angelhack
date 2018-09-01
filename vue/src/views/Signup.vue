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
import * as back from '../api/back'

import router from '../router'


export default {
  name: 'Signup',
  data(){
    return {
      email:'',
      password:'',
      name:'test1',
      displayName:'testdisplay',
      dateOfBirth:'',
      gender:'m'
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
          'name':this.name,
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
