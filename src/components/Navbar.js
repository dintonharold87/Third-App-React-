import React from 'react';
import './Navbar.css';
// import '../../public/style.css'
import logo from "./reactjs-icon-1@2x.png";
export default function Navbar() {
  return (
    <div className="frame-4">
      <div className="frame-3">
        <img className="reactjs-icon" src={logo} alt="Logo" />
        <div className="react-factsinter-bold-turquoise-blue-22-3px">
          <span className="inter-bold-turquoise-blue-22-3px">ReactFacts</span>
        </div>
      </div>
      <p className="extra-titleinter-normal-link-water-16px">
        <span className="inter-normal-link-water-16px">
          React Course - Project 1
        </span>
      </p>
    </div>
  );
}
