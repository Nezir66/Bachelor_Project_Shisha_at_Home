const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
    question: String,
    answers: { 
        answer_a: String,
        answer_b: String,
        answer_c: String,
        answer_d: String,
     },
    correctAnswer: String,
});

module.exports = mongoose.model("Quiz", QuizSchema);