import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import firebaseConfig from './config/firebase'

let app
firebase.initializeApp(firebaseConfig)
firebase.auth().onAuthStateChanged(function(){
  if(!app){
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

