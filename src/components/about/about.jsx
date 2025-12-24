import { useState } from "react";
import "./about.css";
import Cybertruck from "../cybertruck/Cybertruck";

// Range Rover
import sliderange from "../assets/sliderange.png";
import rangerover1 from "../assets/slidedownRangerover1.png";

// Lamborghini
import slidelambo from "../assets/Lambo.png";
import slidelambo1 from "../assets/Lambo1.png";
import slidelambo2 from "../assets/Lambo2.png";

// Rolls Royce
import sliderolls from "../assets/sliderolls-royce.png";
import sliderolls1 from "../assets/rolls.jpg";

// Wagon
import slidegwagon from "../assets/Wagon.png";

import slidebugatti from "../assets/slidebugatti.png";
import slideaudi from "../assets/slideaudi.png";
import slidegtr from "../assets/slidegtr.png";
import slidefortuner from "../assets/slidefortuner.png";

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCar, setSelectedCar] = useState(null);

  const images = [
    {
      src: sliderange,
      name: "Range Rover",
      details:
        "The Range Rover stands as a symbol of luxury, performance, and versatility.",
      additionalImages: [rangerover1, rangerover1],
    },
    {
      src: slidelambo,
      name: "Lamborghini",
      details:
        "Lamborghini represents extreme performance, futuristic design, and power.",
      additionalImages: [slidelambo1, slidelambo2],
    },
    {
      src: sliderolls,
      name: "Rolls Royce",
      details:
        "Rolls Royce is the ultimate luxury vehicle with unmatched comfort.",
      additionalImages: [sliderolls1, sliderolls1],
    },
    {
      src: slidegwagon,
      name: "G Wagon",
      details: "G Wagon combines luxury with hardcore off-road capability.",
      additionalImages: [slidegwagon, slidegwagon],
    },
    {
      src: slidebugatti,
      name: "Bugatti",
      details: "Bugatti is known for extreme speed and engineering excellence.",
      additionalImages: [slidebugatti, slidebugatti],
    },
    {
      src: slideaudi,
      name: "Audi",
      details: "Audi blends modern technology with sporty design.",
      additionalImages: [slideaudi, slideaudi],
    },
    {
      src: slidegtr,
      name: "GTR",
      details: "Nissan GTR is a legend in performance sports cars.",
      additionalImages: [slidegtr, slidegtr],
    },
    {
      src: slidefortuner,
      name: "Fortuner",
      details: "Toyota Fortuner is a powerful and reliable SUV.",
      additionalImages: [slidefortuner, slidefortuner],
    },
  ];

  const visibleImagesCount = 3;
  const maxIndex = images.length - visibleImagesCount;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const selectCar = (car) => {
    setSelectedCar(selectedCar?.name === car.name ? null : car);
  };

  const handleBuyNow = () => {
    alert(`Booking confirmed for ${selectedCar.name}`);
  };

  return (
    <div className="aboutmain">
      <div className="aboutCyber">
        <Cybertruck />
      </div>

      <div className="aboutSection">
        <p className="aboutP">Model</p>

        <div className="aboutCarSlider">
          <button className="sliderButton" onClick={goToPrevious}>
            ❮
          </button>

          <div className="sliderContainer">
            <div
              className="slider"
              style={{
                transform: `translateX(-${
                  (100 / visibleImagesCount) * currentIndex
                }vw)`,
                width: `${(images.length * 100) / visibleImagesCount}vw`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="sliderItem"
                  style={{ width: `${100 / visibleImagesCount}vw` }}
                  onClick={() => selectCar(image)}
                >
                  <img src={image.src} alt={image.name} />
                  <p>{image.name}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="sliderButton" onClick={goToNext}>
            ❯
          </button>
        </div>

        {selectedCar && (
          <div className="carDetails">
            <h2>{selectedCar.name}</h2>
            <div className="carDetailsContent">
              <img src={selectedCar.additionalImages[0]} />
              <p>{selectedCar.details}</p>
              <img src={selectedCar.additionalImages[1]} />
            </div>

            <button className="buyButton" onClick={handleBuyNow}>
              <span className="text-default">Book Now</span>
              <span className="text-hover">Test Drive</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
