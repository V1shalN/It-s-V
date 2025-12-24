import { useEffect, useState } from 'react';
import './topView.css';
import rangeroverTop from '../assets/rangerovertop.png';
import lamboTop from '../assets/lambotop.png';

const TopView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      centerImage: rangeroverTop,
      name: 'Range Rover',
      leftContent: [
        { icon: 'fa-solid fa-road', text: 'Off-road' },
        { icon: 'fa-solid fa-car', text: 'Luxury' },
        { icon: 'fa-solid fa-thermometer-full', text: 'Climate Control' },
        { icon: 'fa-solid fa-wheelchair', text: 'Accessibility' }
      ],
      rightContent: [
        { icon: 'fa-solid fa-gas-pump', text: 'Fuel Efficient' },
        { icon: 'fa-solid fa-gears', text: 'Advanced Tech' },
        { icon: 'fa-solid fa-wifi', text: 'Wi-Fi' },
        { icon: 'fa-solid fa-sun', text: 'Panoramic Sunroof' }
      ]
    },
    {
      centerImage: lamboTop,
      name: 'Lamborghini',
      leftContent: [
        { icon: 'fa-solid fa-gauge-high', text: 'Speed' },
        { icon: 'fa-solid fa-bolt', text: 'Power' },
        { icon: 'fa-solid fa-wind', text: 'Aerodynamics' },
        { icon: 'fa-solid fa-gem', text: 'Luxury' }
      ],
      rightContent: [
        { icon: 'fa-solid fa-plug', text: 'Hybrid' },
        { icon: 'fa-solid fa-shield-halved', text: 'Safety' },
        { icon: 'fa-solid fa-helmet-safety', text: 'Track Ready' },
        { icon: 'fa-solid fa-fire', text: 'Turbocharged' }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="topMain">
      <center className="aboutComp">
        <h1>Car <span className="usColor">Specifications</span></h1>
      </center>

      <div className="top">
        <div className="sideContent leftSide">
          {currentSlide.leftContent.map((item, index) => (
            <div key={index} className="sideItem">
              <i className={item.icon}></i>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="centerImageContainer">
          <img
            src={currentSlide.centerImage}
            alt={currentSlide.name}
            className="centerImage"
          />
        </div>

        <div className="sideContent rightSide">
          {currentSlide.rightContent.map((item, index) => (
            <div key={index} className="sideItem">
              <i className={item.icon}></i>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="carNameSection">
          <h1>{currentSlide.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default TopView;
