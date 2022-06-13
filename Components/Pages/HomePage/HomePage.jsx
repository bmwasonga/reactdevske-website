import React from 'react'
import logo from '../../../public/reactdevske.svg';
import Image from 'next/image';

function HomePage() {
    return (
        <div className="App">
           <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="App-logo">
          <Image src={logo} alt="logo" width={400} height={400} />
        </div>
        
        <p>
          Contribute to creating The Reactjs Developer Community Kenya Website Here 
        </p>
        <a
          className="App-link"
          href="https://github.com/reactdeveloperske/reactdevske-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute on Github
        </a>
        <a
          className="App-link"
          href="http://bit.ly/joinreactdevske"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Our Telegram Community Chat
        </a>
      </header>
        </div>
    )
}

export default HomePage;
