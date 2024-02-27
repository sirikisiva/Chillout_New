import React from 'react';
import MeditationCards from './meditationCards';
import './meditation.css';

const DisplayMeditation = () =>{


    const meditationList = [
        {
          id: 1,
          img: "meditationImageOne.jpg",
          meditationType: "Letting Go into Sleep",
          meditationVideo : "https://www.google.com/search?q=letting+go+into+sleep+meditation+5+minutes+video++download+for+free&sca_esv=41bf5eb459b77330&rlz=1C1CHBF_enIN1016IN1016&sxsrf=ACQVn08QATDBQzJ-8P0Bj_QOWCxdAj0XZw%3A1708787239174&ei=JwbaZdCkCvDN1e8PoIGwqA4&ved=0ahUKEwiQ1IzDoMSEAxXwZvUHHaAADOUQ4dUDCBA&uact=5&oq=letting+go+into+sleep+meditation+5+minutes+video++download+for+free&gs_lp=Egxnd3Mtd2l6LXNlcnAiQ2xldHRpbmcgZ28gaW50byBzbGVlcCBtZWRpdGF0aW9uIDUgbWludXRlcyB2aWRlbyAgZG93bmxvYWQgZm9yIGZyZWVIll9QwA1YqV1wAXgAkAEAmAGMAqABwSCqAQYwLjI2LjG4AQPIAQD4AQGYAhOgAuIWwgIKEAAYRxjWBBiwA8ICBBAjGCfCAgcQIRgKGKABwgIFECEYnwXCAgUQIRigAcICBBAhGAqYAwCIBgGQBgiSBwYxLjE2LjI&sclient=gws-wiz-serp#"
        },
        {
          id: 2,
          img: "meditationImageTwo.jpg",
          meditationType: "Easing Depression",
        },
        {
          id: 3,
          img: "meditationImageThree.jpg",
          meditationType: "Anxiety Release",
        },
        {
          id: 4,
          img: "meditationImageFour.jpg",
          meditationType: "Breath Counting Meditation",
        },
        {
          id: 5,
          img: "meditationImageFive.jpg",
          meditationType: "Zen Meditation",
        },
        {
          id: 6,
          img: "meditationImageSix.jpg",
          meditationType: "Nature Meditation",
        },
        {
          id: 7,
          img: "meditationImageOne.jpg",
          meditationType: "Mantra Meditation",
        },
        {
          id: 8,
          img: "meditationImagetwo.jpg",
          meditationType: "Gratitude Meditation",
        },
      ];

 
    return (
        <div>
        <div className="d-flex mb-4 justify-content-center">
          <div className="mt-4 search-width">
            <input
              placeholder="Search here for more meditation videos!"
              type="search"
              className="search-bar"

            ></input>
          </div>
        </div>
        <div className="d-flex">
          <div className="col-12 dive-relax">
            Dive into Relaxation with Our Collection of Meditation Videos!
          </div>
        </div>
        <div className="featuresBox">
        <MeditationCards meditationList = {meditationList}/>
        </div>
      </div>
    )

}

export default DisplayMeditation;