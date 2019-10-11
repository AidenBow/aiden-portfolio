import React from 'react';
import './App.css';

import Profile from "./components/Profile"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="App">
      <Profile />
      <Projects />
      <img alt="under construction" style={{margin: "60px 0px", width: "100%", maxWidth: 300}} src="https://media.giphy.com/media/S5JSwmQYHOGMo/200.gif"></img>
    </div>
  );
}

export default App;
