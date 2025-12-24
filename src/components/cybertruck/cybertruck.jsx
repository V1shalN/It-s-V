import React from 'react';
import './Cybertruck.css'; // Ensure you have the corresponding CSS file

const Cybertruck = () => {
  return (
    <div>
      <div className="truck">
        <div className="truck__body">
          <div className="truck__body truck__body--top">
            <div className="truck__window">
              <div className="truck__window-glass"></div>
            </div>
          </div>
          <div className="truck__body truck__body--mid">
            <div className="truck__mid-body"></div>
          </div>
          <div className="truck__body truck__body--bottom">
            <div className="truck__underpanel"></div>
            <div className="truck__rear-bumper"></div>
            <div className="truck__side-skirt"></div>
          </div>
        </div>
        <div className="truck__wheel truck__wheel--front">
          <div className="truck__wheel-arch"></div>
          <div className="truck__wheel-arch-trim truck__wheel-arch-trim--top"></div>
          <div className="truck__wheel-arch-trim truck__wheel-arch-trim--left"></div>
          <div className="truck__wheel-arch-trim truck__wheel-arch-trim--right"></div>
          <div className="truck-wheel">
            <div className="truck-wheel__rim">
              <div style={{ '--index': '0' }} className="truck-wheel__spoke"></div>
              <div style={{ '--index': '1' }} className="truck-wheel__spoke"></div>
              <div style={{ '--index': '2' }} className="truck-wheel__spoke"></div>
              <div style={{ '--index': '3' }} className="truck-wheel__spoke"></div>
              <div style={{ '--index': '4' }} className="truck-wheel__spoke"></div>
              <div style={{ '--index': '5' }} className="truck-wheel__spoke"></div>
              <div style={{ '--index': '6' }} className="truck-wheel__spoke"></div>
            </div>
          </div>
        </div>
        <div className="truck__wheel truck__wheel--rear">
          <div className="truck__wheel-arch"></div>
          <div className="truck__wheel-arch-trim truck__wheel-arch-trim--top"></div>
          <div className="truck__wheel-arch-trim truck__wheel-arch-trim--left"></div>
          <div className="truck__wheel-arch-trim truck__wheel-arch-trim--right"></div>
          <div className="truck-wheel">
            <div className="truck-wheel__rim">
              <div style={{ '--index': '0' }} className="truck-wheel__spoke"></div>
              <div style={{ '--index': '1' }} className="truck-wheel__spoke"></div>
              <div style={{ '--index': '2' }} className="truck-wheel__spoke"></div>
              <div style={{ '--index': '3' }} className="truck-wheel__spoke"></div>
              <div style={{ '--index': '4' }} className="truck-wheel__spoke"></div>
              <div style={{ '--index': '5' }} className="truck-wheel__spoke"></div>
              <div style={{ '--index': '6' }} className="truck-wheel__spoke"></div>
            </div>
          </div>
        </div>
        <div className="truck__headlight"></div>
        <div className="truck__taillight"></div>
        <div className="truck__indicator"></div>
        <div className="truck__foglight"></div>
      </div>
    </div>
  );
};

export default Cybertruck;
