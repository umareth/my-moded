import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sign.css';

const Sign = ({ setIsSignIn, setIsTeacher }) => {
  const [isSignIn, setIsSignInLocal] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Проверка email и установка роли
    if (email === 'admin@mail.ru') {
      setIsTeacher(true);
    } else {
      setIsTeacher(false);
    }
    setIsSignIn(true);
    navigate('/profile'); // Перенаправление на страницу профиля
  };

  const handleSignUpClick = () => {
    setIsSignInLocal(false);
  };

  return (
    <div className="sign-in-container">
      <div className="form-section">
        <h1 className="form-title">{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-input"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="form-button">
            {isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
      </div>
      <div className="welcome-section">
        <div className="welcome-content">
          <h2 className="welcome-title">{isSignIn ? 'Welcome Back!' : 'Welcome!'}</h2>
          <p className="welcome-text">
            {isSignIn
              ? 'We are glad to see you again. Please sign in to continue.'
              : 'Create an account to enjoy our services.'}
          </p>
          <button onClick={handleSignUpClick} className="register-button">
            {isSignIn ? 'Register' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sign;
