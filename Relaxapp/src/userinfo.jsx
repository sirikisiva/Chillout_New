import React, { useState } from "react";
import "./userinfo.css";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const [gender, setGender] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="d-flex userinfo">
      <form className="qnsForm">
        <div>
          <label className="labelText">Select your gender:</label>
          <div className="d-flex">
            <div>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={handleGenderChange}
                />
                <span className="choices">Male</span>
              </label>
            </div>

            <div className="mrgn">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={handleGenderChange}
                />
                <span className="choices">Female</span>
              </label>
            </div>

            <div className="mrgn">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={gender === "other"}
                  onChange={handleGenderChange}
                />
                <span className="choices">Other</span>
              </label>
            </div>
          </div>
        </div>
        <div className="qnsMargin">
          <label className="labelText">Date of Birth </label>
          <input type="date" name="dob" className="qnsinputField" />
        </div>
        <div className="qnsMargin">
          <label className="labelText">How do you prefer to relax? </label>
          <div className="d-flex">
            <div>
              <label>
                <input type="radio" name="relaxationPreference" />
                <span className="choices">Alone</span>
              </label>
            </div>
            <div className="mrgn">
              <label lassName="mrgn">
                <input type="radio" name="relaxationPreference" />
                <span className="choices"> With Friends</span>
              </label>
            </div>
          </div>
        </div>
        <div className="qnsMargin">
          <label className="labelText">How do you relax? </label>
          <div className="d-flex">
            <div>
              {" "}
              <label>
                <input
                  type="checkbox"
                  name="relaxationMethod"
                  value="meditation"
                />
                <span className="choices">Meditation</span>
              </label>
            </div>
            <div className="mrgn">
              {" "}
              <label>
                <input
                  type="checkbox"
                  name="relaxationMethod"
                  value="reading"
                />
                <span className="choices">Reading</span>
              </label>
            </div>
            <div className="mrgn">
              {" "}
              <label>
                <input
                  type="checkbox"
                  name="relaxationMethod"
                  value="listeningToMusic"
                />
                <span className="choices">Listening to Music</span>
              </label>
            </div>
            <div className="mrgn">
              {" "}
              <label>
                <input
                  type="checkbox"
                  name="relaxationMethod"
                  value="exercise"
                />
                <span className="choices">Exercise</span>
              </label>
            </div>
          </div>
        </div>
        <div className="qnsMargin">
          <label className="labelText">
            What meditation methods do you enjoy?
          </label>
          <div className="d-flex">
            <div>
              {" "}
              <label>
                <input type="checkbox" name="meditationMethods" />
                <span className="choices">Mindfulness</span>
              </label>
            </div>
            <div className="mrgn">
              {" "}
              <label>
                <input type="checkbox" name="meditationMethods" />
                <span className="choices"> Guided Meditation</span>
              </label>
            </div>
            <div className="mrgn">
              {" "}
              <label>
                <input type="checkbox" name="meditationMethods" />
                <span className="choices"> Transcendental Meditation</span>
              </label>
            </div>
          </div>
        </div>

        <div className="qnsMargin">
          <label className="labelText">How long do you prefer your meditation sessions to be?</label>
          <div className="d-flex">
            <div>
              {" "}
              <label>
                <input type="radio" name="preferredDuration" />
                <span className="choices"> Short (5-10 minutes)</span>
              </label>
            </div>
            <div className="mrgn">
              {" "}
              <label>
                <input type="radio" name="preferredDuration" />
                <span className="choices"> Medium (15-20 minutes)</span>
              </label>
            </div>
            <div className="mrgn">
              {" "}
              <label>
                <input type="radio" name="preferredDuration" />
                <span className="choices">Long (30+ minutes)</span>
              </label>
            </div>
          </div>
        </div>

        <div className="qnsMargin">
          <label className="labelText">What is your experience level with meditation?</label>
          <div className="d-flex">
            <div>
              {" "}
              <label>
                <input type="radio" name="experienceLevel" />
                <span className="choices">Beginner</span>
              </label>
            </div>
            <div className="mrgn">
              {" "}
              <label>
                <input type="radio" name="experienceLevel" />
                <span className="choices">Intermediate</span>
              </label>
            </div>
            <div className="mrgn">
              {" "}
              <label>
                <input type="radio" name="experienceLevel" />
                <span className="choices">Advanced</span>
              </label>
            </div>
          </div>
        </div>

        <div className="qnsMargin">
          <label className="labelText">What is your favorite book genre?</label>
          <div className="d-flex">
            <div>
              {" "}
              <label>
                <input type="checkbox" name="favoriteGenre" />
                <span className="choices"> Fiction</span>
              </label>
            </div>
            <div className="mrgn">
              {" "}
              <label>
                <input type="checkbox" name="favoriteGenre" />
                <span className="choices"> Non-Fiction</span>
              </label>
            </div>
            <div className="mrgn">
              {" "}
              <label>
                <input type="checkbox" name="favoriteGenre" />
                <span className="choices">Mystery</span>
              </label>
            </div>
          </div>
        </div>

        <div className="qnsMargin">
          <label className="labelText">Do you find it important to do exercise for relaxation?</label>
          <div className="d-flex">
            <div>
              <label>
                <input type="radio" name="exerciseImportance" />
                <span className="choices">Yes</span>
              </label>
            </div>
            <div className="mrgn">
              {" "}
              <label>
                <input type="radio" name="exerciseImportance" />
                <span className="choices">No</span>
              </label>
            </div>
          </div>
        </div>
        <div className="qnsMargin">
          <label className="labelText"> What kind of music do you prefer to relax yourself? </label>
          <div className="d-flex">
            <div>
              {" "}
              <label>
                <input type="checkbox" name="preferredMusic" />
                <span className="choices">Classical</span>
              </label>
            </div>
            <div className="mrgn">
              {" "}
              <label>
                <input type="checkbox" name="preferredMusic" />
                <span className="choices">Ambient</span>
              </label>
            </div>

            <div className="mrgn">
              {" "}
              <label>
                <input type="checkbox" name="preferredMusic" />
                <span className="choices">Soothing</span>
              </label>
            </div>
          </div>
        </div>

        <div>Submit</div>
      </form>
    </div>
  );
};

export default UserInfo;
