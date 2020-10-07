<template>
  <div>
    <div class="container">
      <div class="mainField" v-show="game">
        <div class="top">
          <div class="team">{{ randomTeam[this.i] }}</div>
          <div class="logo">{{ time }}</div>
          <div class="score">Wynik: {{ score }}</div>
        </div>
        <div class="grid">
          <button class="removePoint" @click="removePoint()">-</button>
          <div class="main">
            <p>{{ this.main }}</p>
          </div>
          <button class="addPoint" @click="addPoint()">+</button>
          <div class="words">
            <ul>
              <li v-for="value in this.arr.slice(0, 6)" :key="value.id">
                {{ value }}
              </li>
            </ul>
          </div>

          <button class="skip" @click="skipClick" :disabled="skipDisabled">
            Pomiń ({{ skip }})
          </button>
        </div>
      </div>

      <div class="startGame" v-show="start">
        <div class="logo2">Zakazane słówka</div>
        <div class="start">
          Zaczyna: {{ this.randomTeam[0] }}
          <br />
          <br />Kliknij GRAJ, aby rozpocząć!
        </div>
        <button
          class="graj"
          @click="
            game = true;
            start = false;
            startGameF();
          "
        >
          GRAJ
        </button>
      </div>

      <div class="timeout" v-show="timeout">
        <div class="punkty">
          Drużyna {{ this.randomTeam[0] }} zdobyła
          <br />
          {{ teamScore }} punktów
        </div>
        <div class="punkty"></div>
        <div class="kolej">
          <p>
            Drużyna {{ this.randomTeam[1] }}: {{ team2Score }} punktów
            <br />
          </p>
          <p v-show="showTeam3">
            Drużyna {{ this.randomTeam[2] }}: {{ team3Score }} punktów
            <br />
          </p>
          <p v-show="showTeam4">
            Drużyna {{ this.randomTeam[3] }}: {{ team4Score }} punktów
            <br />
          </p>
          <br />
          Kolej na: {{ this.randomTeam[1] }} <br />Kliknij GRAJ, aby rozpocząć!
        </div>
        <button
          class="graj"
          @click="
            game = true;
            timeout = false;
            timeoutF();
          "
        >
          GRAJ
        </button>
      </div>

      <div class="timeout" v-show="equalTwo">
        <div class="punkty">
          Drużyna {{ this.randomTeam[1] }} zdobyła
          <br />
          {{ team2Score }} punktów
        </div>
        <div class="punkty"></div>
        <div class="kolej">
          <p>
            Drużyna {{ this.randomTeam[0] }}: {{ teamScore }} punktów
            <br />
          </p>
          <br />
          Kolej na: {{ this.randomTeam[0] }} <br />Kliknij GRAJ, aby rozpocząć!
        </div>
        <button
          class="graj"
          @click="
            game = true;
            equalTwo = false;
            equalTwoF();
          "
        >
          GRAJ
        </button>
      </div>

      <div class="timeout" v-show="equalThree">
        <div class="punkty">
          Drużyna {{ this.randomTeam[1] }} zdobyła
          <br />
          {{ team2Score }} punktów
        </div>
        <div class="punkty"></div>
        <div class="kolej">
          <p>
            Drużyna {{ this.randomTeam[0] }}: {{ teamScore }} punktów
            <br />
          </p>
          <p v-show="showTeam3">
            Drużyna {{ this.randomTeam[2] }}: {{ team3Score }} punktów
            <br />
          </p>
          <p v-show="showTeam4">
            Drużyna {{ this.randomTeam[3] }}: {{ team4Score }} punktów
            <br />
          </p>
          <br />
          Kolej na: {{ this.randomTeam[2] }} <br />Kliknij GRAJ, aby rozpocząć!
        </div>
        <button
          class="graj"
          @click="
            game = true;
            equalThree = false;
            equalThreeF();
          "
        >
          GRAJ
        </button>
      </div>

      <div class="timeout" v-show="equalFour">
        <div class="punkty">
          Drużyna {{ this.randomTeam[2] }} zdobyła
          <br />
          {{ team3Score }} punktów
        </div>
        <div class="punkty"></div>
        <div class="kolej">
          <p>
            Drużyna {{ this.randomTeam[0] }}: {{ teamScore }} punktów
            <br />
          </p>
          <p>
            Drużyna {{ this.randomTeam[1] }}: {{ team2Score }} punktów
            <br />
          </p>
          <p v-show="showTeam4">
            Drużyna {{ this.randomTeam[3] }}: {{ team4Score }} punktów
            <br />
          </p>
          <br />
          Kolej na: {{ this.randomTeam[this.i] }} <br />Kliknij GRAJ, aby
          rozpocząć!
        </div>
        <button
          class="graj"
          @click="
            game = true;
            equalFour = false;
            equalFourF();
          "
        >
          GRAJ
        </button>
      </div>

      <div class="timeout" v-show="last">
        <div class="punkty">
          Drużyna {{ this.randomTeam[3] }} zdobyła
          <br />
          {{ team4Score }} punktów
        </div>
        <div class="punkty"></div>
        <div class="kolej">
          <p>
            Drużyna {{ this.randomTeam[0] }}: {{ teamScore }} punktów
            <br />
          </p>
          <p>
            Drużyna {{ this.randomTeam[1] }}: {{ team2Score }} punktów
            <br />
          </p>
          <p v-show="showTeam3">
            Drużyna {{ this.randomTeam[2] }}: {{ team3Score }} punktów
            <br />
          </p>
          <br />
          Kolej na: {{ this.randomTeam[0] }} <br />Kliknij GRAJ, aby rozpocząć!
        </div>
        <button
          class="graj"
          @click="
            game = true;
            last = false;
            lastF();
          "
        >
          GRAJ
        </button>
      </div>

      <div class="gameOver" v-show="gameOver">
        <div style="font-size: 4.9vh">Koniec gry</div>
        <div class="wszystkiepunkty">
          <p>Drużyna {{ this.randomTeam[0] }}: {{ teamScore }} pkt</p>
          <p>Drużyna {{ this.randomTeam[1] }}: {{ team2Score }} pkt</p>
          <p v-show="showTeam3">
            Drużyna {{ this.randomTeam[2] }}: {{ team3Score }} pkt
          </p>
          <p v-show="showTeam4">
            Drużyna {{ this.randomTeam[3] }}: {{ team4Score }} pkt
          </p>
        </div>
        <router-link to="/">
          <button class="again" @click="gameOver = false">
            Zagraj ponownie
          </button>
        </router-link>
      </div>
    </div>

    <footer>
      <a href="https://grupa.itdesk.eu"
        >2018 &copy; Progressive Web Applications coded by itDesk.eu</a
      >
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
    "teamScore",
    "team2Score",
    "team3Score",
    "team4Score",
    "slowka",
    "logo",
  ],
  data() {
    return {
      skipDisabled: false,
      teams: [this.team, this.team2],
      randomTeam: "",
      game: false,
      interval: "",
      score: 0,
      i: 0,
      w: 0,
      defaultTime: this.time,
      words: {},
      main: {},
      arr: [],
      showTeam3: false,
      showTeam4: false,
      start: true,
      timeout: false,
      equalTwo: false,
      equalThree: false,
      equalFour: false,
      last: false,
      gameOver: false,
    };
  },
  methods: {
    startGameF() {
      this.interval = setInterval(() => {
        this.time -= 1;
        if (this.time == 0) {
          clearInterval(this.interval);
          this.w++;
          this.main = this.slowka[this.w].main;
          this.words = this.slowka[this.w];
          this.arr = Array.from(Object.keys(this.words), (k) => this.words[k]);

          this.game = false;
          this.timeout = true;
          this.teamScore += this.score;
          this.score = 0;
          this.time = this.defaultTime;
          this.i += 1;
          this.skip = 2;
          this.skipDisabled = false;
        }
      }, 1000);
    },
    timeoutF() {
      this.interval = setInterval(() => {
        this.time -= 1;
        if (this.time == 0) {
          clearInterval(this.interval);
          this.w++;
          this.main = this.slowka[this.w].main;
          this.words = this.slowka[this.w];
          this.arr = Array.from(Object.keys(this.words), (k) => this.words[k]);

          this.team2Score += this.score;
          if (this.team3 != "") {
            this.equalThree = true;
            this.i = 2;
          } else {
            if (
              this.teamScore >= this.points ||
              this.team2Score >= this.points
            ) {
              this.gameOver = true;
            } else {
              this.equalTwo = true;
              this.i = 0;
            }
          }
          this.game = false;
          this.score = 0;
          this.time = this.defaultTime;
          this.skip = 2;
          this.skipDisabled = false;
        }
      }, 1000);
    },
    equalTwoF() {
      this.interval = setInterval(() => {
        this.time -= 1;
        if (this.time == 0) {
          clearInterval(this.interval);
          this.w++;
          this.main = this.slowka[this.w].main;
          this.words = this.slowka[this.w];
          this.arr = Array.from(Object.keys(this.words), (k) => this.words[k]);

          this.teamScore += this.score;
          this.game = false;
          this.score = 0;
          this.time = this.defaultTime;
          this.skip = 2;
          this.skipDisabled = false;
          this.i = 1;
          this.timeout = true;
        }
      }, 1000);
    },
    equalThreeF() {
      this.interval = setInterval(() => {
        this.time -= 1;
        if (this.time == 0) {
          clearInterval(this.interval);
          this.w++;
          this.main = this.slowka[this.w].main;
          this.words = this.slowka[this.w];
          this.arr = Array.from(Object.keys(this.words), (k) => this.words[k]);

          this.team3Score += this.score;
          if (this.team4 != "") {
            this.equalFour = true;
            this.i = 3;
          } else {
            if (
              this.teamScore >= this.points ||
              this.team2Score >= this.points ||
              this.team3Score >= this.points
            ) {
              this.gameOver = true;
            } else {
              this.i = 0;
              this.equalFour = true;
            }
          }

          this.game = false;
          this.score = 0;
          this.time = this.defaultTime;
          this.skip = 2;
          this.skipDisabled = false;
        }
      }, 1000);
    },
    equalFourF() {
      this.interval = setInterval(() => {
        this.time -= 1;
        if (this.time == 0) {
          clearInterval(this.interval);
          this.w++;
          this.main = this.slowka[this.w].main;
          this.words = this.slowka[this.w];
          this.arr = Array.from(Object.keys(this.words), (k) => this.words[k]);

          if (this.team4 != "") {
            this.team4Score += this.score;
            if (
              this.teamScore >= this.points ||
              this.team2Score >= this.points ||
              this.team3Score >= this.points ||
              this.team4Score >= this.points
            ) {
              this.gameOver = true;
            } else {
              this.i = 0;
              this.last = true;
            }
          } else {
            this.teamScore += this.score;
            this.i = 1;
            this.timeout = true;
          }

          this.game = false;
          this.score = 0;
          this.time = this.defaultTime;
          this.skip = 2;
          this.skipDisabled = false;
        }
      }, 1000);
    },
    lastF() {
      this.interval = setInterval(() => {
        this.time -= 1;
        if (this.time == 0) {
          clearInterval(this.interval);
          this.w++;
          this.main = this.slowka[this.w].main;
          this.words = this.slowka[this.w];
          this.arr = Array.from(Object.keys(this.words), (k) => this.words[k]);
          if (
            this.teamScore >= this.points ||
            this.team2Score >= this.points ||
            this.team3Score >= this.points ||
            this.team4Score >= this.points
          ) {
            this.gameOver = true;
          } else {
            this.i = 1;
            this.timeout = true;
            this.teamScore += this.score;
          }
          this.game = false;
          this.score = 0;
          this.time = this.defaultTime;
          this.skip = 2;
          this.skipDisabled = false;
        }
      }, 1000);
    },
    addPoint() {
      this.score += 1;
      this.w += 1;
      this.main = this.slowka[this.w].main;
      this.words = this.slowka[this.w];
      this.arr = Array.from(Object.keys(this.words), (k) => this.words[k]);
    },
    removePoint() {
      this.score -= 1;
      this.w += 1;
      this.main = this.slowka[this.w].main;
      this.words = this.slowka[this.w];
      this.arr = Array.from(Object.keys(this.words), (k) => this.words[k]);
    },
    skipClick() {
      if (this.skip > 0) {
        this.skip -= 1;
        this.w += 1;
        this.main = this.slowka[this.w].main;
        this.words = this.slowka[this.w];
        this.arr = Array.from(Object.keys(this.words), (k) => this.words[k]);
      }
    },
  },
  updated() {
    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
    if (this.skip == 0) {
      this.skipDisabled = true;
    }
    if (this.w == Object.keys(this.slowka).length - 1) {
      this.w = 0;
      this.slowka = shuffle(this.slowka);
      this.main = this.slowka[this.w].main;
      this.words = this.slowka[this.w];
      this.arr = Array.from(Object.keys(this.words), (k) => this.words[k]);
    }
  },
  created() {
    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
    this.slowka = shuffle(this.slowka);
    this.main = this.slowka[this.w].main;
    this.words = this.slowka[this.w];
    this.arr = Array.from(Object.keys(this.words), (k) => this.words[k]);
  },
  mounted() {
    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
    if (this.team3 != "") {
      this.showTeam3 = true;
      this.teams.push(this.team3);
    }
    if (this.team4 != "") {
      this.showTeam4 = true;
      this.teams.push(this.team4);
    }
    this.randomTeam = shuffle(this.teams);
  },
};
</script>


