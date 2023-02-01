import React from 'react';
import '../styles/body.css';
import axeGd from '../images/axegrinder.png';
import ordB from '../images/oordblock.png'


const styles = {
  heading: {
    textAlign: 'center',
  },
  projects: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
};

export default function Projects() {
  return (
    <div className='webBody'>
      <h1 style={styles.heading}>Projects</h1>
      <div style={styles.projects}>

        <a href='https://github.com/ssangwang/Tech-Blog-Challenge'>
        <img src='https://media2.giphy.com/media/S3KhNnHajzZ4voJKYP/giphy.gif?cid=ecf05e47ya263vnix8224ptohh6u0a4hllfendm2pttwpzx2&rid=giphy.gif&ct=g' alt='NoteBook' width='320px' height='320px'></img>
        <p>Note Taker Application</p>
        </a>

        <a href='https://github.com/ssangwang/Module-3-Challenge'>
          <img src='https://media2.giphy.com/media/It8qXjo51Rgek/giphy.gif?cid=ecf05e47kn0z62jd429zf4mn7hu4de87fytsloeh33pli93w&rid=giphy.gif&ct=g' alt='password' width='320px' height='320px'></img>
          <p>Password Generator</p>
        </a>
        
        <a href='https://github.com/ssangwang/Work-Day-Scheduler'>
          <img src='https://media3.giphy.com/media/dL2apMgOC1EW4UxkWV/giphy.gif?cid=ecf05e47na3ilkoj9n20zi6cb1wrr73di583gubkpjgnc0b7&rid=giphy.gif&ct=g' alt='Calender' width='320px' height='320px'></img>
          <p> Work Day Scheduler</p>
        </a>
        
        <a href='https://github.com/ssangwang/Weather-Forecast'>
          <img src='https://media0.giphy.com/media/5bnpFBKcGArJrwHwaX/giphy.gif?cid=ecf05e47akmid2isty8e47zvirgtmpw5mngzt69o1q6arty2&rid=giphy.gif&ct=g' alt='Forecast' width='320px' height='320px'></img>
          <p> Weather Forecast</p>
        </a>
        
        <a href='https://github.com/Nick-Menzhuber/axe-grinder'>
          <img src={axeGd} alt='AxeGrinder' width='320px' height='320px'></img>
          <p> Axe Grinder </p>
        </a>
        
        <a href='https://github.com/Bjornton/project1_grph_DictionarySite'>
          <img src={ordB} alt='Ordbok' width='320px' height='320px'></img>
          <p> OrdBok </p>
        </a>
        
      </div>
    </div>
  );
}
