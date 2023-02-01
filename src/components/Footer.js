import React from "react";
import logo from './images/GitHub-logo.png'

const styles = {
    footer: {
      margin: '20px',
      textAlign: 'center',
    }
  };

export default function Footer(){

return (
    <div style={styles.footer}>
        <a href='https://github.com/ssangwang?tab=repositories'>
        <img src={logo} height='50px' width='80px' alt='githublogo'></img>
        </a>
    </div>
)
    
}