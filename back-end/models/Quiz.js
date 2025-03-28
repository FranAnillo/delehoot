// backend/models/Quiz.js
const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: String,
  questions: [
    {
      questionText: String,
      options: [String],
      correctAnswer: String,
    }
  ],
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
