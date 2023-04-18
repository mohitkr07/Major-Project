import React, { useState } from "react";
import './addQue.css'

function QuizForm() {
  const [quiz, setQuiz] = useState({
    questions: []
  });

  const totalQuestions = 2;

  const [newQuestion, setNewQuestion] = useState({
    questionId: "",
    question: "",
    options: [{ option: "" }, { option: "" }, { option: "" }, { option: "" }],
    mark: "",
    correct: ""
  });

  const handleNewOption = (index, option) => {
    const options = [...newQuestion.options];
    options[index].option = option;
    setNewQuestion({ ...newQuestion, options });
  };

  const handleAddOption = () => {
    const options = [...newQuestion.options, { option: "" }];
    setNewQuestion({ ...newQuestion, options });
  };

  const handleNewQuestion = (e) => {
    e.preventDefault();
    if (quiz.questions.length < totalQuestions) {
      setQuiz({ ...quiz, questions: [...quiz.questions, newQuestion] });
      setNewQuestion({
        questionId: "",
        question: "",
        options: [{ option: "" }, { option: "" }, { option: "" }, { option: "" }],
        mark: "",
        correct: ""
      });
    } else {
      alert(`You cannot add more than ${totalQuestions} questions to the quiz.`);
    }
  };
  

  return (
    <form className="form-container" onSubmit={handleNewQuestion} >
      <label>
        Question Id:
        <input
          type="text"
          value={newQuestion.questionId}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, questionId: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        Question:
        <input
          type="text"
          value={newQuestion.question}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, question: e.target.value })
          }
        />
      </label>
      <br />
      {newQuestion.options.map((option, index) => (
        <label key={index}>
          Option {index + 1}:
          <input
            type="text"
            value={option.option}
            onChange={(e) => handleNewOption(index, e.target.value)}
          />
        </label>
      ))}
      <br />
      <button type="button" onClick={handleAddOption}>
        Add Option
      </button>
      <br />
      <label>
        Mark:
        <input
          type="text"
          value={newQuestion.mark}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, mark: e.target.value })
          }
        />
      </label>
      <br />
      <label>
        Correct Answer:
        <input
          type="text"
          value={newQuestion.correct}
          onChange={(e) =>
            setNewQuestion({ ...newQuestion, correct: e.target.value })
          }
        />
      </label>
      <br />
      <button type="submit">Add Question</button>
      <hr />
      {quiz.questions.map((question, index) => (
        <div key={index}>
          <p>Question Id: {question.questionId}</p>
          <p>Question: {question.question}</p>
          <ul>
            {question.options.map((option, index) => (
              <li key={index}>{option.option}</li>
            ))}
          </ul>
          <p>Mark: {question.mark}</p>
          <p>Correct Answer: {question.correct}</p>
        </div>
      ))}
    </form>
  );
}

export default QuizForm;
