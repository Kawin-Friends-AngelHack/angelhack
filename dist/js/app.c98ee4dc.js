(function(e){function t(t){for(var r,i,o=t[0],u=t[1],c=t[2],l=0,h=[];l<o.length;l++)i=o[l],a[i]&&h.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(h.length)h.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("c21b"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/login"}},[e._v("Login")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/signup"}},[e._v("Signup")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/profile"}},[e._v("Profile")]),e._v(" |\n    "),n("router-link",{attrs:{to:"/event"}},[e._v("Event")]),e._v(" |\n    "),n("button",{on:{click:e.checkUser}},[e._v("CheckUser")]),n("button",{on:{click:e.logOut}},[e._v("Logout")])],1),n("router-view")],1)},s=[],i=(n("96cf"),n("3040")),o=n("8aa5"),u=n.n(o),c=function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.auth().createUserWithEmailAndPassword(t,n);case 3:return r=e.sent,e.abrupt("return",r);case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0.message;case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.auth().signInWithEmailAndPassword(t,n);case 3:return r=e.sent,e.abrupt("return",r);case 7:throw e.prev=7,e.t0=e["catch"](0),e.t0.message;case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:u.a.auth().signOut().catch(function(e){throw e.message});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),h=function(){return u.a.auth().currentUser},m={name:"App",methods:{checkUser:function(){console.log(h())},logOut:function(){l()}}},d=m,f=(n("034f"),n("2877")),v=Object(f["a"])(d,a,s,!1,null,null,null);v.options.__file="App.vue";var g=v.exports,w=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"})},x=[],_={name:"Home",methods:{},created:function(){}},k=_,y=Object(f["a"])(k,b,x,!1,null,null,null);y.options.__file="Home.vue";var O=y.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"event"},[e._v("\n  "+e._s(e.onUsers)+"\n  "),n("br"),n("br"),e._v("\n  "+e._s(e.otherUsers)+"\n  "),n("br"),n("br"),e._v("\n  "+e._s(e.events)+"\n")])},j=[],S=n("bc3a"),U=n.n(S),I="https://painaidee-backend.herokuapp.com",E=function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U()({method:"get",url:"".concat(I,"/users/").concat(t.uid)});case 3:n=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0);case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U()({method:"get",url:"".concat(I,"/user/").concat(t.uid)});case 3:n=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),console.log(e.t0);case 9:return e.abrupt("return",n);case 10:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U()({method:"post",url:"${root}/user",data:t});case 3:e.next=9;break;case 5:throw e.prev=5,e.t0=e["catch"](0),alert(e.t0),e.t0;case 9:return e.abrupt("return",!0);case 10:case"end":return e.stop()}},e,this,[[0,5]])}));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U()({method:"post",url:"${root}/user/interest",data:t});case 3:e.next=9;break;case 5:throw e.prev=5,e.t0=e["catch"](0),alert(e.t0),e.t0;case 9:return e.abrupt("return",!0);case 10:case"end":return e.stop()}},e,this,[[0,5]])}));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U()({method:"post",url:"${root}/events",data:t});case 3:n=e.sent,e.next=10;break;case 6:throw e.prev=6,e.t0=e["catch"](0),alert(e.t0),e.t0;case 10:return e.abrupt("return",n);case 11:case"end":return e.stop()}},e,this,[[0,6]])}));return function(t){return e.apply(this,arguments)}}(),C={name:"Event",data:function(){return{isShowingModal:!1,event:{},budget:1e6,onUsers:[],otherUsers:[],events:[]}},methods:{openModal:function(e){this.event=e,this.isShowingModal=!0},closeModal:function(){this.isShowingModal=!1},changeBudget:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.budget=t,e.next=3,this.getEvents();case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),getEvents:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.onUsers.map(function(e){return e["u_id"]}),n=this.budget,e.prev=2,e.next=5,M({budget:n,u_id:t});case 5:r=e.sent,e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](2),console.log(e.t0),this.events=[];case 12:this.events=r.data;case 13:case"end":return e.stop()}},e,this,[[2,8]])}));return function(){return e.apply(this,arguments)}}(),addUserToOnUsers:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.onUsers=this.onUsers.push(t),e.next=3,this.getEvents();case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),fillUsersData:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,E({uid:t});case 2:n=e.sent,this.otherUsers=n.data;case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),fillSelf:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,P({uid:t});case 2:n=e.sent,this.onUsers=[n.data];case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},created:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=h().uid,e.next=3,this.fillUsersData(t);case 3:return e.next=5,this.fillSelf(t);case 5:return e.next=7,this.getEvents();case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},$=C,T=Object(f["a"])($,R,j,!1,null,null,null);T.options.__file="Event.vue";var L=T.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"signup"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.signUp(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("input",{attrs:{type:"submit",value:"Submit"}})])])},N=[],H=(n("7f7f"),{name:"Signup",data:function(){return{email:"",password:"",name:"test1",displayName:"testdisplay",dateOfBirth:"",gender:"m"}},methods:{signUp:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c(this.email,this.password);case 3:t=e.sent,e.next=12;break;case 6:return e.prev=6,e.t0=e["catch"](0),alert(e.t0),this.email="",this.password="",e.abrupt("return");case 12:return e.prev=12,e.next=15,A({u_id:t.user.uid,name:this.name,gender:this.gender});case 15:e.next=21;break;case 17:return e.prev=17,e.t1=e["catch"](12),alert(e.t1),e.abrupt("return");case 21:ie.push("profile");case 22:case"end":return e.stop()}},e,this,[[0,6],[12,17]])}));return function(){return e.apply(this,arguments)}}()},created:function(){}}),q=H,V=Object(f["a"])(q,B,N,!1,null,null,null);V.options.__file="Signup.vue";var z=V.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.signIn(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("input",{attrs:{type:"submit",value:"Submit"}})])])},G=[],J={name:"Login",data:function(){return{email:"",password:""}},methods:{signIn:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p(this.email,this.password);case 3:t=e.sent,e.next=11;break;case 6:e.prev=6,e.t0=e["catch"](0),alert(e.t0),this.email="",this.password="";case 11:console.log(t.uid),ie.push("event");case 13:case"end":return e.stop()}},e,this,[[0,6]])}));return function(){return e.apply(this,arguments)}}()},created:function(){}},W=J,K=Object(f["a"])(W,F,G,!1,null,null,null);K.options.__file="Login.vue";var Z=K.exports,Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"profile"},[n("autocomplete",{ref:"interest",attrs:{source:e.fullInterest,resultsValue:"name"},on:{selected:e.selectData}}),n("button",{on:{click:function(t){e.changeScoreAndAddData(1)}}}),e._l(e.selfInterest,function(t){return n("div",{key:t.name},[e._v("\n    "+e._s(t.name)+" : "+e._s(t.score)+"\n  ")])})],2)},X=[],Y=(n("f751"),n("8f81")),ee=n.n(Y),te={name:"Profile",components:{Autocomplete:ee.a},data:function(){return{proposedInterest:{},selfInterest:[],fullInterest:[{name:"Music",id:1},{name:"Food",id:2},{name:"Drink",id:3},{name:"Community",id:4},{name:"Cat",id:5},{name:"Dog",id:6},{name:"Exercise",id:7},{name:"Education",id:8},{name:"3D Printing",id:9},{name:"Ghost hunting",id:10},{name:"Coding",id:11},{name:"Dance",id:12},{name:"Table tennis",id:13},{name:"Fashion",id:14},{name:"Graphic Design",id:15},{name:"Movies",id:16},{name:"Leather crafting",id:17},{name:"Coffee roasting",id:18},{name:"Animation",id:19},{name:"Photography",id:20},{name:"Video gaming",id:21}]}},methods:{selectData:function(e){this.proposedInterest["name"]=e.value},changeScoreAndAddData:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(""!=this.proposedInterest["name"]){e.next=2;break}return e.abrupt("return");case 2:return this.proposedInterest.score=t,this.addToSelfInterest(),e.next=6,this.addToDB();case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),addToSelfInterest:function(){var e=Object.assign({},this.proposedInterest);this.selfInterest.push(e)},addToDB:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D({u_id:h().uid,interest:this.proposedInterest.name,rate:this.proposedInterest.score});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),alert(e.t0);case 8:case"end":return e.stop()}},e,this,[[0,5]])}));return function(){return e.apply(this,arguments)}}()},created:function(){}},ne=te,re=Object(f["a"])(ne,Q,X,!1,null,null,null);re.options.__file="Profile.vue";var ae=re.exports;r["a"].use(w["a"]);var se=new w["a"]({routes:[{path:"/",name:"home",component:O},{path:"/login",name:"login",component:Z},{path:"/signup",name:"signup",component:z},{path:"/profile",name:"profile",component:ae,meta:{requireAuth:!0}},{path:"/event",name:"event",component:L,meta:{requireAuth:!0}}]});se.beforeEach(function(e,t,n){var r=h(),a=e.matched.some(function(e){return e.meta.requireAuth});a&&!r?n("login"):n()});var ie=se,oe=n("2f62");r["a"].use(oe["a"]);var ue=new oe["a"].Store({state:{},mutations:{},actions:{}}),ce={apiKey:"AIzaSyAyVxvSCT0xLU0_dalBR2Hf1MZ8In3cPiM",authDomain:"angelhack-1535781651257.firebaseapp.com",databaseURL:"https://angelhack-1535781651257.firebaseio.com",projectId:"angelhack-1535781651257",storageBucket:"angelhack-1535781651257.appspot.com",messagingSenderId:"162257166882"};u.a.initializeApp(ce),new r["a"]({router:ie,store:ue,render:function(e){return e(g)}}).$mount("#app")},c21b:function(e,t,n){}});
//# sourceMappingURL=app.c98ee4dc.js.map