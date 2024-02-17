import React from 'react';
import './features.css';
import DisplayFriends from './displayfriends';
import FeatureComponent from './FeatureComponent';


const Friend = () => {

  return(
    <FeatureComponent className='d-flex'>
    
      <DisplayFriends></DisplayFriends>
  
    </FeatureComponent>
  )

}

export default Friend;
