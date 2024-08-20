// src/pages/MyStudents/MyStudents.jsx
import React, { useState } from 'react';
import './MyStudents.css';

// Пример данных для учеников
const initialStudents = [
  { id: 1, name: 'Иван Иванов', email: 'ivan@example.com', avatar: 'https://via.placeholder.com/50', progress: 75, studyTime: '20 часов', averageGrade: '4.5' },
  { id: 2, name: 'Мария Петрова', email: 'maria@example.com', avatar: 'https://via.placeholder.com/50', progress: 50, studyTime: '15 часов', averageGrade: '3.8' },
  { id: 3, name: 'Алексей Смирнов', email: 'alexey@example.com', avatar: 'https://via.placeholder.com/50', progress: 85, studyTime: '25 часов', averageGrade: '4.8' },
  // Добавьте больше учеников по необходимости
];

const MyStudents = () => {
  const [students, setStudents] = useState(initialStudents);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleRemoveStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  const handleStudentClick = (student) => {
    setSelectedStudent(student);
  };

  const handleCloseModal = () => {
    setSelectedStudent(null);
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="my-students-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Поиск по ученикам"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="students-list">
        {filteredStudents.map(student => (
          <div key={student.id} className="student-row" onClick={() => handleStudentClick(student)}>
            <div className="student-info">
              <img src={student.avatar} alt={student.name} className="student-avatar" />
              <div className="student-details">
                <h2 className="student-name">{student.name}</h2>
                <p className="student-email">{student.email}</p>
              </div>
            </div>
            <button className="remove-button" onClick={(e) => { e.stopPropagation(); handleRemoveStudent(student.id); }}>Удалить</button>

          </div>
        ))}
      </div>

      {selectedStudent && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">{selectedStudent.name}</h2>
            <img src={selectedStudent.avatar} alt={selectedStudent.name} className="modal-avatar" />
            <div className="modal-body">
              <p><strong>Email:</strong> {selectedStudent.email}</p>
              <p><strong>Прогресс:</strong> {selectedStudent.progress}%</p>
              <p><strong>Время обучения:</strong> {selectedStudent.studyTime}</p>
              <p><strong>Средняя оценка:</strong> {selectedStudent.averageGrade}</p>
            </div>
            <button className="modal-close-button" onClick={handleCloseModal}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyStudents;
