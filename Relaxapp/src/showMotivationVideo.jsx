import React from 'react';

const ShowMotivationVideo = ({close, motivationalSpeaker}) =>{

    return(
        <div>
        <div className="d-flex justify-content-end ">
        <button
            onClick={close}
            type="button"
            className="btn-close"
            aria-label="Close"
          ></button>
        </div>
        <div>{motivationalSpeaker.name}</div>
      </div>
    )

}

export default ShowMotivationVideo;