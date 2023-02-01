import React from 'react';
import '../styles/body.css'
import pic from '../images/ssssss.jpg'

const styles = {
  heading: {
    textAlign: 'center',
  },
  profile: {
    borderRadius: '50%',
    margin: '20px'
  },
  bio: {
    margin:'30px',
    border: 'solid 1px',
    padding: '10px',
    backgroundColor: '#B8B8AA'
  }
};

export default function About() {
  return (
    <div className='webBody'>
      <h1 style={styles.heading}>About</h1>
      <img src={pic} alt='profilepic' height='280px' width='365px' style={styles.profile}></img>
      <div>
        <p style={styles.bio}>
          I've been interested in coding for as long as I've learned what the internet is. During my childhood -- probably when I was 6-8 years old, many pesky overlays would come up on websites asking me to pay to remove them, and I wanted them gone. That's when I first discovered what HTML was. As a person, I find myself peeved not knowing how something works. I've found myself taking products apart at a young age -- and even now, hoping in the slightest chance I can understand what is going on. About 90% of the time I could never put those products back together. Yeah, I was scolded at many times for that. As I grew into my adulthood my curiosity has only grown, and I yearn to understand things I couldn't as a child. The internet is one of those tall mountains I wish to conquer, and my journey will start here, with this Portfolio.
        </p>
      </div>
    </div>
  );
}
