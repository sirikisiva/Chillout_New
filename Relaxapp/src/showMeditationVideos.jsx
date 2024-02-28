import React from "react";

const ShowMeditationVideos = ({ medType, mediVideo, close }) => {
  return (
    <div>
      <div className="d-flex justify-content-end ">
      <button
          onClick={close}
          type="button"
          className="btn-close"
          aria-label="Close"
        ></button>
      </div>
       <div className="med-list">
      <div className="d-flex justify-content-center medType-heading">{medType}</div>
      <div  className="d-flex justify-content-center video">
        <video controls className="videoWidth">
          <source src={mediVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    </div>
  );
};

export default ShowMeditationVideos;
