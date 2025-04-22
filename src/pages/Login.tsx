// File: src/pages/LoginPage.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginPage.scss';
import axios from 'axios';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.get('login.json'); // Adjust the path to your JSON file
      const users = res.data;

      const matchedUser = users.find(
        (user: any) =>
          user.email.toLowerCase() === email.toLowerCase() &&
          user.password === password
      );

      if (matchedUser) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
        setError('');
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
    }
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAuthenticated');
    if (isLoggedIn === 'true') {
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <div className="login-container">
      <div className="login-left">
        <img src="./src/assets/lendsqrlogo.png" alt="Lendsqr Logo" className="loginlogo" />
        <img src="./src/assets/loginimage.png" alt="Lendsqr Login" className="logo" />
      </div>

      <div className="login-right">
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span onClick={togglePasswordVisibility} className="toggle-password">
              {showPassword ? 'HIDE' : 'SHOW'}
            </span>
          </div>

          {error && <p className="error-text">{error}</p>}

          <a href="#" className="forgot-password">FORGOT PASSWORD?</a>
          <button type="submit" className="login-button">LOG IN</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
