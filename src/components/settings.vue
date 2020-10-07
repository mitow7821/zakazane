<template>
  <div>
    <div>
      <div class="container">
        <div class="logo">
          <h2>ZAKAZANE SŁOWA
            <br>dla automatyków
          </h2>
          <p class="playWith">graj razem z</p>
          <a href="https://www.turck.com/">
            <img :src="this.logo">
          </a>
        </div>
        <div class="settings">
          <div class="select">
            <button class="setting">
              Czas gry
              <select v-model.number="time" @change="changeTime(time)">
                <option class="disabled" disabled>- - -</option>
                <option>90</option>
                <option>100</option>
                <option>110</option>
                <option>120</option>
              </select>
            </button>
          </div>

          <div class="select">
            <button class="setting">
              Pominięcia
              <select v-model.number="skip" @change="changeSkip(skip)">
                <option class="disabled" disabled>- - -</option>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </button>
          </div>

          <div class="select">
            <button class="setting">
              Do ilu
              <select v-model.number="points" @change="changePoints(points)">
                <option class="disabled" disabled>- - -</option>
                <option>20</option>
                <option>25</option>
                <option>30</option>
                <option>35</option>
                <option>40</option>
              </select>
            </button>
          </div>

          <div class="teamInput">
            <input type="text" placeholder="Drużyna 1" v-model="team" @change="addTeam(team)">
          </div>

          <div class="teamInput">
            <input type="text" placeholder="Drużyna 2" v-model="team2" @change="addTeam2(team2)">
          </div>

          <div v-show="teamVisibility[1]" class="newTeams">
            <input
              class="newTeamsInput"
              type="text"
              placeholder="Drużyna 3"
              v-model="team3"
              @change="addTeam3(team3)"
            >
            <button class="removeTeam" @click="removeTeam3(team3)" v-show="rbtn">X</button>
          </div>

          <div v-show="teamVisibility[2]" class="newTeams">
            <input
              class="newTeamsInput"
              type="text"
              placeholder="Drużyna 4"
              v-model="team4"
              @change="addTeam4(team4)"
            >
            <button class="removeTeam" @click="removeTeam4(team4)">X</button>
          </div>

          <div class="select">
            <button class="addteam" @click="addTeams" v-show="showAdd">Dodaj drużynę</button>
          </div>

          <router-link to="/game">
            <transition name="fade">
              <button v-show="showButton" class="play">Rozpocznij</button>
            </transition>
          </router-link>
        </div>
        <div class="logo">
          <p>z podziękowaniami za współpracę</p>
          <img class="itdesk" :src="this.itdesk">
        </div>
      </div>
      <router-link to="/zasady">
        <button class="help" title="Zasady" @click="modal=true">?</button>
        <div id="myModal" class="modal" v-show="modal">
          <div class="modal-content">
            <span class="close" @click="modal=false">&times;</span>
            <p>Some text in the Modal..</p>
          </div>
        </div>
      </router-link>
    </div>
    <footer>
      <a href="https://grupa.itdesk.eu">2018 &copy; Progressive Web Applications coded by itDesk.eu</a>
    </footer>
  </div>
</template>


