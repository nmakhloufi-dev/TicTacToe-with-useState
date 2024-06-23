import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['A. Paris', 'B. London', 'C. Berlin', 'D. Madrid'],
    answer: 'A. Paris'
  },
  {
    question: 'Who wrote "To Kill a Mockingbird"?',
    options: ['A. Harper Lee', 'B. Mark Twain', 'C. Ernest Hemingway', 'D. Jane Austen'],
    answer: 'A. Harper Lee'
  },
  {
    question: 'What is the largest planet in our solar system?',
    options: ['A. Mars', 'B. Venus', 'C. Jupiter', 'D. Saturn'],
    answer: 'C. Jupiter'
  },
  {
    question: 'What is the chemical element with the symbol O?',
    options: ['A. Gold', 'B. Oxygen', 'C. Osmium', 'D. Oganesson'],
    answer: 'B. Oxygen'
  },
  {
    question: 'What is the official language of Brazil?',
    options: ['A. Spanish', 'B. Portuguese', 'C. English', 'D. French'],
    answer: 'B. Portuguese'
  },
  {
    question: 'Who wrote the novel "1984"?',
    options: ['A. Aldous Huxley', 'B. George Orwell', 'C. Ray Bradbury', 'D. Philip K. Dick'],
    answer: 'B. George Orwell'
  },
  {
    question: 'In which country is Machu Picchu located?',
    options: ['A. Mexico', 'B. Chile', 'C. Peru', 'D. Bolivia'],
    answer: 'C. Peru'
  },
  {
    question: 'What is the approximate value of the number π (pi)?',
    options: ['A. 2.718', 'B. 3.141', 'C. 1.618', 'D. 1.141'],
    answer: 'B. 3.141'
  },
  {
    question: 'Which painter is famous for cutting off part of his ear?',
    options: ['A. Pablo Picasso', 'B. Claude Monet', 'C. Vincent van Gogh', 'D. Salvador Dalí'],
    answer: 'C. Vincent van Gogh'
  },
  {
    question: 'What is the highest mountain in the world?',
    options: ['A. K2', 'B. Mount Everest', 'C. Mount Kilimanjaro', 'D. Mount McKinley'],
    answer: 'B. Mount Everest'
  },
  {
    question: 'Who developed the theory of relativity?',
    options: ['A. Isaac Newton', 'B. Nikola Tesla', 'C. Albert Einstein', 'D. Galileo Galilei'],
    answer: 'C. Albert Einstein'
  },
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleAnswerOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption('');
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].question}
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
                className={`option-button ${
                  selectedOption === option ? 'selected' : ''
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <button
            className="next-button"
            onClick={handleNextQuestion}
            disabled={!selectedOption}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
