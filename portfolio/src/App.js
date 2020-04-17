import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Profile from "./components/Profile"
import Projects from "./components/Projects"

function App() {
  return (
    <div className="App">
      <Profile />
      <div className="bodyContainer">
        <Projects />
        {/* <img alt="under construction" style={{margin: "60px 0px", width: "100%", maxWidth: 200}} src="https://media.giphy.com/media/S5JSwmQYHOGMo/200.gif"></img> */}
        <p style={{padding: "40px 0 30px 0"}}>I'm learning more at Lambda School! Visit me often to see my latest projects!</p>
      </div>
    </div>
  );
}

export default App;
