import React, { useState } from 'react';
import LessonModal from './LessonModal';
import './LessonList.css';

// Данные уроков
const lessons = [
  { id: 1, title: 'Introduction to English', duration: '1 hour', type: 'video', content: 'https://www.example.com/video.mp4' },
  { id: 2, title: 'Basic Grammar Rules', duration: '1 hour', type: 'text', content: 'This lesson covers the basic grammar rules in English.' },
  { id: 3, title: 'Building Vocabulary', duration: '1 hour', type: 'text', content: 'Learn how to build a strong vocabulary in English.' },
  { id: 4, title: 'Quiz: Grammar Check', duration: '1 hour', type: 'quiz', content: 'Quiz content for grammar check.' },
  { id: 5, title: 'Quiz: Vocabulary Test', duration: '1 hour', type: 'quiz', content: 'Quiz content for vocabulary test.' },
];

const LessonList = () => {
  const [selectedLesson, setSelectedLesson] = useState(null);

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson); // Устанавливаем выбранный урок для показа в модальном окне
  };

  const handleCloseModal = () => {
    setSelectedLesson(null); // Закрытие модального окна
  };

  // Рендеринг контента в зависимости от типа урока
  const renderContent = (lesson) => {
    if (!lesson) return null;

    switch (lesson.type) {
      case 'video':
        return (
          <div>
            <h3>{lesson.title}</h3>
            <video width="100%" controls>
              <source src={lesson.content} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
        return (
          <div>
            <h3>{lesson.title}</h3>
            <p>This is a quiz. Choose the correct answer:</p>
            {/* Статический пример квиза */}
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
              <li>Option 4</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="lesson-list-container">
      <h2 className="lesson-list-title">Lessons</h2>
      <div className="lesson-list">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="lesson-item"
            onClick={() => handleLessonClick(lesson)} // Обработка клика
          >
            <div className="lesson-item-left">
              <span className="lesson-number">{lesson.id}</span>
              <p className="lesson-title">{lesson.title}</p>
            </div>
            <div className="lesson-item-right">
              <p className="lesson-duration">Duration: {lesson.duration}</p>
              <span className="lesson-icon">➔</span>
            </div>
          </div>
        ))}
      </div>

      {/* Модальное окно для выбранного урока */}
      {selectedLesson && (
        <LessonModal
          isOpen={!!selectedLesson}
          onClose={handleCloseModal}
          content={renderContent(selectedLesson)}
        />
      )}
    </div>
  );
};

export default LessonList;
