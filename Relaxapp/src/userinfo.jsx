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
      <div className="qns">We are here to help! Please let us know what challenges you are currently facing so that we can provide the best assistance possible.</div> 
      <form className="qnsForm">
      
      
      </form>
    </div>
    </div>
  );
};

export default UserInfo;
