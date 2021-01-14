<template>
  <navbar>
    <div class="quiz">
      <h1>Shisha-Quiz</h1>
      <hr />
      <span v-if="start == false">
        <p>Wilkommen zum ersten offiziellen Shisha-Quiz Spiel</p>
        <p>Viel Spaß!</p>
        <br />
        <button @click="startGame" @keyup.enter="startGame" class="btn">Spiel Starten</button>
      </span>
      <div v-else-if="start && rounds < 10">
        <p tabindex="0">{{ questions.question }}</p>
        <form>
          <span v-for="answer in questions.answers" :key="answer">
            <input type="radio" tabindex="0" :id="answer" name="answers" :value="answer"  v-model="choosenAnswer"/>
            <label :for="answer">{{answer}}</label><br />
          </span>
        </form>
        <button @click="startGame" @keyup.enter="startGame" class="btn">nächste Frage</button>
      </div>
      <div v-else>
        <p>Du hast {{ totalCorrectAnswer }} / 10 richtig!</p>
      </div>
    </div>
  </navbar>
</template>

<script>
import Navbar from "~/components/mainNavbar.vue";
export default {
  data() {
    return {
      start: false,
      rounds: 0,
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      questions: [],
      randArray: null,
      choosenAnswer: "",
      totalCorrectAnswer: 0,
    };
  },
  components: {
    navbar: Navbar,
  },
  methods: {
    shuffle(array) {
      var i = array.length,
        j = 0,
        temp;
      while (i--) {
        j = Math.floor(Math.random() * (i + 1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }

      return array;
    },
    checkCorrectAnswer(choosenAnswer, correctAnswer){
      if(choosenAnswer == correctAnswer){
        this.totalCorrectAnswer++;
      }
    },
    async startGame() {
      if (this.start == false) {
        this.randArray = this.shuffle(this.array);
        this.start = true;
      }
      try {
        this.checkCorrectAnswer(this.choosenAnswer, this.questions.correctAnswer);
        let response = await this.$axios.$get(
          "http://localhost:3000/Shisha@home/quiz"
        );
        this.questions = response.allQuestions[this.randArray[this.rounds]];
        this.choosenAnswer = "";
        this.rounds++;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
