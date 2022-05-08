import handwave from "./Images/hand_wave.png";
import blur from "./Images/blur.png";
import heart from "./Images/heart.webp";
import heart1 from "./Images/ai.webp";
import heart2 from "./Images/playlistify.png";
import diabetes from "./Images/diabetes.png";
// import './App.css';
import React from 'react';
import "./index.css";
import navbar from "./Components/navbar.js";


function App() {
  return (
    
    <div className="home-page-all">
      
      {navbar()}
      <div className="home-page-container outer">
       <div className="home-text top">
         <h1 >Hello, I'm <span className="name green">Saksham</span> <img src={handwave} alt="hello" className='hand-wave'/> </h1> 
         <h1>I am a Frontend Engineer </h1>
         <h1>Currently based in India. Doing what I absolutely <span className="pink"> <a href="https://www.youtube.com/watch?v=YWcrfp_dXKM" className="pink"> love.</a></span></h1>
       </div>
       <div className="gradient below">
         <img src={blur} alt="blur" className="blur" />
       </div>
      </div>
    
      <div className="second-section"  id="work">
        Find below some valuable projects 💼 that I worked on
        <p> Click on these Boxes for more info! </p> 
      </div>
      <div className="container">
        <ul className="card-list">
          <a href=""> <li className="card1 card"><h2>Heart Disease Prediction</h2></li> </a>
          <a href=""> <li className="card2 card"><h2> Diabetes Prediction</h2></li> </a>
          <a href=""> <li className="card3 card"><img src={heart1}></img></li> </a>
          <a href=""> <li className="card4 card" ><img src={heart2}></img></li> </a>
        </ul>
      </div>
      <div className="about-section">
        <div className="about" id="about">.</div>
        <h1>About Me</h1>
        <p>On my second year of Information Technology Bachelor and <br/> learning new technologies. <br />
           <span className="aboutme green">I build apps with beautiful UI/UX.</span> Doing what I absolutely <span className="pink">love.</span>
        </p>
      </div>
      <div className="stackwork">
        <div className="skills">
          
        </div>
        <div className="liner">
           READY TO CRAFT MEANINGFUL DIGITAL EXPERIENCES.
        </div>
      </div>
      <div className="bottom-bar" id="contact">
        <div className="education">
          <h1>Education</h1>
          <p>2020-2024. <br /> <span className="grey">Information Technology. <br /> Rajiv Gandhi Institute of Technology, Mumbai</span> </p>
        </div>
        <div className="contact">
          <h1>Contact ↗️</h1>
          <ul className="socials">
            <li><a href="https://github.com/sakshamgurbhele" target="_blank" className="capsule">Github</a> </li>
            <li><a href="https://twitter.com/sakshamm_9" className="capsule">Twitter</a></li>
            <li><a href="https://www.linkedin.com/in/sakshamgurbhele/" className="capsule">LinkedIn</a> </li>
            <li><a href="mailto:sakshamm@duck.com" className="capsule">@mail</a> </li>
            <li><a href="https://bit.ly/3vHHXof" className="capsule">Resume</a> </li>
          </ul>
        </div>
      </div>
    </div>
    

  );
}



export default App;
