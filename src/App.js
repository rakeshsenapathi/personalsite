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
        <h1 className="logo-para--2">web3 ethusiast | nft | sports</h1>
      </section>
      <section className="socials">
        <div className = "socials-icons">
          <a className = "hyperlink scaleOnHover marginLeftRight" target="_blank" rel="noopener noreferrer" href = "https://github.com/rakeshsenapathi"><AiFillGithub size = "3.5rem"/></a>
          <a className = "hyperlink scaleOnHover marginLeftRight" target="_blank" rel="noopener noreferrer" href = "https://www.linkedin.com/in/rakeshsenapathi"><AiFillLinkedin size = "3.5rem"/></a>  
          <a className = "hyperlink scaleOnHover marginLeftRight" target="_blank" rel="noopener noreferrer" href = "https://medium.com/@rakeshsenapathi"><AiFillMediumSquare size = "3.5rem"/></a>
        </div>
      </section>
      <a className = "hyperlink scaleOnHover marginLeftRight" href = "mailto:rakeshsenapathi@gmail.com">
        <button className="connectBtn">Send a mail</button>
      </a>
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
