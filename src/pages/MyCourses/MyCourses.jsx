import React, { useState } from 'react';
import './MyCourses.css';
import img from '../../assets/courses.png'

const MyCourses = () => {
  const [courses, setCourses] = useState([
    { id: 1, title: 'React Basics', description: 'Learn the basics of React.js and build your first React application.', progress: 40, image: 'https://i.ytimg.com/vi/sa8iNdA_5OU/maxresdefault.jpg' },
    { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into advanced JavaScript concepts and improve your coding skills.', progress: 70, image: 'https://www.sipexe.com/assets/courses/Adavaced_JavaScript.png' },
    { id: 3, title: 'Web Development', description: 'A comprehensive guide to modern web development practices and tools.', progress: 30, image: 'https://www.filepicker.io/api/file/6ii70TL2R6afn7mKeHfX' },
  ]);

  const handleUnsubscribe = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div className="my-courses-container">
      <h1>Мои Курсы</h1>
      <div className="courses-list">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-content">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <div className="course-progress">
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <p>{course.progress}% завершено</p>
              </div>
              <button
                className="unsubscribe-button"
                onClick={() => handleUnsubscribe(course.id)}
              >
                Отписаться
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
