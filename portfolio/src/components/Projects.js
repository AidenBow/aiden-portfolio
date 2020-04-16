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
            <Card style={{margin: 0, width: 400}}>
            <h3>Pokemon API</h3>
            <a href="https://pokemon-api.now.sh/">
                
                <img className="screenshot"  src={require('../img/pokemonAPI.png')} alt="screenshot of pokemon website"></img>
            </a>
            <Card.Content>
                <h5>Made in React.js with Paul Hallet's pokemon Restful API. Search through all 964 Pokemon and try to find your favorite! </h5>
                
                <h5>Visit live <a href="https://pokemon-api.now.sh/">here</a></h5>
            </Card.Content>
            </Card>

            <Card style={{margin: 0, width: 400}}>
            <h3>BlockFlow</h3>
            <a href="https://blockflow.now.sh/">
                
                <img className="screenshot"  src={require('../img/blockflow.png')} alt="screenshot of blockflow website"></img>
            </a>
            <Card.Content>
                <h5>Made in React.js with login through <a href="https://blockstack.org/">blockstack</a>. Make an account and click on the clock tab to record your recent habits and see them displayed on your graph! Journal entry will be added soon</h5>
                <h5>Visit live <a href="https://blockflow.now.sh/">here</a></h5>
            </Card.Content>
            </Card>
        </div>
        
        </div>
    )
}

export default Projects