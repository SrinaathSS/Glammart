import './Llogin.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import logimage from '../Images/loginimage.jpg'
import logo from '../Images/flogo.png';
import icon from '../Images/vvicon.png';

const Rregister = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
      });
      const [error, setError] = useState('');
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        setUserData({
          ...userData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await fetch('http://localhost:8080/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
          });
      
          if (!response.ok) {
            throw new Error('Failed to register');
          }
      
          console.log('User registered successfully:', userData);
          setError('');
          window.alert("Redirecting to Login Page")
          navigate('/login'); 
      
          setUserData({
            email: '',
            password: ''
          });
      
        } catch (error) {
          setError('Error registering user');
          console.error('Error registering user:', error);
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
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
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
            value={userData.password}
            onChange={handleChange}
            style={styles.input}
          />
        </label>
        <br />
        <button type="submit" style={styles.button}>
          Register
        </button>
        <br />
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
  

export default Rregister;
