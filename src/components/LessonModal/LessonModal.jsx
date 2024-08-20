import React, { useState } from 'react';
import './LessonModal.css';

const LessonModal = ({ isOpen, onClose, lesson }) => {
  const [quizResults, setQuizResults] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  if (!isOpen) return null;

  const renderContent = () => {
    switch (lesson.type) {
      case 'video':
        return (
          <div>
            <h3>{lesson.title}</h3>
            <iframe src="https://vk.com/video_ext.php?oid=-98069659&id=456256092&hd=2&autoplay=1" width="500px" height="282px" allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" frameborder="0" allowfullscreen></iframe>
          </div>
        );
      case 'text':
        return (
          <div>
            <h3>{lesson.title}</h3>
            <p>{lesson.content}</p>
          </div>
        );
      case 'quiz':
        return renderQuizContent();
      default:
        return null;
    }
  };

  const renderQuizContent = () => {
    if (quizResults !== null) {
      return (
        <div>
          <h3>{lesson.title}</h3>
          <p>{quizResults ? 'You passed the quiz!' : 'You failed the quiz. Try again!'}</p>
          <button onClick={resetQuiz}>Retry Quiz</button>
        </div>
      );
    }

    return (
      <div>
        <h3>{lesson.title}</h3>
        {lesson.content.questions.map((question, index) => (
          <div key={index}>
            <p>{question.question}</p>
            <ul>
              {question.options.map((option, i) => (
                <li key={i}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={i}
                    onChange={() => handleAnswerSelect(index, i)}
                    checked={selectedAnswers[index] === i}
                  />
                  {option}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button onClick={submitQuiz}>Submit Quiz</button>
      </div>
    );
  };

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex,
    }));
  };

  const submitQuiz = () => {
    const correctAnswers = lesson.content.questions.every(
      (q, i) => selectedAnswers[i] === q.correctAnswer
    );
    setQuizResults(correctAnswers);
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setQuizResults(null);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button2" onClick={onClose}>✅</button>
        <div className="modal-body">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default LessonModal;
