<template>
  <div class="jumbotron c-jb-bg">
    <h1 class="display-4">Discover your meaningful hangout</h1>
    <hr class="my-4">

      <div class="row justify-content-center">
        <router-link class="btn btn-primary btn-lg" to="/event" role="button">Explore attractions </router-link>
      </div>
  </div>

</template>

<script>

export default {
  name: 'Home',
  methods:{
  },
  created(){
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
    margin-top: 200px; 
    background-color: #00882B;
    border:#00882B;
    border-radius: 24px;
}

.btn:hover {
    background-color: #389e0d;
    border: #389e0d;
    box-shadow: 0 2px 4px grey;
}

.c-logo-image {
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

