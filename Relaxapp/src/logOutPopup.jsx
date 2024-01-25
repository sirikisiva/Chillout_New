import React from "react";
import './logOut.css';

const LogOutPopup = ({ onClose }) => {
  return (
    <div className="logout-popup-container">
    <div className="logout-popup-content">

        <div className="closeButton col-1">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>
     
    </div>
  </div>
  );
};

export default LogOutPopup;
