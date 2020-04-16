import React from "react"
import { Card, Icon, Image } from 'semantic-ui-react'
const Projects = () => {
    return (
        <div>
        <div className="logoContainer">
            <div><img src={require("../img/html5.png")} style={{width: "40%", position: "relative", bottom: 70}}></img></div>
            <div><img src={require("../img/react.png")} style={{width: "40%", position: "relative", bottom: 70}}></img></div>
            
        </div>

        <h1>My Projects!</h1>
        <div className="projectContainer">
            <Card>
            <h3>Pokemon API</h3>
            <a href="https://thunker.bow.now.sh/">
                
                <img className="screenshot"  src={require('../img/pokemonAPI.png')} alt="screenshot of pokemon website"></img>
            </a>
            </Card>
        </div>
        
        </div>
    )
}

export default Projects