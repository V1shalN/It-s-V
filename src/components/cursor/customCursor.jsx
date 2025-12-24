import React, { useState, useEffect } from 'react';
import "./customCursor.css"; // Import CSS for styling the cursor

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const updateCursor = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {

    document.addEventListener("mousemove", updateCursor);
    return () => {
      document.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  return (
    <div
      className="customCursor"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`
      }}
    />
  );
};

export default CustomCursor;
