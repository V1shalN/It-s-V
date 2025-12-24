import { useState } from 'react';
import "./navbar.css";

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Hide dropdown when mouse leaves
  const hideDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <nav>
      <div className="navContainer">
        <div className="navLogoSvg">
          <a href="#">
            ITS<i className="fa-brands fa-vine navLogo" />I
          </a>
        </div>
        <div className="navBarli">
          <ul>
            {/* "Buy" item with dropdown */}
            <li 
              onMouseEnter={toggleDropdown}
              onMouseLeave={hideDropdown}
              className="navItemWithDropdown navopt"
            >
              <a href=""> Buy</a> 
              {dropdownVisible && (
                <ul className="dropdownMenu">
                  <li><a href="#">Sports Cars</a></li>
                  <li><a href="#">Luxury Cars</a></li>
                  <li><a href="#">Convertible Cars</a></li>
                  <li><a href="#">Hatchback Cars</a></li>
                  <li><a href="#">Sedan Cars</a></li>
                  <li><a href="#">Coupe Cars</a></li>
                  <li><a href="#">Suv Cars</a></li>
                  <li><a href="#">Minivan Cars</a></li>
                  <li><a href="#">Wagon Cars</a></li>
                  <li><a href="#">Crossover Cars</a></li>
                  <li><a href="#">Compact Cars</a></li>
                  <li><a href="#">Electric Cars</a></li>
                  <li><a href="#">Hybrid Cars</a></li>

                </ul>
              )}
            </li>
            <li className='navopt'>
              <a href="#" >Model</a>
            </li>
            <li className='navopt'>
              <a href="#">Reviews</a>
            </li>
            <li className='navopt'>
              <a href="#">Car <span className='navSecond'>Specifications</span></a>
            </li>
            <li className='navopt'>
              <a href="#">About <span className='navSecond'>Us</span> </a>
            </li>
            <li className='navopt'>
              <a href="#">Contact <span className='navSecond'>Us</span> </a>
            </li>
          </ul>
        </div>
        <div className="navBarSocial">
          <ul>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-x-twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
