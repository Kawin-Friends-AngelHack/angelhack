<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/signup">Signup</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/event">Event</router-link> |
      <button @click="checkUser">CheckUser</button>
      <button @click="logOut">Logout</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import * as firebase from './api/firebase'

export default {
  name:'App',
  methods:{
    checkUser(){
      console.log(firebase.getUser())
    },
    logOut(){
      firebase.signOut()
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
