import React from 'react'
import HomeImage from '../images/Home-img.svg';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Hero = () => {
  return (
    <section className='home-wrapper'>
        <div className='text-wrapper'>
            <h1 className='welcome-text'>Empowering Water Management. <br/>
            Real-time Water Meter Insights.</h1>
            <Link to="/login">
                <Button variant="contained">Let's Get Started</Button>
            </Link>
        </div>
      <div className='image-wrapper'>
        <img src={HomeImage} className='home-img' alt='developers'/>
      </div>   
    </section>
  );
}

export default Hero
