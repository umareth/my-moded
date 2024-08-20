import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './nav.css';
import logo from '../../assets/logo.png';

const NavBar = ({ isSignIn, setIsSignIn, isTeacher }) => {
  console.log(isTeacher)
  const [isHovered, setIsHovered] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const navigate = useNavigate();
  const timeoutRef = useRef(null);

  const handleSignOut = () => {
    setIsSignIn(false); // Обновляем состояние при выходе
    navigate('/sign-in'); // Перенаправляем на страницу входа
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
    }, 2000); // Задержка 2 секунды
  };

  return (
    <nav>
      <div className="nav-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <Link to="/learn">Курсы</Link>
          </li>
          <li>
            <Link to="/my-courses">Мои курсы</Link>
          </li>
          {isSignIn && isTeacher && (
            <li>
              <Link to="/my-students">Мои ученики</Link>
            </li>
          )}
          <li>
            <div
              className='sign-btn-container'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                className='sign-btn'
                to={isSignIn ? "/" : "/sign-in"}
                onClick={isSignIn ? handleSignOut : undefined}
              >
                {isSignIn ? (isTeacher ? 'Учитель' : 'Ученик') : 'Вход'}
              </Link>
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
  );
};

export default NavBar;
