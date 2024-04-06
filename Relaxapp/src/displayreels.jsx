import React from "react";

const DisplayReels = () =>{

    return(
       
        <div>
        <div className="d-flex mb-4 justify-content-center">
          <div className="mt-4 search-width">
            <input
              placeholder="Search here for more reels!"
              type="search"
              className="search-bar"
            //   value={searchSpeaker}
            //   onChange={searchSpeakerForRelaxation}
            ></input>
          </div>
        </div>
        <div className="d-flex">
          <div className="col-12 dive-relax">
         
          </div>
        </div>
        <div className="featuresBox">
          {/* <MotivationalCards MotivationalSpeakersList={searchSpeaker.length ? filterSpeaker : MotivationalSpeakersList} /> */}
        </div>
      </div>
    )

}

export default DisplayReels;