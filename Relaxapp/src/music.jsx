import React, { useState, useEffect } from 'react';
import './features.css';
import "./music.css"
import DisplayMusic from './displaymusic';
import SideBar from './SideBar';
import { AudioList } from './AudioList';


const Music = () => {

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
    const [audioData, setAudioData] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
  
    useEffect(() => {
      fetchAudioData();
    }, []);
  
    const fetchAudioData = async () => {
      try {
        // Dummy API URL for audio data
        const response = await fetch('https://dummyapi.com/audio');
        const data = await response.json();
        console.log(data);
        setAudioData(data);
      } catch (error) {
        console.error('Error fetching audio data:', error);
      }
    };
  
    const togglePlay = () => {
      setIsPlaying(!isPlaying);
    };
  return(
    <div className='d-flex' >
      <div className='side-menu' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
      style={{ width : `${sidebarWidth}vw`}}>
        <SideBar/>
      </div>
      <div className='music-menu' style={{ width : `${featureBoxWidth}vw`}}>   
        <div className='center-content'>
        <DisplayMusic></DisplayMusic>
        </div>
        <div className='right-content'>
           <div className='topBar'>
          <div className='topBarContent'>
          <input type='search' className='searchBox' disabled placeholder='Search'></input>
          <div className='topBarBtns'>
          {/* <img src="./heart.png" alt='liked' style={{width:"1.5em",height:"1.5em"}}/>
          <img src="./menu.png" alt='widget' style={{width:"1.5em",height:"1.5em"}}/> */}
          <button className='upgradeBtn'>Upgrade</button>
          </div>
          </div>
         
        </div>
          <AudioList/>
        </div>
      </div>
      
    </div>
  )

}

export default Music;
