<template>
  <div id="app">
    <router-view
      :time="time"
      :points="points"
      :skip="skip"
      :team="team"
      :team2="team2"
      :team3="team3"
      :team4="team4"
      @addTeam="updateName($event)"
      @addTeam2="updateName2($event)"
      @addTeam3="updateName3($event)"
      @addTeam4="updateName4($event)"
      :teamScore="teamScore"
      :team2Score="team2Score"
      :team3Score="team3Score"
      :team4Score="team4Score"
      @changeTime="updateTime($event)"
      @changeSkip="updateSkip($event)"
      @changePoints="updatePoints($event)"
      @removeTeam3="removedTeam3($event)"
      @removeTeam4="removedTeam4($event)"
      :slowka="slowka"
      :logo="logo"
      :itdesk="itdesk"
    ></router-view>
    
   
  </div>
</template>


<script>
import slowka from "./csvjson.json";
import logo from "./assets/logo.jpg";
import itdesk from "./assets/logo-white.png";

export default {
  data() {
    return {
      time: 90,
      skip: 2,
      points: 20,
      team: "",
      team2: "",
      team3: "",
      team4: "",
      teamScore: 0,
      team2Score: 0,
      team3Score: 0,
      team4Score: 0,
      slowka,
      logo,
      itdesk,
      modal:false
    };
  },
  methods: {
    removedTeam3(rTeam3) {
      this.team3 = rTeam3;
    },
    removedTeam4(rTeam4) {
      this.team4 = rTeam4;
    },
    updateName(updatedName) {
      this.team = updatedName;
    },
    updateName2(updatedName2) {
      this.team2 = updatedName2;
    },
    updateName3(updatedName3) {
      this.team3 = updatedName3;
    },
    updateName4(updatedName4) {
      this.team4 = updatedName4;
    },
    updateTime(updatedTime) {
      this.time = updatedTime;
    },
    updateSkip(updatedSkip) {
      this.skip = updatedSkip;
    },
    updatePoints(updatedPoints) {
      this.points = updatedPoints;
    }
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/css?family=Raleway");
@import url("https://fonts.googleapis.com/css?family=Shadows+Into+Light");
* {
  font-family: "Raleway", sans-serif;
  box-sizing: border-box;
}
body {
  background-color: #242424;
  overscroll-behavior-y: contain;

}

</style>
