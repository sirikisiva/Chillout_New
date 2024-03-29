import React, {useState} from 'react';
import './features.css';
import './motivation.css';
import DisplayMotivation from './displaymotivation';
import SideBar from './SideBar';


const Motivation = () => {

  const [sidebarWidth, setSidebarWidth] = useState(5);
  const [featureBoxWidth, setFeatureBoxWidth] = useState(95)

  const handleMouseEnter = () => {
    setSidebarWidth(15);
    setFeatureBoxWidth(85);
  };

  const handleMouseLeave = () => {
    setSidebarWidth(5);
    setFeatureBoxWidth(95);
  };


  return(
    <div className='d-flex'>
      <div className='side-menu' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
      style={{ width : `${sidebarWidth}vw`}}>
       <SideBar/>
      </div>
      <div className='motivation-menu'  style={{ width : `${featureBoxWidth}vw`}}>
      <div className="d-flex">
          <div className="col-7 d-flex justify-content-center">
            <img className='widthMotivation' src="./speakMotivation.png"></img>
          </div>
          <div className="col-5 d-flex justify-content-center flex-column">
            <div className="books-heading">Supercharge Your Life - Hear Our Motivational Speaker's Wisdom!</div>
            <div className="books-subheading">Motivational speakers inspire positivity, goal-setting, confidence, and resilience, fostering personal growth and well-being for a more fulfilling life.</div>
          </div>
        </div>
      <DisplayMotivation></DisplayMotivation>
      </div>
     
    </div>
  )

}

export default Motivation;
