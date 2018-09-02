<template>
  <div class="container c-main-container">
      <div class="row">
        <div class="col-4">
          <span class="c-text_copy">Hangout with</span>
          <ul class="list-group c-goingwith-list">
            <li 
              v-for="(user,index) in onUsers"
              :key="index"
              class="list-group-item"
            >
              <button v-if="index!=0" type="button" class="btn btn-delete" @click="deleteUserOnUser(user)">X</button>
              <img :src="user.image" class="c-profile-image" />
                {{user.name}} <span v-if="index==0">(You)</span>
            </li>
          </ul>
          <span class="c-text_copy">Your Friends</span>
          <ul class="list-group c-friend-list">
            <li class="list-group-item"
            v-for="(oUser,index) in otherUsers"
            :key="index"
            >
              <button type="button" class="btn btn-link" @click="addUserToOnUsers(oUser)">+</button>
              <img :src="oUser.image" class="c-profile-image" />
                {{oUser.name}}
            </li>
          </ul>
        </div>
        <div class="col-8">
          <div class="c-filter-dropdown-container">
              <h5 class="c-text_copy">Filter by</h5>

                <div class="form-group row">
                  <label for="inputPassword" class="col-sm-2 col-form-label">Budget</label>
                  <div class="col-sm-2">
                    <input type="text" class="form-control" id="inputPassword" placeholder="thb" v-model="budget">
                  </div>
                  <label for="inputPassword" class="col-sm-2 col-form-label">Distance</label>
                    <div class="col-sm-2">
                      <input type="text" class="form-control" id="inputPassword" placeholder="km">
                    </div>
                </div>
    
          </div>
            <div class="card-body"
              v-for="(event,index) in events"
              :key="index"
            >
              <div class="card c-card-event">
                <img class="card-img-top c-ac-image" :src="event.image"
                  alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">{{event.event_name}}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                  <a href="#" class="btn btn-primary">4.6</a>
                  <!-- Button trigger modal -->
                  <button type="button" class="btn btn-primary" @click="openModal(event)" data-toggle="modal" data-target="#exampleModalCenter">
                    More details
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>




      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
        >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalCenterTitle">{{event.event_name}}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row justify-content-center">
                <div class="col-8">
                  <img class="card-img-top c-info-image" :src="event.image"
                    alt="Card image cap">
                </div>
              </div>
              <div class="card-body">
                <h5 class="card-title">Description</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Place: {{event.location}}</li>
                    <li class="list-group-item">Type: {{event.event_type}}</li>
                    <li class="list-group-item">Interest: {{event.interest}}</li>
                </ul>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk
                  of the card's content.</p>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Share</button>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
import * as back from '../api/back'
import * as firebase from '../api/firebase'
import { mapActions } from 'vuex'


export default {
  name: 'Event',
  
  data(){
    return{
      event:{},

      budget:1000000,
      onUsers:[],
      otherUsers:[],
      events:[]
    }
  },
  methods:{
    ...mapActions([
      'changeLoadingState'
    ]),
    async openModal(event){
      this.changeLoadingState(true)
      let eventName = event['event_name']
      let result

      try{
        result = await back.getEachEvent({
          name:eventName
        })
      }catch(err){
        console.log(err)
      }


      this.event = result.data

      this.changeLoadingState(false)
    },
    async changeBudget(e){
      await this.getEvents()
    },
    async deleteUserOnUser(currentUser){
      this.onUsers = this.onUsers.filter(user => user['u_id'] !== currentUser['u_id'])
      this.otherUsers.push(currentUser)
      await this.getEvents()
    },
    async getEvents(){
      
      let uid = this.onUsers.map(user=>user['u_id'])
      let budget = this.budget

      let result

      try{
        result = await back.getEvents({
          'budget':budget,
          'u_id':uid
        })
      }catch(e){
        console.log(e)
        this.events=[];
      }

      this.events = result.data
      
    },
    async addUserToOnUsers(user){
      this.onUsers.push(user)
      this.deleteOtherUser(user)
      await this.getEvents()
    },
    async deleteOtherUser(currentUser){
      this.otherUsers = this.otherUsers.filter(user => user['u_id'] !== currentUser['u_id'])
    },
    async fillUsersData(selfUID){
      let result = await back.getUsers({
        uid:selfUID
      })


      this.otherUsers = result.data
    },
    async fillSelf(selfUID){
      let result = await back.getUser({
        uid:selfUID
      })


      this.onUsers = [result.data]
    }
  },
  async created(){
    this.changeLoadingState(true)
    let result = await firebase.getUser()
    let uid = result.uid
    await this.fillUsersData(uid)
    await this.fillSelf(uid)
    await this.getEvents()
    this.changeLoadingState(false)
  },
  watch: {
    budget: function () {
      this.changeBudget()
    }
  }
}
</script>

<style scoped>
.c-main-container {
    margin: 60px auto;
}

.c-profile-image {
    border-radius: 50%;
    width: 32px;
    height: 32px;
    margin-right: 8px;
}

.c-card-event {
    /* width: auto; */
    margin-bottom: 24px;
}

.c-ac-image {
    height: 160px;
    background-origin: border-box;
    background-size: auto
}

.c-friend-list, .c-goingwith-list {
    margin: 16px auto; 
}

.c-info-image {
    width: 320px;
    height: 240px;
    border-radius: 8px; 
}

.c-card-text {
    margin: 16px auto;
}

.c-filter-dropdown-container {
    margin:16px auto; 
    /* display: inline-flex;
    justify-content: flex-end; */
}

.c-filter-dropdown-item {
    margin-left: 16px; 
}

.btn {
    background-color: #52c41a;
    border:#52c41a;
    border-radius: 24px;
    margin-right: 16px;
}

.btn:hover {
    background-color: #389e0d;
    border: #389e0d;
    box-shadow: 0 2px 4px grey;
}

.c-text_copy {
    text-align: left;
    margin: 24px auto;
}


.btn.btn-link {
    width: 32px;
    height: 32px;
    line-height: 0px;
    background-color: #fff;
    border: #fff;
    color: #389e0d;
    border-radius: 50%;
    margin-left: 8px;
    text-decoration: none;
    text-align: center;
}

.btn.btn-delete {
    width: 32px;
    height: 32px;
    line-height: 0px;
    background-color: #fff;
    border: #fff;
    color: red;
    border-radius: 50%;
    margin-left: 8px;
    text-decoration: none;
    text-align: center;
}


.overflow{
  height:500px;
  overflow-y:auto;
}

.card-text{
  color:grey;
}
</style>

