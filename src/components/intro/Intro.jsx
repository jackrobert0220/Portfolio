import "./intro.scss"
import Typewriter from "typewriter-effect";

export default function Intro() {


  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/guitar-crop.png" alt="Jack Glazer"/>
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hello, I'm</h2>
            <h1>Jack Glazer</h1>
            <h3>Software Developer 💻</h3>
            <h3><span>
              <Typewriter 
              
              options={{ 
              strings:["Rock Musician", "Dog Father"],
              autoStart:true,
              delay:100,
              loop:true
              }} 
              /> 
            </span></h3>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt="down"/>
          </a>
        </div>
    </div>
  )
}
