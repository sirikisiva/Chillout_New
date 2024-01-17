import React, { useState } from "react";
import "./userinfo.css";
import { useNavigate } from "react-router-dom";

const UserInfo = ({onClose}) => {

  
  return (
    <div className="popup">
       <div className="userinfo">
     <div className="d-flex">
     <div className="col-11 imgDiv"> <img className="imgQns" src="./happy.png"></img></div> 
      <div className="closeButton col-1">
      <button type="button" class="btn-close" aria-label="Close" onClick={onClose}></button>
      </div>
     </div>
      <div className="qnsBg">
      <div className="qns">We are here to help! Please let us know what challenges you are currently facing so that we can provide the best assistance possible.</div> 
      <form className="qnsForm">
        <div className="problemList">
          <input className="checkboxBg" type="checkbox"></input>
          <label className="problemType">Family Problems</label>
        </div>
        <div className="problemList">
          <input className="checkboxBg" type="checkbox"></input>
          <label className="problemType">Financial Problems</label>
        </div>
        <div className="problemList">
          <input className="checkboxBg" type="checkbox"></input>
          <label className="problemType">Job Problems</label>
        </div>
        <div className="problemList">
          <input className="checkboxBg" type="checkbox"></input>
          <label className="problemType">Love Problems</label>
        </div>
        <div className="problemList">
          <input className="checkboxBg" type="checkbox"></input>
          <label className="problemType">Other Problems</label>
        </div>
        <div className="qnsSubBtn">
          <button className="qnsButton">Submit</button>
        </div>
      </form>
      </div>
    </div>
    </div>
  );
};

export default UserInfo;
