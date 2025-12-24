import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './hero.css';

// ✅ Correct image imports
import rangerover from '../assets/rangerover.png';
import rolls from '../assets/rolls.jpg';
import bugatti from '../assets/bugati.png';
import bmw from '../assets/bmw.png';
import audi from '../assets/audi.png';
import mercedes from '../assets/Mercedes.png';
import pagani from '../assets/Pagani.png';
import lamborghini from '../assets/lamborghini.png';
import toyota from '../assets/toyota.png';
import ford from '../assets/ford.png';

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    rangerover,
    rolls,
    bugatti,
    bmw,
    audi,
    mercedes,
    pagani,
    lamborghini,
    toyota,
    ford,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []); 

  return (
    <div className="mainHero">
      <div className="heroContainer">
        <div className="heroContent">
          <h1>
            <span className="Welcome">Welcome</span> To Car Traders Online Shop
          </h1>

          <h3>
            World&apos;s leading automotive brand <br />
            <TypeAnimation
              sequence={[
                'BMW', 1000,
                'Audi', 1000,
                'Mercedes', 1000,
                'Bugatti', 1000,
                'Rolls-Royce', 1000,
                'Pagani', 1000,
                'Range Rover', 1000,
                'Lamborghini', 1000,
                'Toyota', 1000,
                'Ford', 1000,
              ]}
              speed={50}
              repeat={Infinity}
              style={{ fontSize: '2.5rem', color: 'green' }}
            />
          </h3>

          <p>All types of cars are available.</p>

          <a href="#book">
            <button className="heroBtn">
              <span className="span-mother">
                <span>B</span><span>O</span><span>O</span><span>K</span>
              </span>
              <span className="span-mother2">
                <span>T</span><span>E</span><span>S</span><span>T</span>
                <span>D</span><span>R</span><span>I</span><span>V</span><span>E</span>
              </span>
            </button>
          </a>
        </div>

        <div className="heroImgSection">
          <div className="squareInner"></div>
          <div className="squareInner1"></div>

          <div className="heroCarImg">
            <img
              src={images[currentImageIndex]}
              alt="Car slideshow"
              className="slideshowImage"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
