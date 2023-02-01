import React, { useState } from 'react';
import '../styles/style.css'


import {validateEmail } from '../utils/helpers';

const styles = {
  heading: {
    textAlign: 'center',
  },
  formM :{
    border: 'solid 1px',
    backgroundColor: '#B8B8AA'
  }
};

function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    }
  };

  const handleFormSubmit = (e) => {

    e.preventDefault();


    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');

      return;

    }

    setUserName('');
    setEmail('');
  };

  return (
    <div className='webBody'>
      <h1 style={styles.heading}>Contact</h1>
      <form className="form"> 
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
        />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
