import React, { useState } from "react";
import "./userinfo.css";
import { useNavigate } from "react-router-dom";

const UserInfo = ({ onClose }) => {
  const navigate = useNavigate();
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [birthdate, setBirthdate] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleHobbiesChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setHobbies((prevHobbies) => [...prevHobbies, value]);
    } else {
      setHobbies((prevHobbies) => prevHobbies.filter((hobby) => hobby !== value));
    }
  };

  const handleBirthdateChange = (event) => {
    setBirthdate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Do something with the collected user information
    // For example, send it to a server or perform further actions

    // After handling the information, close the popup
    onClose();
  };

  return (
    <div className="d-flex userinfo">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="labelName">Gender </label>
          <select
            name="gender"
            className="inputField"
            value={gender}
            onChange={handleGenderChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="field">
          <label className="labelName">Hobbies </label>
          <div>
            <label>
              <input
                type="checkbox"
                name="hobby"
                value="reading"
                checked={hobbies.includes("reading")}
                onChange={handleHobbiesChange}
              />
              Reading
            </label>
            <label>
              <input
                type="checkbox"
                name="hobby"
                value="sports"
                checked={hobbies.includes("sports")}
                onChange={handleHobbiesChange}
              />
              Sports
            </label>
            {/* Add more hobbies as needed */}
          </div>
        </div>

        <div className="field">
          <label className="labelName">DATE OF BIRTH </label>
          <input
            type="date"
            name="dob"
            className="inputField"
            value={birthdate}
            onChange={handleBirthdateChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserInfo;
