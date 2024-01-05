import React, { useState } from "react";
import "./userinfo.css";
import { useNavigate } from "react-router-dom";

const UserInfo = ({onClose}) => {

  
  return (
    <div className="popup">
       <div className="userinfo">
      <div className="closeButton">
      <button type="button" class="btn-close" aria-label="Close" onClick={onClose}></button>
      </div>
      <form className="qnsForm">
      

      
      </form>
    </div>
    </div>
  );
};

export default UserInfo;
