import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LessonModal from '../../components/LessonModal/LessonModal';
import './CourseDetail.css';
import img from '../../assets/Rec2.png'

const courseDetails = {
  1: {
    title: 'English for Beginners',
    image: 'https://via.placeholder.com/600',
    description: 'This course covers the basics of English, including grammar, vocabulary, and conversation skills.',
    lessons: [
      {
        id: 1,
        title: 'Introduction to English',
        duration: '1 hour',
        type: 'video',
        content: 'https://vk.com/video-98069659_456256092', // Видео из Vimeo
      },
      {
        id: 2,
        title: 'Basic Grammar Rules',
        duration: '1 hour',
        type: 'text',
        content: `In this lesson, we cover the basic grammar rules in English. 
        These include understanding the subject-verb agreement, sentence structure, 
        and common mistakes learners make. English grammar has various rules, 
        but the most important is understanding how verbs change based on the subject.`,
      },
      {
        id: 3,
        title: 'Common Phrases',
        duration: '1 hour',
        type: 'text',
        content: `In this lesson, we explore common phrases used in everyday English conversations. 
        Here are some examples:
        1. "How are you?"
        2. "What's up?"
        3. "See you later!"
        4. "Thank you very much!" 
        Knowing these phrases will help you communicate effectively in casual settings.`,
      },
      {
        id: 4,
        title: 'Quiz: Basic Grammar',
        duration: '30 minutes',
        type: 'quiz',
        content: {
          questions: [
            {
              question: 'Which sentence is grammatically correct?',
              options: [
                'She go to the market.',
                'She goes to the market.',
                'She going to the market.',
                'She goed to the market.',
              ],
              correctAnswer: 1,
            },
            {
              question: 'Which is the correct form of the verb?',
              options: [
                'He walk to school every day.',
                'He walks to school every day.',
                'He walking to school every day.',
                'He walked to school every day.',
              ],
              correctAnswer: 1,
            },
          ],
        },
      },
      {
        id: 5,
        title: 'Quiz: Common Phrases',
        duration: '30 minutes',
        type: 'quiz',
        content: {
          questions: [
            {
              question: 'How do you greet someone casually?',
              options: [
                'Goodbye!',
                'Hello!',
                'What’s up?',
                'How do you do?',
              ],
              correctAnswer: 2,
            },
            {
              question: 'Which phrase is used to express gratitude?',
              options: [
                'I’m sorry.',
                'Thank you.',
                'See you later.',
                'Excuse me.',
              ],
              correctAnswer: 1,
            },
          ],
        },
      },
    ],
  },
};

const CourseDetail = () => {
  const { id } = useParams();
  const course = courseDetails[id];

  const [selectedLesson, setSelectedLesson] = useState(null);

  const handleLessonClick = (lesson) => {
    setSelectedLesson(lesson);
  };

  const handleCloseModal = () => {
    setSelectedLesson(null);
  };

  return (
    <div className="course-detail-container">
      <div className="course-header">
        <img src={img} alt={course.title} className="course-image" />
        <h1 className="course-title">{course.title}</h1>
        <p className="course-description">{course.description}</p>
      </div>

      <div className="lessons-list">
        <h2 className="lessons-header">Lessons</h2>
        {course.lessons.map(lesson => (
          <div key={lesson.id} className="lesson-item" onClick={() => handleLessonClick(lesson)}>
            <div className="lesson-info">
              <span className="lesson-number">{lesson.id}</span>
              <span className="lesson-title">{lesson.title}</span>
            </div>
            <div className="lesson-duration">
              <span>{`Duration: ${lesson.duration}`}</span>
            </div>
            <div className="lesson-icon">
              <span>&#x279C;</span>
            </div>
          </div>
        ))}
      </div>

      {selectedLesson && (
        <LessonModal
          isOpen={!!selectedLesson}
          onClose={handleCloseModal}
          lesson={selectedLesson}
        />
      )}
    </div>
  );
};

export default CourseDetail;
