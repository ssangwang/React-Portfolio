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
  }
};

export default function About() {
  return (
    <div className='webBody'>
      <h1 style={styles.heading}>About</h1>
      <img src={pic} alt='profilepic' height='280px' width='365px' style={styles.profile}></img>
      <div>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      </div>
    </div>
  );
}
