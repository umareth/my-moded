import React from 'react';
import './NotificationModal.css'; // Не забудьте создать этот файл стилей

const NotificationModal = ({ message, onClose }) => {
  return (
    <div className="notification-overlay">
      <div className="notification-modal">
        <h2>Уведомление</h2>
        <p>{message}</p>
        <button className="notification-close-btn" onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default NotificationModal;
