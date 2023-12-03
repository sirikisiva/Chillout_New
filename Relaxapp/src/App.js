import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Signup from './Signup'
import { BrowserRouter as Router, Route, Link, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="container-fluid bg">
      <div className="d-flex justify-content-center pdng">
        <img src="new-logo.png"></img>
      </div>
      <div className="d-flex justify-content-center title-name">CHILL OUT</div>
      <div className="d-flex justify-content-center tag-name">
        from negative emotions
      </div>
      <div class="sign-in">Get Started into the app</div>
      {/* <Link to="/signup" className="sign-in">Sign up</Link> */}
      {/* <BrowserRouter>
        <Signup></Signup>
      </BrowserRouter> */}
    
    </div>
  );
}

export default App;
