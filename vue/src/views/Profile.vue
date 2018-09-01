<template>
  <div class="profile">
    <autocomplete
      ref="interest"
      :source="fullInterest"
      resultsValue="name"
      @selected="selectData"
    >
    </autocomplete>

    <button @click="changeScoreAndAddData(1)"></button>
    <div
      v-for="item in selfInterest"
      :key="item.name"
    >
      {{item.name}} : {{item.score}}
    </div>
  </div>
</template>

<script>
import Autocomplete from 'vuejs-auto-complete'
import * as back from '../api/back'
import * as firebase from '../api/firebase'

export default {
  name: 'Profile',
  components: {
    Autocomplete,
  },
  data(){
    return{
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
  methods:{
    selectData(interest){
      this.proposedInterest['name']=interest.value
    },
    async changeScoreAndAddData(score){
      if(this.proposedInterest['name']==''){
        return
      }

      this.proposedInterest.score = score
      this.addToSelfInterest()
      await this.addToDB()
    },
    addToSelfInterest(){
      let copy = Object.assign({}, this.proposedInterest)

      this.selfInterest.push(copy)
    },
    async addToDB(){
      try{
        await back.addInterestToDB({
          'u_id':firebase.getUser().uid,
          'interest':this.proposedInterest.name,
          'rate':this.proposedInterest.score
        })
      }catch(e){
        alert(e)
      }
      
    }
  },
  created(){

  }
}
</script>
