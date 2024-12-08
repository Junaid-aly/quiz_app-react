import React, { useState } from "react";
import { reactJsQuestions } from "../../constants/question";

import bg4 from "../../assets/bg4.jpg"

const React_quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setAnsweredQuestions([...answeredQuestions, currentQuestion]);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setAnsweredQuestions([]);
  };

  // If all questions are answered, show the result
  if (currentQuestion === reactJsQuestions.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen w-full gap-5 bg-gray-100">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Quiz Completed!</h2>
        <p className="text-2xl font-bold text-gray-800">
          Your final score is {score}/{reactJsQuestions.length}
        </p>
        <button
          className="w-[200px] text-lg font-semibold text-white bg-blue-500 rounded-lg py-3 px-4 hover:bg-blue-600 transition"
          onClick={handleRestart}
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  // Render current question
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100"
    style={{
      backgroundImage: `url(${bg4})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
  }}>
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">React Quiz</h1>

        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Q{currentQuestion + 1}: {reactJsQuestions[currentQuestion].question}
          </h2>
          <ul className="space-y-3">
            {reactJsQuestions[currentQuestion].answerOptions.map((answer, index) => (
              <li key={index}>
                <button
                  className="w-full text-left px-4 py-2 border rounded-lg hover:bg-gray-200 transition"
                  onClick={() => handleAnswer(answer.isCorrect)}
                >
                  {answer.text}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
            disabled={currentQuestion === 0}
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            disabled={currentQuestion === reactJsQuestions.length - 1}
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default React_quiz;
