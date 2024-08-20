import React, { useState, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './nav.css';
import logo from '../../assets/logo.png';
import NotificationModal from '../NotificationModal/NotificationModal'; // Импортируем компонент уведомления

const NavBar = ({ isSignIn, setIsSignIn, isTeacher }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  const handleSignOut = () => {
    setIsSignIn(false);
    navigate('/sign-in');
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsLeaving(false);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsLeaving(true);
    timeoutRef.current = setTimeout(() => {
      if (isLeaving) {
        setIsHovered(false);
      }
    }, 2000);
  };

  const handleLinkClick = useCallback((path) => {
    if (!isSignIn) {
      setShowNotification(true);
    } else {
      navigate(path);
    }
  }, [isSignIn, navigate]);

  const closeNotification = () => {
    setShowNotification(false);
  };

  return (
    <>
      <nav>
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <button
                className="nav-link-button"
                onClick={() => handleLinkClick('/learn')}
              >
                Курсы
              </button>
            </li>
            <li>
            <button
                className="nav-link-button"
                onClick={() => handleLinkClick('/my-courses')}
              >
                Мои курсы
              </button>
            </li>
            {isSignIn && isTeacher && (
              <li>
                <button
                  className="nav-link-button"
                  onClick={() => handleLinkClick('/my-students')}
                >
                  Мои ученики
                </button>
              </li>
            )}
            <li>
              <div
                className='sign-btn-container'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className='sign-btn'
                  onClick={isSignIn ? handleSignOut : () => navigate('/sign-in')}
                  disabled={isSignIn}
                >
                  {isSignIn ? (isTeacher ? 'Учитель' : 'Ученик') : 'Вход'}
                </button>
                {(isHovered || !isLeaving) && isSignIn && (
                  <div className='dropdown-menu'>
                    <Link to="/profile" className='dropdown-item'>Профиль</Link>
                    <button className='dropdown-item' onClick={handleSignOut}>Выход</button>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>
      {showNotification && (
        <NotificationModal 
          message="Вы не авторизованы. Пожалуйста, войдите в систему." 
          onClose={closeNotification} 
        />
      )}
    </>
  );
};

export default React.memo(NavBar); // Используем React.memo для предотвращения лишних рендеров
