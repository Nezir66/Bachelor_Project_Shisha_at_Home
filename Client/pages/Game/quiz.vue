<template>
  <navbar>
    <div class="container-app">
      <div class="container-quiz">
        <div class="header-quiz">
          <h1>Shisha Quiz</h1>
        </div>
        <div class="step-progress" :style="{ width: progress + '%' }"></div>
        <div
          class="box"
          v-for="(question, index) in questions.slice(a, b)"
          :key="index"
          v-show="quiz"
        >
          <div class="box-question" tabindex="0">
            <h2>Frage {{ b }}/{{ questions.length }}</h2>
            <p>{{ question.question }}</p>
          </div>
          <div class="box-propositions">
            <ul>
              <li
                v-for="(proposition, index) in question.propositions"
                :key="index"
                class="li"
                @click="selectResponse(proposition, index)"
                @keyup.enter="selectResponse(proposition, index)"
                :class="correct ? check(proposition) : ''"
                tabindex="0"
              >
                {{ proposition.props }}
                <span
                  class="fa fa-check"
                  v-if="correct ? proposition.correct : ''"
                  
                ></span>
                <span
                  class="fa fa-times"
                  v-if="correct ? !proposition.correct : ''"
                ></span>
              </li>
            </ul>
          </div>
        </div>
        <div class="box-score" v-if="score_show">
          <h2>Dein Ergebnis</h2>
          <h2>{{ score }}/{{ questions.length }}</h2>
          <div class="btn-restart" tabindex="0">
            <button @click="restartQuiz" @keyup.enter="restartQuiz">
              Erneut <span class="fa fa-sync-alt"></span>
            </button>
          </div>
        </div>
        <div class="footer-quiz">
          <div v-if="progress < 100" class="box-button">
            <button
              @click="skipQuestion()"
              @keyup.enter="skipQuestion()"
              :style="next ? 'background-color: var(--background-color-btn)' : ''"
              tabindex="0"
            >
              Skip
            </button>
            <button
              @click="nextQuestion()"
              @keyup.enter="nextQuestion()"
              :style="!next ? 'background-color:  var(--background-color-btn)' : ''"
              tabindex="0"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </navbar>
</template>

