import React from "react";

const ShowMeditationVideos = ({ meditationType, meditationVideo }) => {
  return (
    <div className="book-list">
      <div className="d-flex justify-content-center">{meditationType}</div>
      <div  className="d-flex justify-content-center">
        <video controls>
          <source src={meditationVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default ShowMeditationVideos;
