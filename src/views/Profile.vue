<template>
  <div class="profile">
    <div class="container c-main-container c-input-container">
    <div class="row justify-content-center">
      <div class="col-4">
        <h3 class="c-text_copy">What are your interests?</h3>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-4 c-input-preference">
        <div class="input-group mb-3">
          <!-- <input type="text" class="form-control" placeholder="Please type any topic ..." aria-label="preference's username"
            aria-describedby="button-addon2"> -->
          <autocomplete
            ref="interest"
            :source="fullInterest"
            resultsValue="name"
            @selected="selectData"
            inputClass="form-control"
          >
          </autocomplete>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <h4 class="c-text_copy">How much do you like it ?</h4>
    </div>
    <div class="row justify-content-center">
      <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div class="mr-2" role="group" aria-label="First group">
          <button type="button" class="btn btn-secondary c-btn-rating-1" @click="changeScoreAndAddData(1)">1</button>
          <button type="button" class="btn btn-secondary c-btn-rating-2" @click="changeScoreAndAddData(2)">2</button>
          <button type="button" class="btn btn-secondary c-btn-rating-3" @click="changeScoreAndAddData(3)">3</button>
          <button type="button" class="btn btn-secondary c-btn-rating-4" @click="changeScoreAndAddData(4)">4</button>
          <button type="button" class="btn btn-secondary c-btn-rating-5" @click="changeScoreAndAddData(5)">5</button>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <h4 
        class="c-text_copy" 
        style="border-top:1px solid grey;padding:24px 120px; padding-bottom:0px;">
          Your interests
      </h4>
    </div>
    <div class="row justify-content-center">
      <div class="col-8 c-pref-container">
        <div 
          class="c-text_copy c-pref-item hover-x"
          v-for="(item,index) in selfInterest"
          :key="index"
          @click="deleteInterest(item.name)"
        >
          {{item.name}}
          <span class="badge badge-secondary c-badge">
            {{item.score}}
          </span>
        </div>
      </div>

      
    </div>
    
    </div>
    <div class="row">
      <div class="col-12 center">
        <router-link class="btn btn-primary btn-special" to="/event" v-if="isReady">You're ready to hangout!!!</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Autocomplete from 'vuejs-auto-complete'
import * as back from '../api/back'
import * as firebase from '../api/firebase'
import { mapActions } from 'vuex'

export default {
  name: 'Profile',
  components: {
    Autocomplete,
  },
  data(){
    return{
      uid:'',
      proposedInterest:{
        // name:'',
        // score:0
      },
      selfInterest:[
        // {
          // name:'',
          // score:0
        // }
      ],
      fullInterest:[
        {name:"Music", id:1},
        {name:"Food", id:2},
        {name:"Drink", id:3},
        {name:"Community", id:4},
        {name:"Cat", id:5},
        {name:"Dog", id:6},
        {name:"Exercise", id:7},
        {name:"Education", id:8},
        {name:"3D Printing", id:9},
        {name:"Ghost hunting", id:10},
        {name: "Coding", id:11},
        {name:"Dance", id:12},
        {name:"Table tennis", id:13},
        {name:"Fashion", id:14},
        {name:"Graphic Design", id:15},
        {name:"Movies", id:16},
        {name:"Leather crafting", id:17},
        {name:"Coffee roasting", id:18},
        {name:"Animation", id:19},
        {name:"Photography", id:20},
        {name:"Video gaming", id: 21}
      ]
    }
  },
  computed:{
    isReady(){
      return this.selfInterest.length>4
    }
  },
  methods:{
    ...mapActions([
      'changeLoadingState'
    ]),
    selectData(interest){
      this.proposedInterest['name']=interest.value
    },
    async changeScoreAndAddData(score){
      if(this.proposedInterest['name']==''){
        return
      }

      await this.deleteInterest(this.proposedInterest['name'])

      this.proposedInterest.score = score
      this.addToSelfInterest()
      await this.addToDB()

    },
    async deleteInterest(interest){
      for (let i = 0; i < this.selfInterest.length; i++) {
        if(this.selfInterest[i]['name']=== interest){
          this.selfInterest.splice(i,1)
          await back.deleteInterest({
            "u_id":this.uid,
            "interest":interest
          })
        }
      }
    },
    async getEachInterest(){
      let result
      try{
        result = await back.getEachInterest({
          "uid":this.uid
        })
      }catch(e){
        console.log(e)
      }

      this.selfInterest = result.data.map(int => {return {name:int.interest,score:int.rate}})
    },
    addToSelfInterest(){
      let copy = Object.assign({}, this.proposedInterest)

      this.selfInterest.push(copy)
    },
    async addToDB(){
      try{
        await back.addInterestToDB({
          'u_id':this.uid,
          'interest':this.proposedInterest.name,
          'rate':this.proposedInterest.score
        })
      }catch(e){
        alert(e)
      }
      
    }
  },
  async created(){
    this.changeLoadingState(true)
    let result = await firebase.getUser()
    this.uid = result.uid
    await this.getEachInterest()
    this.changeLoadingState(false)
  }
}
</script>

<style scoped>
.c-input-container {
    margin: 24px auto;
}

.c-text_copy {
    text-align: center;
    margin: 24px auto;
}

.c-input-preference {
    height: 38px;
}

.c-badge {
    margin-left: 8px;
    background-color: #237804;
    border:#237804;
    border-radius: 50%;
    font-weight: normal;
}

.c-pref-container {
    display: inline-flex;
    justify-content: center;
    align-items: center; 
}

.c-pref-item {
    margin-left: 16px;
    margin-right: 16px;
}

.c-btn-rating-1 {
    background-color: #b7eb8f;
    border: #b7eb8f;
    border-radius: 50%;

}

.c-btn-rating-2 {
    background-color: #95de64;
    border: #95de64;
    border-radius: 50%;
}

.c-btn-rating-3 {
    background-color: #52c41a;
    border: #52c41a;
    border-radius: 50%;
}

.c-btn-rating-4 {
    background-color: #237804;
    border:#237804;
    border-radius: 50%;
}

.c-btn-rating-5 {
    background-color: #135200;
    border: #135200;
    border-radius: 50%;
}

.btn:hover {
    background-color: #092b00;
    border: #092b00;
    box-shadow: 0 2px 4px grey;
}

.btn {
    width: 36px;
    height: 36px; 
}

.center{
  text-align:center;
}

.btn-special{
  background-color: #135200;
  min-width:200px;
  width:40%;
  border:0px;
  -webkit-animation-name: greenPulse;
  -webkit-animation-duration: 2s;
  -webkit-animation-iteration-count: infinite;
}

@-webkit-keyframes greenPulse {
  from { background-color: #749a02; -webkit-box-shadow: 0 0 9px #333; }
  50% { background-color: #91bd09; -webkit-box-shadow: 0 0 18px #91bd09; }
  to { background-color: #749a02; -webkit-box-shadow: 0 0 9px #333; }
}

.hover-x{
  cursor:pointer;

}

.hover-x:hover:before {
  content: 'X'; 
  color: red;
}

</style>

<style>
.autocomplete--clear img{
  vertical-align:super;
}
</style>