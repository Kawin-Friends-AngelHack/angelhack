<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-light c-nav-bg">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <router-link class="navbar-brand" to="/">
        <img class="card-img-top-1 c-logo-image-1" src="./assets/logo.png" />
      </router-link>
    
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <router-link class="nav-link c-nav-link" to="/event">Explore attractions</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link c-nav-link" href="#">About us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link c-nav-link" href="#">Contact us</a>
          </li>
          <li>
            <div class="nav-link c-nav-link c-login-link" v-if="isLogin" @click="logOut">Logout</div>
            <router-link v-else class="nav-link c-nav-link c-login-link" to="/login">Login</router-link>

          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import * as firebase from './api/firebase'

export default {
  name:'App',
  data(){
    return{
      isLogin:false
    }
  },
  methods:{
    async checkUser(){
      let user = await firebase.getUser()
      if(user){
        this.isLogin = true
      }else{
        this.isLogin = false
      }
    },
    logOut(){
      firebase.signOut()
    }
  },
  async created(){
    this.checkUser()
  }
}
</script>


<style scoped>
.jumbotron {
    margin-bottom: 0px;
    height: 720px;
}

.c-jb-bg {
    background-size: cover;
    background-origin: border-box;
    background-position: center;
    background-image: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.5)), url("https://livehighlandsquare.com/wp-content/uploads/sites/63/2018/02/group-friends-outside-sitting-laughting-drinking-outdoor-concert-venue.jpg");
    
}

.c-text_copy {
    text-align: center;
    margin: 24px auto;
}

.btn {
    margin-top: 300px; 
    background-color: #00882B;
    border:#00882B;
    border-radius: 24px;
}

.btn:hover {
    background-color: #389e0d;
    border: #389e0d;
    box-shadow: 0 2px 4px grey;
}

.c-logo-image-1 {
    width: 64px;
    height: 64px;
}

.c-nav-bg {
    background-color: #fff;
}

.navbar-light .navbar-nav .nav-link {
    color: black;
}

.display-4 {
    text-align: center;
}

.nav-link.c-nav-link.c-login-link {
    color:#00882B;
}


.nav-link.c-nav-link.c-login-link:hover {
    color:#389e0d;
    box-shadow: 0 2px 4px grey;
    border-radius: 24px;
}



</style>
