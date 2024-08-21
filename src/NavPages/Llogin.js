import './Llogin.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import logimage from '../Images/loginimage.jpg'
import logo from '../Images/flogo.png'
import icon from '../Images/vvicon.png'

const Llogin = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const { email, password } = loginData;
  
    try {
      const response = await fetch(`http://localhost:8080/Get?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to login');
      }
  
      const users = await response.json();
      const user = users.find(u => u.email === email);

      if (!user) {
        setError('User not found. Please check your email.');
        navigate('/register');
        window.alert('Incorrect Username Redirecting to RegisterPage');
        return;
      }
  
      if (user.password !== password) {
        setError('Incorrect password. Please try again.');
        return;
      }
      console.log(password)
      console.log(user)
      setError('');
      console.log('Login successful:', user);
      window.alert('Successfully Logged In');
      navigate('/');
  
    } catch (error) {
      setError('Error logging in');
      console.error('Error logging in:', error);
    }
  };
  

  return (
    <div className='log'>
      <div className="log1">
        <img src={logimage} alt="" />
      </div>
      <div className="log2">
        <img className='icon' src={icon} alt="" /><br />
        <img className='logo' src={logo} alt="" />
        <br />
        <div style={styles.container}>
      <form style={styles.form}>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <label style={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>
        <br />
        Don't have an account yet? <a href='./register'><span>Register</span></a>
        {error && <span style={styles.error}>{error}</span>}
      </form>
    </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '110px',
    marginTop: '140px',
    height: '100px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  label: {
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  input: {
    padding: '8px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '3px',
    fontSize: '14px',
    width: '100%',
  },
  button: {
    padding: '10px',
    border: 'none',
    borderRadius: '3px',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
};

export default Llogin;