<script>
export default {
  props: [
    "time",
    "points",
    "skip",
    "team",
    "team2",
    "team3",
    "team4",
    "logo",
    "itdesk"
  ],
  data() {
    return {
      showButton: false,
      showAdd: true,
      rbtn: true,
      teamVisibility: {
        1: false,
        2: false
      },
      licznik: 1,
      modal: false
    };
  },
  methods: {
    addTeam() {
      this.$emit("addTeam", this.team);
    },
    addTeam2() {
      this.$emit("addTeam2", this.team2);
    },
    addTeam3() {
      this.$emit("addTeam3", this.team3);
    },
    addTeam4() {
      this.$emit("addTeam4", this.team4);
    },
    changeTime() {
      this.$emit("changeTime", this.time);
    },
    changeSkip() {
      this.$emit("changeSkip", this.skip);
    },
    changePoints() {
      this.$emit("changePoints", this.points);
    },
    addTeams() {
      this.teamVisibility[this.licznik] = true;
      if (this.licznik == 2) {
        (this.rbtn = false), (this.showAdd = false);
      }
      this.licznik++;
    },
    removeTeam3() {
      this.$emit("removeTeam3", "");
      this.team3 = "";
      this.teamVisibility[1] = false;
      this.showAdd = true;
      this.licznik = 1;
    },
    removeTeam4() {
      this.$emit("removeTeam4", "");
      this.team4 = "";
      this.teamVisibility[2] = false;
      this.showAdd = true;
      this.licznik = 2;
      this.rbtn = true;
    }
  },
  updated() {
    if (this.team != "" && this.team2 != "") {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  },
  created() {
    if (this.team != "" && this.team2 != "") {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Kalam");
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  font-size: 2.5vh;
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.help {
  position: absolute;
  top: 20vh;
  right: 0;
  height: 7vh;
  width: 7vh;
  background-color: #ffca01;
  font-size: 4vh;
  color: #212121;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
}
footer {
  color: white;
  font-size: 1.8vh;
  width: 99vw;
  height: 3vh;
  text-align: center;
}
footer > a {
  color: #fff;
  text-decoration: none;
}
.settings {
  display: grid;
  margin: 2.5vh 0 1.5vh 0;
}

.fade-enter-active {
  transition: opacity 1.5s;
}
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.container {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;
  margin-top: 0.8vh;
}
.logo > h2 {
  margin: 0;
  font-size: 3.4vh;
  color: #ffca01;
}
.playWith {
  padding: 1.5vh 0;
}
.logo > p {
  margin: 0;
  font-size: 2.5vh;
  font-family: "Kalam", cursive;
}
.logo > a > img {
  width: calc(20vh + 3vw);
}
.itdesk {
  width: calc(20vh + 3vw);
}
.select {
  display: flex;
}
.addteam {
  background-color: Transparent;
  background-repeat: no-repeat;
  border: 1px #46a3ff solid;
  background-color: rgba(70, 163, 255, 0.02);
  overflow: hidden;
  border-radius: 42px;
  color: #46a3ff;
  outline: none;
  width: calc(25vh + 15vw);
  height: calc(4vh + 1vw);
  margin: 1vh 0 0vh 0.5vh;
  padding: 0 2vh 0 2vh;
  text-align: center;
}
.addteam:hover {
  background-color: rgba(70, 163, 255, 0.05);
}
.setting {
  background-color: Transparent;
  background-repeat: no-repeat;
  border: 1px white solid;
  overflow: hidden;
  border-radius: 42px;
  color: #fff;
  outline: none;
  width: calc(25vh + 15vw);
  height: calc(4vh + 1vw);
  margin: 0.5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2vh 0 2vh;
}

.newTeams {
  background-color: Transparent;
  background-repeat: no-repeat;
  border: 1px #46a3ff solid;
  overflow: hidden;
  border-radius: 42px;
  outline: none;
  width: calc(25vh + 15vw);
  height: calc(4vh + 1vw);
  margin: 1vh 0 0vh 0.5vh;
  display: flex;
  justify-content: space-between;
  padding: 0 2vh 0 0;
}
select {
  background-color: #242424;
  color: #fff;
  border: none;
  outline: none;
}
.teamInput {
  background-color: Transparent;
  background-repeat: no-repeat;
  border: 1px #46a3ff solid;
  overflow: hidden;
  outline: none;
  border-radius: 42px;
  width: calc(25vh + 15vw);
  height: calc(4vh + 1vw);
  margin: 1vh 0 0vh 0.5vh;
}
.teamInput > input {
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  color: #fff;
  outline: none;
  width: calc(25vh + 15vw);
  height: calc(4vh + 1vw);
  padding: 0 2vh 0 2vh;
}
.newTeamsInput {
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  overflow: hidden;
  border-radius: 42px;
  color: #fff;
  outline: none;
  width: calc(25vh + 15vw);
  height: calc(4vh + 1vw);
  padding: 0 2vh 0 2vh;
}
.removeTeam {
  width: 5vh;
  height: 5;
  font-size: 2.5vh;
  font-weight: bold;
  color: #c13232;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  outline: none;
}
.play {
  background-color: Transparent;
  background-repeat: no-repeat;
  border: 1px #ffca01 solid;
  background-color: rgba(255, 174, 25, 0.02);
  cursor: pointer;
  overflow: hidden;
  border-radius: 42px;
  outline: none;
  width: calc(25vh + 15vw);
  height: calc(4vh + 1vw);
  margin: 1.5vh 0.5vh 0 0.5vh;
  color: #ffca01;
}
.play:hover {
  background-color: rgba(255, 174, 25, 0.05);
}
.disabled {
  display: none;
}
</style>