<style scoped>
.startGame {
  text-align: center;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: 1px #ffca01 solid;
  color: #fff;
  overflow: hidden;
  border-radius: 7px;
  outline: none;
  letter-spacing: 0.4vh;
  width: calc(40vh + 2vw);
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.timeout {
  text-align: center;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: 1px #ffca01 solid;
  color: #fff;
  overflow: hidden;
  border-radius: 7px;
  outline: none;
  letter-spacing: 0.4vh;
  width: calc(45vh + 2vw);
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.gameOver {
  text-align: center;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: 1px #ffca01 solid;
  color: #fff;
  overflow: hidden;
  border-radius: 7px;
  outline: none;
  letter-spacing: 0.4vh;
  width: calc(40vh + 2vw);
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo2 {
  font-size: 4vh;
}
.graj {
  background-color: Transparent;
  background-repeat: no-repeat;
  border: 1px #ffca01 solid;
  color: #ffca01;
  overflow: hidden;
  border-radius: 42px;
  outline: none;
  width: calc(20vh + 5vw);
  height: calc(4vh + 1vw);
  font-size: 2vh;
}
.again {
  background-color: Transparent;
  background-repeat: no-repeat;
  border: 1px #ffca01 solid;
  overflow: hidden;
  border-radius: 42px;
  outline: none;
  width: calc(20vh + 5vw);
  height: calc(4.3vh + 1vw);
  font-size: 2.1vh;
  color: #ffca01;
}
.start {
  margin: 5vh 3vh;
  font-size: 2vh;
}
.punkty {
  font-size: 2.8vh;
  padding: 0vh 3vh;
}
.kolej {
  font-size: 2.2vh;
  margin: 5vh 2vh;
}
.wszystkiepunkty {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  font-size: 2.2vh;
  padding: 4vh 0;
}
.wszystkiepunkty > p {
  padding: 0.5vh;
}
.graj:hover {
  background-color: rgba(255, 174, 25, 0.05);
}
* {
  margin: 0;
  padding: 0;
}
.container {
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -35%);
}
.mainField {
  letter-spacing: 0.5vh;
}
.logo {
  font-size: 6.2vh;
  justify-self: center;
}
.team {
  justify-self: start;
  padding: 0.5vh;
  font-size: 2.2vh;
}
.score {
  justify-self: end;
  padding: 1vh;
  font-size: 2.2vh;
}
.top {
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: baseline;
  width: calc(49vh + 2vw);
  height: calc(4vh + 1vw);
  margin-bottom: 9vh;
}
.grid {
  display: grid;
  grid-template-areas:
    "removePoint main addPoint"
    "removePoint myWords addPoint"
    "removePoint skip addPoint";
  width: calc(49vh + 2vw);
  height: 62vh;
  color: #fff;
}
.removePoint {
  grid-area: removePoint;
  width: calc(6vh + 0.5vw);
  justify-self: start;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: 1px #c13232 solid;
  color: #c13232;
  overflow: hidden;
  border-radius: 7px;
  outline: none;
  font-size: 6vh;
}
footer {
  color: white;
  font-size: 1.8vh;
  position: absolute;
  bottom: 0;
  width: 99vw;
  height: 3vh;
  text-align: center;
}
footer > a {
  color: #fff;
  text-decoration: none;
}
.main {
  grid-area: main;
  justify-self: center;
  display: grid;
  -webkit-clip-path: polygon(0 25%, 100% 0, 100% 75%, 0% 100%);
  clip-path: polygon(0 25%, 100% 0, 100% 75%, 0% 100%);
  background-color: #ffca01;
  height: 10vh;
  width: calc(30vh + 1vw);
  color: #242424;
  font-size: 2.9vh;
  font-weight: 600;
}
.main > p {
  text-align: center;
  align-self: center;
  padding-bottom: 0.5vh;
}
.addPoint {
  grid-area: addPoint;
  width: calc(6vh + 0.5vw);
  justify-self: end;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: 1px #18b781 solid;
  color: #18b781;
  overflow: hidden;
  border-radius: 7px;
  outline: none;
  font-size: 6vh;
}
.words {
  grid-area: myWords;
  justify-self: center;
  align-self: center;
  font-size: 2.9vh;
  text-align: center;
}
.skip {
  grid-area: skip;
  justify-self: center;
  width: calc(20vh + 2vw);
  height: 5.5vh;
  background-color: Transparent;
  background-repeat: no-repeat;
  border: 1px #ffca01 solid;
  color: #ffca01;
  overflow: hidden;
  border-radius: 42px;
  outline: none;
  align-self: end;
  font-size: 2.2vh;
}
.skip:hover {
  background-color: rgba(255, 174, 25, 0.05);
}
.skip:disabled {
  background-color: rgba(255, 174, 25, 0.05);
}
button:hover {
  background-color: rgba(50, 153, 255, 0.05);
}
li {
  list-style: none;
  padding: 1.5vh;
}
</style>
