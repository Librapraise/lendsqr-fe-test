// LoginPage.tsx
import React, { useState } from 'react';
import '../styles/LoginPage.scss';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src="./src/assets/loginimage.png" alt="Lendsqr Logo" className="logo" />
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
          <a href="#" className="forgot-password">FORGOT PASSWORD?</a>
          <button type="submit" className="login-button">LOG IN</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
