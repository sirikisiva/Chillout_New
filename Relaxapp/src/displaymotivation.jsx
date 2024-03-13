import React, {useState} from 'react';
import { MotivationalSpeakersList } from './motivationalSpeakersList';
import MotivationalCards from './motivationalCards';

const DisplayMotivation = () =>{

    const [searchSpeaker, setSearchSpeaker] = useState("");
    const [filterSpeaker, setFilterSpeaker] = useState([]);
  
    const searchSpeakerForRelaxation = (e) => {
      const speaker = e.target.value.toLowerCase();
      setSearchSpeaker(speaker);
      const filtered = MotivationalSpeakersList.filter(
        (person) =>
        person.name.toLowerCase().includes(speaker) 
      );
      setFilterSpeaker(filtered);
    };
 
    return (
        <div>
        <div className="d-flex mb-4 justify-content-center">
          <div className="mt-4 search-width">
            <input
              placeholder="Search here for more motivational videos!"
              type="search"
              className="search-bar"
              value={searchSpeaker}
              onChange={searchSpeakerForRelaxation}
            ></input>
          </div>
        </div>
        <div className="d-flex">
          <div className="col-12 dive-relax">
            {filterSpeaker.length === 0 && searchSpeaker.length > 0 ? (
              <div>
                <p className="d-flex justify-content-center">
                  No matches found for "{searchSpeaker}"
                </p>
                <img className="no-match" src="./wrongsearch.png"></img>
              </div>
            ) : (
              <p>
                Dive into Relaxation with Our Collection of Motivational Speaker's Videos!
              </p>
            )}
          </div>
        </div>
        <div className="featuresBox">
          <MotivationalCards MotivationalSpeakersList={searchSpeaker.length ? filterSpeaker : MotivationalSpeakersList} />
        </div>
      </div>
    )

}

export default DisplayMotivation;