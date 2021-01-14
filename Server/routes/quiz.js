const router = require("express").Router();
const Quiz = require("../models/quiz.js");

// POST-Request for a new quiz question
router.post("/quiz", async (req, res) => {
  try {
    let newQuiz = new Quiz();
    newQuiz.question = req.body.question;
    newQuiz.answers = req.body.answers;
    newQuiz.correctAnswer = req.body.correctAnswer;

    await newQuiz.save(); // if all the data is correctly initialized the save the data to the Database

    res.json({
      // if success then print this
      status: true,
      message: "Successfully saved",
    });
  } catch (err) {
    res.status(500).json({
      // if error then print this and get status 500
      success: false,
      message: err.message,
    });
  }
});

// GET-Request for all quiz questions
router.get("/quiz", async (req, res) => {
  try {
    let allQuestions = await Quiz.find();

    res.json({
      // if success then print this
      succes: true,
      allQuestions: allQuestions,
    });
  } catch (err) {
    res.status(500).json({
      // if error then print this and get status 500
      success: false,
      message: err.message,
    });
  }
});

// DELETE-Request for a single Product
router.delete("/quiz/:id", async (req, res) => {
  try {
    let deleteQuizQuestion = await Quiz.findOneAndDelete({
      // 'findOneAndDelete' will be used to find one single Document and delete it from the Database
      _id: req.params.id, // The id parameter searches for the document with the typed id 'req.params.id'
    });
    if (deleteQuizQuestion) {
      // if 'deletedProduct' is true then response with the following
      res.json({
        // if success then print this
        status: true,
        message: "Successfully deleted",
      });
    }
  } catch (err) {
    res.status(500).json({
      // if error then print this and get status 500
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
