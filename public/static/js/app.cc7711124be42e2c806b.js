webpackJsonp([0],{"1/oy":function(t,e){},"9M+g":function(t,e){},GfHa:function(t,e){},GiOW:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},Jp9H:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n=a("e6fC"),i=(a("Jmt5"),a("9M+g"),a("/ocq"));a("ytdl");const r=a("ytdl");var o={name:"App",data:()=>({reactive:!0,loggedIn:!1,loggingOut:!1,currentUser:"",currentUserName:"",currentUserPhoto:"http://getwallpapers.com/wallpaper/full/0/3/c/12613.jpg",currentUserOther:""}),components:{SignUp:u},mounted(){this.getUserInfo(),this.startTime()},methods:{async getUserInfo(){let t=r(document.cookie.split("=")[1]).id;""!==t&&(this.loggedIn=!0,this.$router.push("/profile")),await fetch(`http://localhost:3000/users/${t}`,{credentials:"include",method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(async t=>(this.currentUser=await t.json(),console.log("get one user store info:",this.currentUser),this.currentUserName=this.currentUser.username,this.currentUserPhoto=this.currentUser.photo,this.currentUser))},logOut(){console.log("I hit the logout button",document.cookie),this.loggingOut=!0,setTimeout(()=>{this.currentUserName="",this.currentUserPhoto="http://getwallpapers.com/wallpaper/full/0/3/c/12613.jpg",this.loggedIn=!1,this.loggingOut=!1,this.$router.push("/sign-up")},4e3)},startTime(){let t=new Date,e=t.getHours(),a=t.getMinutes(),s=t.getSeconds();a=this.checkTime(a),s=this.checkTime(s),document.getElementById("time").innerHTML=e+":"+a+":"+s;setTimeout(this.startTime,500)},checkTime:t=>(t<10&&(t="0"+t),t)}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[a("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[a("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),a("b-navbar-brand",{attrs:{to:"/sign-up"}},[t._v("StandUP!")]),t._v(" "),a("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[a("b-navbar-nav",[a("b-nav-item",{directives:[{name:"show",rawName:"v-show",value:t.loggedIn,expression:"loggedIn"}],attrs:{to:"/sprint"}},[t._v("Sprint")]),t._v(" "),a("b-nav-item",{directives:[{name:"show",rawName:"v-show",value:t.loggedIn,expression:"loggedIn"}],attrs:{to:"/profile"}},[t._v("Your Teams")])],1)],1),t._v(" "),a("div",{staticClass:"userInfoDisplay"},[t._v("\n       "+t._s(t.currentUserName.toUpperCase())+"\n      ")]),t._v(" "),a("b-navbar-nav",[a("b-nav-item",{directives:[{name:"show",rawName:"v-show",value:!t.loggedIn,expression:"!loggedIn"}],attrs:{to:"/sign-up"}},[t._v("Sign Up")]),t._v(" "),a("b-nav-item",{directives:[{name:"show",rawName:"v-show",value:!t.loggedIn,expression:"!loggedIn"}],staticClass:"loginBtn",attrs:{href:"http://localhost:3000/auth/github"}},[t._v("Login")]),t._v(" "),a("b-nav-item",{directives:[{name:"show",rawName:"v-show",value:t.loggedIn,expression:"loggedIn"}],on:{click:t.logOut}},[t._v("Logout")])],1),t._v(" "),a("img",{attrs:{src:t.currentUserPhoto,alt:"BV"}})],1)],1),t._v(" "),a("Spinner",{directives:[{name:"show",rawName:"v-show",value:t.loggingOut,expression:"loggingOut"}],attrs:{id:"pacman",name:"ball-scale-multiple",color:"#292b2c"}}),t._v(" "),a("main",{directives:[{name:"show",rawName:"v-show",value:!t.loggingOut,expression:"!loggingOut"}]},[a("SignUp",{directives:[{name:"show",rawName:"v-show",value:!t.loggedIn,expression:"!loggedIn"}]}),t._v(" "),a("router-view")],1),t._v(" "),a("footer",{staticClass:"footer"},[a("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[a("span",{attrs:{id:"cpy"}},[t._v("Stand Up! © 2018")]),t._v(" "),a("span",{attrs:{id:"time"}})])],1)],1)},staticRenderFns:[]};var d=a("VU/8")(o,l,!1,function(t){a("p8gI")},null,null).exports;let c=d.teamsData;console.log("data:",c);var m={name:"SignUp",data:()=>({}),methods:{sendToProfile(){this.$router.push("./profile")}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"signUp"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("h5",[t._v("Review each team member's progress")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("b-form",[a("b-button",{attrs:{id:"signUpBtn",href:"http://localhost:3000/auth/github",variant:"alert"},on:{click:t.sendToProfile}},[t._v("Sign In with Github\n      "),a("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png"}})])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Welcome to Stand Up! The "),e("b",[this._v("Daily Scrum")]),this._v(" app for remote teams")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",[this._v("Easily "),e("b",[this._v("create")]),this._v(" and "),e("b",[this._v("join")]),this._v(" sprint teams")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",[this._v("Address helps to achieve the current "),e("b",[this._v("sprint goal")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",[this._v("Access past records in the "),e("b",[this._v("current sprint")]),this._v(" for easy and qualitative "),e("b",[this._v("review")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",[e("b",[this._v("↓")]),this._v(" Solidify your status as an "),e("b",[this._v("Agile")]),this._v(" pro today "),e("b",[this._v("↓")])])}]};var u=a("VU/8")(m,p,!1,function(t){a("Jp9H")},"data-v-3b792dbf",null).exports,h=a("iclY"),v=a.n(h);s.a.component("Spinner",v.a);var g=this;const _=a("ytdl"),b={data:{teamToEdit:null,usersTeams:[],test:"test",memberTeams:[],errorMessage:""},methods:{async refreshUsersTeams(){this.loading=!0,this.usersTeams=await b.methods.getTeams(),console.log("profile.vue: getTeams: ",this.usersTeams),this.loading=!1},getTeams:async()=>fetch("http://localhost:3000/teams",{credentials:"include",method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(async t=>{console.log("response getTeams: ",t);const e=await t.json();return b.data.usersTeams=e,e}),getMemberTeams:async t=>fetch(`http://localhost:3000/user_teams/${t}`,{credentials:"include",method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(async t=>{return console.log("response getTeams: ",t),await t.json()}),createTeam:async t=>{console.log("createTeam: ",t);const e=_(document.cookie.split("=")[1]);console.log("tokenDecoded",e);const a={name:t,creator_id:e.id};await fetch(`http://localhost:3000/teams/${t}`,{credentials:"include",method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(async e=>{g.errorMessage="hi";const a=await e.json();return 200===e.status?(console.log("resJson: ",a),console.log("resJson.name: ",a.name),a.name):(401===e.status&&(b.data.errorMessage=`Cannot Create Team: ${t}. Please enter a different Team Name`),b.data.errorMessage)})},async deleteTeam(t){console.log("in the delete teamStore w/ id:",t),t=parseInt(t),await fetch(`http://localhost:3000/teams/${t}`,{credentials:"include",method:"DELETE"}).then(t=>{401===t.status&&alert(`Error: ${t.status}: ${t.statusText}`)})},async editTeam(t,e){const a={name:e,creator_id:_(document.cookie.split("=")[1]).id};await fetch(`http://localhost:3000/teams/${t}`,{credentials:"include",method:"PUT",body:JSON.stringify(a),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(t=>{401===t.status&&console.log(`Error: ${t.status}: ${t.statusText}`)})},getTeamMembers:async t=>fetch(`http://localhost:3000/teams_users/${t}`,{credentials:"include",method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(async t=>{console.log("response getTeamMembers: ",t.body);const e=await t.json();return console.log("resJson: ",e),e.body}),async joinTeam(t){const e={team_name:t};return console.log("in the joinTeam for team:",t),fetch("http://localhost:3000/teams_users",{credentials:"include",method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(e=>{401===e.status&&(b.data.errorMessage=`Invalid login attempt with name: ${t} Please try again.`),console.log("join a team res:",e)})}}};var f=b;const y={data:{teamName:"",sprintInfo:[1],sprintLength:0,sprintId:0},methods:{getSprint:async(t,e)=>fetch(`http://localhost:3000/sprints/${t}`,{credentials:"include",method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(async a=>{console.log("response: ",a);const s=await a.json();return console.log("resJson: ",s),console.log("resJson[0]: ",s[0]),y.data.sprintInfo.push(s[0]),y.data.teamName=e,y.data.sprintId=t,console.log("SprintStore.data.sprintInfo: ",y.data.sprintInfo),console.log("resJson: ",s),s}),async postSprint(t,e,a){console.log("in the sprintstore postSprint rte:",t,e,a);const s={sprint_length:e,sprint_goal:a};await fetch(`http://localhost:3000/sprints/${t}`,{credentials:"include",method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(async t=>{console.log(t)})}}};var T=y;const S=a("ytdl");var w={name:"Profile",data:()=>({reactive:!0,rangeValue:5,rangeGoal:"",sprintNotes:"",isSeen:!0,currentlyLoading:!1,usersTeams:[],memberTeams:[],model:{},teamName:"",selected:null,editModalInput:"",loggedIn:!0,joinTeamName:"",current_user_id:0,errorMessage:"",isWarning:!1,lastCreatedTeamId:1}),mounted(){document.cookie?(this.currentlyLoading=!1,this.current_user_id=S(document.cookie.split("=")[1]).id,this.refreshUsersTeams()):this.currentlyLoading=!0},methods:{async refreshUsersTeams(){this.usersTeams=[],this.memberTeams=[],(this.currentlyLoading=!1)&&setTimeout(()=>this.currentlyLoading=!0,3e3),this.currentlyLoading=!1;let t=await f.methods.getTeams();await t.map(e=>{if(e.creator_id===S(document.cookie.split("=")[1]).id)return e.name[0].toUpperCase(),e.name.substring(1),this.loggedIn=!0,this.isSeen=!1,this.currentlyLoading=!1,this.lastCreatedTeamId=t[t.length-1].id,this.usersTeams.push(e)}),(await f.methods.getMemberTeams(this.current_user_id)).forEach(t=>{t.creator_id!==this.current_user_id&&this.memberTeams.push(t)}),this.errorMessage=f.data.errorMessage,console.log("this.errorMessage",this.errorMessage),""!==this.errorMessage&&(this.isWarning=!0,setTimeout(()=>this.isWarning=!1,5e3))},async addTeam(t){return t.preventDefault(),await f.methods.createTeam(this.teamName),this.refreshUsersTeams(),this.openModal(this.teamName),this.teamName="",t.target.reset()},async goToSprint(t,e){console.log("Go to sprint id: ",t),await T.methods.getSprint(t,e),this.$router.push("/sprint")},deleteTeam(t){this.usersTeams.map(async e=>{if(e.name===t.toLowerCase())return await f.methods.deleteTeam(e.id),this.refreshUsersTeams()})},editTeam(){this.usersTeams.map(async t=>{if(t.name===this.teamName.toLowerCase())return await f.methods.editTeam(t.id,this.editModalInput.toLowerCase()),this.editModalInput="",this.teamName="",this.hideModal(),this.refreshUsersTeams()})},joinTeam(t){return f.methods.joinTeam(this.joinTeamName),this.refreshUsersTeams()},showModal(t){this.teamName=t,console.log("modal name:",t),this.$refs.editModal.show()},hideModal(){this.teamName="",this.$refs.editModal.hide()},hideSprintModal(){this.$refs.postSprintModal.hide()},openModal(t){this.$refs.postSprintModal.show()},postSprint(t,e,a,s){a||alert("Please enter a Sprint Goal for your team's betterment"),console.log("in the postSprint in the sprint component:",this.lastCreatedTeamId,e,a),T.methods.postSprint(this.lastCreatedTeamId,e,a,this.sprintNotes),this.hideSprintModal(),this.rangeValue=5,this.rangeGoal="",this.sprintNotes=""}},beforeDestroy(){this.rangeValue=5,this.rangeGoal="",this.sprintNotes="",this.lastCreatedTeamId=1},components:{SignUp:u}},I={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("SignUp",{directives:[{name:"show",rawName:"v-show",value:t.isSeen&&!t.currentlyLoading&&!t.loggedIn,expression:"isSeen && !currentlyLoading && !loggedIn"}]}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isSeen||!t.currentlyLoading&&t.loggedIn,expression:"!isSeen || !currentlyLoading && loggedIn"}],staticClass:"profile"},[a("Spinner",{directives:[{name:"show",rawName:"v-show",value:t.currentlyLoading,expression:"currentlyLoading"}],attrs:{id:"pacman",name:"ball-scale-multiple",color:"#292b2c"}}),t._v(" "),a("b-alert",{directives:[{name:"show",rawName:"v-show",value:t.isWarning,expression:"isWarning"}],attrs:{id:"alert",show:"",dismissible:"",fade:"",variant:"warning"}},[t._v(t._s(this.errorMessage))]),t._v(" "),a("b-container",{staticClass:"bv-example-row"},[a("b-row",[a("b-col",[a("h4",[t._v("Create a Team")]),t._v(" "),a("div",{staticClass:"teamFields"},[a("b-form",{attrs:{info:"info",inline:""},on:{submit:t.addTeam}},[a("label",{attrs:{for:"teamName",value:"name"}}),t._v(" "),a("b-input",{attrs:{id:"inputLive",name:"teamName",placeholder:"Team Name"},model:{value:t.teamName,callback:function(e){t.teamName=e},expression:"teamName"}},[t._v("Team\n              ")]),t._v(" "),a("b-button",{staticClass:"teamBtn",attrs:{type:"submit",variant:"dark"}},[t._v("+")]),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"inputLiveFeedback"}},[t._v("\n                 Enter at least 4 letters\n              ")])],1)],1)]),t._v(" "),a("b-col",[a("h4",[t._v("Creator")]),t._v(" "),a("div",{staticClass:"teamsList"},t._l(this.usersTeams,function(e){return a("b-list-group",{key:e.id,staticClass:"yourTeamsGroup",attrs:{"track-by":"$index"}},[a("b-list-group-item",{staticClass:"yourTeamsItem",attrs:{button:""},on:{click:function(a){t.goToSprint(e.id,e.name)}}},[t._v(t._s(e.name[0].toUpperCase()+e.name.substring(1))+"\n\n              ")]),t._v(" "),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"teamEditDel",attrs:{title:"Edit",id:"edit",variant:"outline-dark"},on:{click:function(a){t.showModal(e.name)}}},[t._v("✎")]),t._v(" "),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"teamEditDel",attrs:{title:"Delete",variant:"outline-dark"},on:{click:function(a){t.deleteTeam(e.name)}}},[t._v("🗑")])],1)}),1)]),t._v(" "),a("b-col",[a("h4",[t._v("Member")]),t._v(" "),a("div",{staticClass:"teamsList"},t._l(this.memberTeams,function(e){return a("b-list-group",{key:e.id,staticClass:"yourTeamsGroup",attrs:{"track-by":"$index"}},[a("b-list-group-item",{staticClass:"yourTeamsItem",attrs:{button:""},on:{click:function(a){t.goToSprint(e.id,e.name)}}},[t._v("\n                "+t._s(e.name[0].toUpperCase()+e.name.substring(1))+"\n              ")])],1)}),1)])],1),t._v(" "),a("hr"),t._v(" "),a("b-row",[a("b-col",[a("b-alert",{attrs:{hide:"true",variant:"warning"}},[t._v("Please enter a longer team name")]),t._v(" "),a("div",{staticClass:"teamActions"},[a("h4",[t._v("Join a Team")]),t._v(" "),a("div",{staticClass:"joinTeam"},[a("b-form",{attrs:{inline:""}},[a("label",{attrs:{for:"Team Name",value:"name"}}),t._v(" "),a("b-input",{attrs:{placeholder:"Team Name"},model:{value:t.joinTeamName,callback:function(e){t.joinTeamName=e},expression:"joinTeamName"}},[t._v("Team")]),t._v(" "),a("b-button",{staticClass:"teamBtn",attrs:{variant:"dark"},on:{click:function(e){t.joinTeam(t.joinTeamName)}}},[t._v("+")])],1)],1)])],1)],1)],1),t._v(" "),a("b-modal",{ref:"editModal",attrs:{"hide-footer":"",title:"Edit Team Name"}},[a("div",{staticClass:"d-block text-center"},[t._v(t._s(t.teamName.toUpperCase(1))+"\n       "),a("hr"),t._v(" "),a("b-input",{attrs:{id:"modalInput",type:"text"},model:{value:t.editModalInput,callback:function(e){t.editModalInput=e},expression:"editModalInput"}})],1),t._v(" "),a("b-btn",{staticClass:"mt-3",attrs:{variant:"outline-dark",block:""},on:{click:function(e){t.hideModal&&t.editTeam(t.teamName)}}},[t._v("Edit")])],1),t._v(" "),a("b-modal",{directives:[{name:"show",rawName:"v-show",value:!t.isWarning,expression:"!isWarning"}],ref:"postSprintModal",attrs:{id:"postSprintModal","hide-footer":"",variant:"dark",title:"Set First Sprint for New Team",effect:"fade/zoom"}},[a("div",[t._v("\n          Sprint Length: "+t._s(t.rangeValue)+" Stand Ups\n          "),a("b-form-input",{attrs:{type:"range",variant:"info",min:"5",max:"10",step:"1"},model:{value:t.rangeValue,callback:function(e){t.rangeValue=e},expression:"rangeValue"}})],1),t._v(" "),a("hr"),t._v(" "),a("div",[t._v("Sprint Goal")]),t._v(" "),a("b-form-input",{attrs:{type:"text"},model:{value:t.rangeGoal,callback:function(e){t.rangeGoal=e},expression:"rangeGoal"}}),t._v(" "),a("hr"),t._v(" "),a("div",[t._v("Sprint Notes")]),t._v(" "),a("b-form-input",{attrs:{type:"text"},model:{value:t.sprintNotes,callback:function(e){t.sprintNotes=e},expression:"sprintNotes"}}),t._v(" "),a("br"),t._v(" "),a("b-button",{attrs:{variant:"outline-info text-dark",value:"submit"},on:{click:function(e){t.postSprint(3,+t.rangeValue,t.rangeGoal,t.sprintNotes)}}},[t._v(t._s(t.teamName.toUpperCase()+t.teamName.substring(1))+"...Get Agile!")])],1)],1)],1)},staticRenderFns:[]};var N=a("VU/8")(w,I,!1,function(t){a("Qru5")},"data-v-1a054d24",null).exports;a("ytdl");const C={data:{selectedStandupDay:"",allStandupsForThisSprint:[]},methods:{async getSprintInfo(t){await fetch(`http://localhost:3000/standUps/${t}`,{credentials:"include",method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(async t=>{const e=await t.json();return console.log("get one user store info:",e),e})},async getStandups(t){await fetch(`http://localhost:3000/standUps/${t}`,{credentials:"include",method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(async t=>{const e=await t.json();return console.log("getStandups response",e),C.data.allStandupsForThisSprint.push(e),e})}}};var x=C,U={name:"CalendarView",data:()=>({reactive:!0,teamName:"test",sprintInfo:"",selected:"radio1",curentDaily:0,sprint_goal:"Please define me",sprintLength:5}),async mounted(){this.sprintInfo=T.data.sprintInfo,this.teamName=T.data.teamName,this.sprint_goal=this.sprintInfo[1].sprint_goal,this.sprintLength=this.sprintInfo[1].sprint_length,console.log("this.sprintInfo: ",this.sprintInfo),console.log("this.teamName: ",this.teamName)},methods:{loadSprintDaily(t){console.log("loadSprintDaily:",this.sprintInfo[0],t)}}},k={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"calendar"},[a("p",{staticClass:"team-header"},[t._v("Current Sprint: "),a("em",[t._v(t._s(t.teamName[0].toUpperCase()+t.teamName.substring(1)))])]),t._v(" "),a("div",[a("b-form-group",{attrs:{label:""}},t._l(this.sprintLength,function(e){return a("b-button",{key:e,staticClass:"sprintDayButtons",attrs:{variant:"outline-dark","track-by":"$index"},on:{click:function(a){t.loadSprintDaily(e)}}},[t._v("Stand Up "+t._s(e)+"\n    ")])}),1)],1),t._v(" "),a("div",{staticClass:"sprintGoal"},[t._v("\n    Goal for this Sprint: "+t._s(t.sprint_goal)+"\n  ")])])},staticRenderFns:[]};var j=a("VU/8")(U,k,!1,function(t){a("GiOW")},"data-v-083b32b9",null).exports,M={name:"Sprint",data:()=>({selectedStandupDay:"",notLoading:!1,sprintLength:5,member1YesterdayText:"",member1TodayText:"",member1HelpsText:"",sprintGoalText:"",sprint_notes:"",teamName:"",sprintInfo:"",currentSprintId:0,notes:"",standupsDay1:[],standupsDay2:[],yourStandUpSubmitted:!1,yourStandUpYesterday:"",yourStandUpToday:"",yourStandUpHelps:""}),async mounted(){console.log("SprintStore.data.sprintInfo: ",T.data.sprintInfo),this.notLoading=!0,setTimeout(()=>{this.notLoading=!1},2e3),this.sprintInfo=T.data.sprintInfo,this.sprint_notes=this.sprintInfo[1].sprint_notes,this.teamName=await T.data.teamName,this.currentSprintId=await T.data.sprintId,this.currentSprintInfo(this.currentSprintId),x.methods.getStandups(this.sprintInfo[1].id);let t=[];x.data.allStandupsForThisSprint[0].map(e=>{1===e.dayInSprint&&t.push(e)}),this.standupsDay1.push(t)},methods:{async teamsUsersRoute(){let t=await fetch("http://localhost:3000/teams_users",{credentials:"include"});console.log("the button is go:",t,t.status,t.data)},async currentSprintInfo(){let t=await x.methods.getSprintInfo(this.currentSprintId);console.log("response to currentSprintIno in sprint vue:",t)},addTeamMember(t){console.log("add team member function");document.getElementById("sprintCardParent")},submitYourStandUp(){this.yourStandUpSubmitted=!0}},components:{CalendarView:j}},L={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("Spinner",{directives:[{name:"show",rawName:"v-show",value:t.notLoading,expression:"notLoading"}],attrs:{id:"pacman",name:"ball-scale-multiple",color:"#292b2c"}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.notLoading,expression:"!notLoading"}],staticClass:"sprint"},[a("CalendarView",{staticClass:"cal",attrs:{sprintLength:t.sprintLength}}),t._v(" "),a("div",{staticClass:"sprintNotes"},[t._v("Sprint Notes:\n      "),a("b-form-textarea",{attrs:{type:"text",value:"sprint_notes",rows:3},model:{value:t.sprint_notes,callback:function(e){t.sprint_notes=e},expression:"sprint_notes"}}),t._v(" "),a("b-button",{attrs:{id:"sprintCardUpBtn",variant:"outline-dark"}},[t._v("✎ Notes")])],1),t._v(" "),t._l(t.standupsDay1[0],function(e){return a("div",{staticClass:"sprintCardDiv"},[a("b-card",{staticClass:"sprintDailyCard",staticStyle:{"max-width":"33%"},attrs:{"no-body":"","img-src":"http://www.clker.com/cliparts/l/w/w/n/7/c/purple-square-button-md.png","img-alt":"Image","img-top":""}},[a("h4",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(e.username))]),t._v(" "),a("b-list-group",{attrs:{flush:""}},[a("b-list-group-item",[a("br"),t._v("\n          Yesterday:\n          "),e.yesterday?a("p",[t._v(t._s(e.yesterday))]):a("b-form-textarea",{staticClass:"memberInputField",attrs:{type:"textarea"},model:{value:t.member1YesterdayText,callback:function(e){t.member1YesterdayText=e},expression:"member1YesterdayText"}})],1),t._v(" "),a("b-list-group-item",[a("br"),t._v("Today:\n          "),e.today?a("p",[t._v(t._s(e.today))]):a("b-form-textarea",{staticClass:"memberInputField",attrs:{type:"textarea"},model:{value:t.member1TodayText,callback:function(e){t.member1TodayText=e},expression:"member1TodayText"}})],1),t._v(" "),a("b-list-group-item",[a("br"),t._v("Helps:\n          "),e.helps?a("p",[t._v(t._s(e.helps))]):a("b-form-textarea",{staticClass:"memberInputField",attrs:{type:"textarea"},model:{value:t.member1HelpsText,callback:function(e){t.member1HelpsText=e},expression:"member1HelpsText"}})],1),t._v(" "),a("b-list-group-item",[a("b-button",[t._v("Submit Stand Up")]),t._v(" "),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"teamEditDel",attrs:{title:"Edit",id:"edit",variant:"outline-dark"},on:{click:function(a){t.showModal(e.id)}}},[t._v("✎")])],1)],1)],1)],1)}),t._v(" "),a("div",{staticClass:"yourCard"},[a("b-card",{staticClass:"sprintDailyCard",staticStyle:{"max-width":"33%"},attrs:{"no-body":"","img-src":"http://www.clker.com/cliparts/l/w/w/n/7/c/purple-square-button-md.png","img-alt":"Image","img-top":""}},[a("h4",{attrs:{slot:"header"},slot:"header"},[t._v("\n       You")]),t._v(" "),a("b-list-group",{attrs:{flush:""}},[a("b-list-group-item",[a("br"),t._v("\n         Yesterday:\n         "),t.yourStandUpSubmitted?a("p",[t._v(t._s(t.yourStandUpYesterday))]):a("b-form-textarea",{staticClass:"memberInputField",attrs:{type:"textarea"},model:{value:t.yourStandUpYesterday,callback:function(e){t.yourStandUpYesterday=e},expression:"yourStandUpYesterday"}})],1),t._v(" "),a("b-list-group-item",[a("br"),t._v("Today:\n        "),t.yourStandUpSubmitted?a("p",[t._v(t._s(t.yourStandUpToday))]):a("b-form-textarea",{staticClass:"memberInputField",attrs:{type:"textarea"},model:{value:t.yourStandUpToday,callback:function(e){t.yourStandUpToday=e},expression:"yourStandUpToday"}})],1),t._v(" "),a("b-list-group-item",[a("br"),t._v("Helps:\n           "),t.yourStandUpSubmitted?a("p",[t._v(t._s(t.yourStandUpHelps))]):a("b-form-textarea",{staticClass:"memberInputField",attrs:{type:"textarea"},model:{value:t.yourStandUpHelps,callback:function(e){t.yourStandUpHelps=e},expression:"yourStandUpHelps"}})],1),t._v(" "),a("b-list-group-item",[a("b-button",{on:{click:t.submitYourStandUp}},[t._v("Submit Stand Up")]),t._v(" "),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"teamEditDel",attrs:{title:"Edit",id:"edit",variant:"outline-dark"}},[t._v("✎")])],1)],1)],1)],1)],2)],1)},staticRenderFns:[]};var E=a("VU/8")(M,L,!1,function(t){a("xxH6")},"data-v-718ec31a",null).exports,$={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notFound"},[e("p",[this._v("\n    404 - Page Not Found\n  ")]),this._v(" "),e("b-button",{attrs:{variant:"dark",href:"/profile"}},[this._v("Back to Profile")])],1)},staticRenderFns:[]};var D=a("VU/8")({name:"NotFound"},$,!1,function(t){a("oW82")},"data-v-3ee37a8a",null).exports;s.a.use(i.a);var G=new i.a({mode:"history",routes:[{path:"/",name:"Profile",component:N},{path:"*",name:"NotFound",component:D},{path:"/sign-up",name:"SignUp",component:u},{path:"/profile",name:"Profile",component:N},{path:"/sprint",name:"Sprint",component:E}]});s.a.use(n.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:G,components:{App:d},template:"<App/>",methods:{}})},Qru5:function(t,e){},oW82:function(t,e){},p8gI:function(t,e){},xxH6:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.cc7711124be42e2c806b.js.map