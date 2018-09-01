<template>
  <div class="event">
    {{onUsers}}
    <br>
    <br>
    {{otherUsers}}
    <br>
    <br>
    {{events}}
  </div>
</template>

<script>
import * as back from '../api/back'
import * as firebase from '../api/firebase'

export default {
  name: 'Event',
  data(){
    return{
      isShowingModal:false,
      event:{},

      budget:1000000,
      onUsers:[],
      otherUsers:[],
      events:[]
    }
  },
  methods:{
    openModal(event){
      this.event = event
      this.isShowingModal=true
    },
    closeModal(){
      this.isShowingModal=false
    },
    async changeBudget(num){
      this.budget=num
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
      this.onUsers = this.onUsers.push(user)
      await this.getEvents()
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
    let uid = firebase.getUser().uid

    await this.fillUsersData(uid)
    await this.fillSelf(uid)
    await this.getEvents()
  }
}
</script>
