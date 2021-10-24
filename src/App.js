import './App.scss';
import { AiFillGithub , AiFillLinkedin, AiFillMediumSquare} from 'react-icons/ai';
import React from 'react';

function App() {
  return (
    <div className="App">
      {/* <header>
        <img className = "header-image" src="" alt = "header logo"></img>
      </header> */}
      <div className="container-first">
      <section className="section-logo">
        <h1 className= "logo-name"><span className = "logo-para">Hey I'm </span><br/>Rakesh</h1>
        <div className="logo">
          <div className = "logo-image"></div>
        </div>
        <h1 className="logo-para--1">Software Engineer</h1>
        <h1 className="logo-para--2">Degen | Memer | Sports/E-sports enthusiast</h1>
      </section>
      <section className="socials">
        <div className = "socials-icons">
          <span className = "scaleOnHover marginLeftRight glowbg-icons"><AiFillGithub size = "3.5rem"/></span>
          <span className = "scaleOnHover marginLeftRight glowbg-icons" ><AiFillLinkedin size = "3.5rem"/></span>
          <span className = "scaleOnHover marginLeftRight glowbg-icons"><AiFillMediumSquare size = "3.5rem"/></span>
        </div>
      </section>
      <button className="connectBtn">
        Connect
      </button>
      </div>
      <div className="container-last">
      <section className="attributes">
        <div className="attributes-container"></div>
      </section>
      </div>
    </div>
  );
}

export default App;
