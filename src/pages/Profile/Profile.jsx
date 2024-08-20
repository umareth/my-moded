// src/pages/Profile/Profile.jsx
import React, { useState } from 'react';
import './Profile.css';
import { FaCamera } from 'react-icons/fa';  // Иконка для загрузки фото

const Profile = ({ isTeacher }) => {
  const [photo, setPhoto] = useState(null);
  const [firstName, setFirstName] = useState("Имя");
  const [lastName, setLastName] = useState("Фамилия");
  const [isEditing, setIsEditing] = useState(false);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPhoto(imageUrl);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-left">
        <div className="profile-photo">
          <img
            src={photo || 'https://via.placeholder.com/150'}
            alt="Profile"
          />
          <label htmlFor="file-input" className="upload-button">
            <FaCamera /> {/* Иконка камеры */}
            <input id="file-input" type="file" onChange={handlePhotoChange} />
          </label>
        </div>

        {!isEditing ? (
          <div className="profile-name">
            <h2>{firstName} {lastName}</h2>
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Редактировать профиль
            </button>
          </div>
        ) : (
          <div className="profile-edit">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Введите имя"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Введите фамилию"
            />
            <button className="save-button" onClick={handleSave}>Сохранить</button>
          </div>
        )}
      </div>

      <div className="profile-right">
        {isTeacher ? (
          <>
            <h2>Статистика Учителя</h2>
            <div className="stats-container">
              <div className="stat-item">
                <h3>Количество курсов</h3>
                <div className="stat-graph">
                  <div className="stat-graph-bar" style={{ width: '80%' }}>5 курсов</div>
                </div>
              </div>
              <div className="stat-item">
                <h3>Ученики</h3>
                <div className="stat-graph">
                  <div className="stat-graph-bar" style={{ width: '90%' }}>120 учеников</div>
                </div>
              </div>
              <div className="stat-item">
                <h3>Завершенные курсы</h3>
                <div className="stat-graph">
                  <div className="stat-graph-bar" style={{ width: '70%' }}>30 курсов</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h2>Статистика Ученика</h2>
            <div className="stats-container">
              <div className="stat-item">
                <h3>Завершено курсов</h3>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '70%' }}></div>
                </div>
                <p>7 из 10 курсов</p>
              </div>

              <div className="stat-item">
                <h3>Тесты</h3>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '50%' }}></div>
                </div>
                <p>5 из 10 тестов</p>
              </div>

              <div className="stat-item">
                <h3>Часов обучения</h3>
                <div className="progress-bar">
                  <div className="progress" style={{ width: '85%' }}></div>
                </div>
                <p>85 из 100 часов</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
