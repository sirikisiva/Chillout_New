import React, { useState, useEffect, useRef } from "react";
import SideBar from "./SideBar";
import "./diary.css";
import DisplayDiary from "./displayDiary";

const Diary = () => {
  const [sidebarWidth, setSidebarWidth] = useState(5);
  const [featureBoxWidth, setFeatureBoxWidth] = useState(95);
  const [showDiaryInput, setShowDiaryInput] = useState(false);
  const displayDiaryRef = useRef(null);

  useEffect(() => {
    if (showDiaryInput) {
      displayDiaryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showDiaryInput]);

  const handleDiaryClick = () => {
    setShowDiaryInput(true);
  };
  const closeDiary = () => {
    setShowDiaryInput(false);
  };

  const handleMouseEnter = () => {
    setSidebarWidth(15);
    setFeatureBoxWidth(85);
  };

  const handleMouseLeave = () => {
    setSidebarWidth(5);
    setFeatureBoxWidth(95);
  };

  return (
    <div className="d-flex">
      <div
        className="side-menu"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ width: `${sidebarWidth}vw` }}
      >
        <SideBar />
      </div>
      <div
        className="motivation-menu"
        style={{ width: `${featureBoxWidth}vw` }}
      >
        <div className="d-flex">
          <div className="col-7 d-flex justify-content-center">
            <img
              style={{ width: "75%" }}
              src="./diaryWriting.png"
              alt="Diary Writing"
            ></img>
          </div>
          <div className="col-5 d-flex justify-content-center flex-column">
            <h2 className="books-heading">
              Unlock Happiness with Our Virtual Diary: Every Entry is a Spark of
              Joy!
            </h2>
            <p className="books-subheading">
              Immerse yourself in moments of happiness with our virtual diary
              feature, where each entry ignites a sense of bliss and
              fulfillment.
            </p>
          </div>
        </div>

        <div>
          <div className="d-flex justify-content-center diaryButton">
            <span onClick={handleDiaryClick} className="diaryBook">
              Click here to enter your happy moments!
            </span>
          </div>
          {showDiaryInput && (
            <div className="bg" ref={displayDiaryRef}>
              <DisplayDiary onClose={closeDiary} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Diary;
