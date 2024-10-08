"use client";

import './login.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { CgLock } from 'react-icons/cg';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [errorUserName, setErrorUserName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [userNameColor, setUserNameColor] = useState('');
  const [formData, setFormData] = useState({
    usernameOrEmail: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;

    // Validate username
    if (formData.usernameOrEmail.length < 3) {
      setErrorUserName('Please enter a valid username or email');
      setUserNameColor('red');
      isValid = false;
    } else {
      setErrorUserName('');
      setUserNameColor('green');
    }

    // Validate password
    if (formData.password.length < 8) {
      setErrorPassword('Passwords must have at least 8 characters');
      isValid = false;
    } else {
      setErrorPassword('');
    }

    return isValid;
  };

  const login = async (e) => {
    e.preventDefault(); // Prevents page reload on form submission
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        usernameOrEmail: formData.usernameOrEmail,
        password: formData.password
      }, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      const { access_token } = response.data;
      localStorage.setItem('access_token', access_token);
      
      // Navigate to Home after successful login
      navigate("/home");
    } catch (error) {
      setErrorPassword('Login failed. Please check your credentials.');
      console.error('Login failed', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <h1 className="login-title-1">LOG IN</h1>
      <div className="container">
        <div className="login-form">
          <h1 className="login-title">BetterTogether <span className="pets">Pets</span></h1>
          
          <form onSubmit={login}>
            <div className="form-control">
              <i><BsFillPersonFill /></i>
              <input
                type="text"
                placeholder="Username or Email"
                name="usernameOrEmail"
                value={formData.usernameOrEmail}
                onChange={handleChange}
                aria-label="Username or Email"
              />
              <small style={{ color: userNameColor }}>{errorUserName}</small>
            </div>

            <div className="form-control">
              <i><CgLock /></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                aria-label="Password"
              />
              <small style={{ color: 'red' }}>{errorPassword}</small>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h6 style={{ margin: 0 }}>Forgot Password?</h6>
              <span
                onClick={() => navigate("/signupuser")}
                style={{ marginLeft: '70px', color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
              >
                <h6 style={{ margin: 0 }}>Don't have an account? Sign up</h6>
              </span>
            </div>

            <div className="btn-login">
              <button type="submit" disabled={loading}>
                {loading ? 'Logging in...' : 'LOG IN'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