<script>
import Navbar from "~/components/mainNavbar.vue";
export default {
  data() {
    return {
      rightanswer: "",
      questions: [
        {
          question: "Welches ist das Ursprungsland der Wasserpfeife?",
          propositions: [
            { props: "Indien", correct: true },
            { props: "Ägypten" },
            { props: "China" },
            { props: "Frankreich" },
          ],
        },
        {
          question:
            "Welche ist die bekannteste Tabak-Sorte?",
          propositions: [
            { props: 'Cold Lime' },
            { props: 'Traube Minze' },
            { props: 'Doppelapfel', correct: true },
            { props: 'Wassermelone' },
          ],
        },
        {
          question: "Wie heiß werden Shishakohlen?",
          propositions: [
            { props: '200 Grad' },
            { props: '500 Grad' },
            { props: 'bis zu 800 Grad', correct: true },
            { props: 'über 1500 Grad' },
          ],
        },
        {
          question: "Wofür ist das Wasser in der Wasserpfeife?",
          propositions: [
            { props: "zum filtern des Rauchs" },
            { props: "zum kühlen des Rauchs", correct: true },
            { props: "zum filtern und kühlen des Rauchs" },
            { props: "nur für Dekoration" },
          ],
        },
        {
          question: "Ab welchem Alter ist Shisha rauchen erlaubt in Österreich?",
          propositions: [
            { props: "16" },
            { props: "14" },
            { props: "21" },
            { props: "18", correct: true },
          ],
        },
        {
          question: "Kann man zwei Tabaksorten aufeinmal rauchen?",
          propositions: [
            { props: "Nur wenn man die gleiche Tabakmarke hat" },
            { props: "Ja", correct: true },
            { props: "Nein" },
            { props: "Nur bei bestimmten Wasserpfeifen" },
          ],
        },
        {
          question: "Wie lange kann man alleine an einer Shisha rauchen?",
          propositions: [
            { props: 'Man sollte eine Shisha nicht alleine rauchen' },
            { props: '5 Stunden' },
            { props: '2 Stunden', correct: true },
            { props: '1 Stunde' },
          ],
        },
        {
          question: "Welche von den unten angeführten Optionen ist keine Shisha-Art?",
          propositions: [
            { props: "Unity Shisha" },
            { props: "Luxus Shisha", correct: true },
            { props: "Türkische Shisha" },
            { props: "Indische Huka" },
          ],
        },
        {
          question: "Wie viele Schläuche kann man mit einer Shisha verbinden?",
          propositions: [
            { props: "2" },
            { props: "1" },
            { props: "6" },
            { props: "4", correct: true },
          ],
        },
        {
          question: "Was ist die Ursprungsform des Wortes Shisha?",
          propositions: [
            { props: "Sise" },
            { props: "Schische", correct: true },
            { props: "Schischi" },
            { props: "Nargile" },
          ],
        },
      ],
      a: 0,
      b: 1,
      next: true,
      score_show: false,
      quiz: true,
      score: 0,
      correct: false,
      progress: 0,
      array: null,
    };
  },
  name: "App",
  components: {
    navbar: Navbar,
  },
  created() {
      var i = this.questions.length,
        j = 0,
        temp;
      while (i--) {
        j = Math.floor(Math.random() * (i + 1));

        // swap randomly chosen element with current element
        temp = this.questions[i];
        this.questions[i] = this.questions[j];
        this.questions[j] = temp;
      }    
  },
  computed: {},
  methods: {
    selectResponse(e) {
      this.correct = true;
      this.next = false;
      if (e.correct) {
        this.rightanswer = e.props;
        this.score++;
      }
    },
    check(status) {
      if (status.correct) {
        // this.rightanswer = status.props;
        return "correct";
      } else {
        return "incorrect";
      }
    },
    nextQuestion() {
      if (this.next) {
        return;
      }
      this.progress = this.progress + 100 / this.questions.length;
      if (this.questions.length - 1 == this.a) {
        this.score_show = true;
        this.quiz = false;
      } else {
        this.a++;
        this.b++;
        this.correct = false;
        this.next = true;
      }
    },
    skipQuestion() {
      if (!this.next) {
        return;
      }
      this.progress = this.progress + 100 / this.questions.length;
      if (this.questions.length - 1 == this.a) {
        this.score_show = true;
        this.quiz = false;
      } else {
        this.a++;
        this.b++;
      }
    },

    restartQuiz() {
      Object.assign(this.$data, this.$options.data()); // reset data in vue
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  letter-spacing: 2px;
}

h1{
   color: var(--text-color-body) !important; 
}

h2,
p {
  color: black;
}

.container-app {
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 30px;
  justify-content: center;
}

.container-quiz {
  display: flex;
  width: 60%;
  height: 100%;
  background-color: white;
  text-align: center;
  flex-flow: column;
  border: 1px solid #e7eae0;
  position: static;
  top: 0;
  bottom: 0;
  margin: auto;
  box-shadow: 0 0 5px 5px white;
}

.header-quiz {
  display: flex;
  width: 100%;
  height: 20%;
  border-bottom: 1px solid #82260e;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color-body) !important;
  color: var(--text-color-body) !important;
}

.container-quiz .box {
  display: flex;
  width: 100%;
  height: 70%;
  flex-flow: column;
  margin: auto;
  background-color: var(--background-color-btn) !important;
}

.box-question {
  margin-top: 20px;
  margin-bottom: 20px;
}

.box-question p {
  margin-top: 20px;
}

.box-propositions {
  margin: auto;
  display: flex;
  width: 100%;
  justify-content: center;
}

ul {
  display: flex;
  width: 80%;
  margin: 0;
  padding: 0;
  flex-flow: column;
}

li {
  list-style: none;
  line-height: 2;
  border: 1px solid #cdd2d2;
  background-color: var(--background-color-body) ;
  color: var(--text-color-body);
  margin-bottom: 20px;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.3s;
}

li:hover,
li:focus {
  /*transform: scale(1.1);*/
  background-color: #e7eae0;
  color: black;
}

li > div {
  float: right;
  margin-top: 7px;
  margin-right: 7px;
  color: white;
}

.check {
  color: rgb(74, 219, 74);
}

.close {
  color: #82260e;
}

.footer-quiz {
  display: flex;
  width: 100%;
  height: 15%;
  justify-content: center;
  border-top: 1px solid #e7eae0;
  background-color: var(--background-color-body) !important;
  padding: 15px;
}

.box-button {
  display: flex;
  width: 100%;
}

.footer-quiz .box-button button {
  width: 150px;
  height: 35px;
  outline: none;
  border: 0;
  color: var(--text-color-btn) !important;
  font-size: 18px;
  cursor: pointer;
  border-radius: 15px;
  margin: auto;
  margin-bottom: 10px;
  letter-spacing: 2px;
  background-color: #a09f9ff5;
}

li.correct {
  border: 1px solid rgb(74, 219, 74);
  background-color: rgb(74, 219, 74);
  color: black;
  font-weight: 600;
}

li.incorrect {
  border: 1px solid #82260e;
  background-color: var(--background-color-body) ;
  color: white;
  font-weight: 600;
}

.box-score {
  display: flex;
  width: 100%;
  height: 70%;
  flex-flow: column;
      background-color: var(--background-color-btn) !important;

}

.box-score h2 {
  margin-top: 40px;
}

i {
  display: none;
  color: white;
}

.step-progress {
  display: flex;
  width: 100%;
  height: 5px;
  background-color:  #295406;
  transition: 0.5s;
}

.btn-restart {
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  margin-top: 50px;
}

.btn-restart button {
  width: 150px;
  height: 35px;
  outline: none;
  border: 0;
  background-color: var(--background-color-body) ;
  color: var(--text-color-body);
  font-size: 18px;
  cursor: pointer;
  border-radius: 15px;
  margin: auto;
  margin-bottom: 10px;
  letter-spacing: 2px;
}

.next {
  background-color: rgb(106, 128, 202);
}

ul li:focus {
    border: 2px solid black;
}


button:hover,
button:focus{
    color: white !important;
    background-color: #295406 !important;
}

@media screen and (max-width: 900px) {
  .container-quiz {
    width: 60%;
  }
}

@media screen and (max-width: 720px) {
  .container-quiz {
    width: 80%;
  }
  .footer-quiz .box-button button {
    width: 100px;
  }
}
</style>
