import React from "react"
import { Card, Icon, Image } from 'semantic-ui-react'
const Projects = () => {
    return (
        <div>
        <div className="logoContainer">
            <div><img src={require("../img/html5.png")} style={{width: "40%", position: "relative", bottom: 70}}></img></div>
            <div><img src={require("../img/react.png")} style={{width: "40%", position: "relative", bottom: 70, margin: "0 0 -50 0"}}></img></div>
            
        </div>

        <div className="aboutContainer">
            <h1>Who am I?</h1>
            <p>I'm a front-end focused web developer located in Gilbert, Arizona. I'm currently a student at Lambda School studying web development and computer science and my goal is to make websites a fun experience that everyone can enjoy.</p>
        </div>

        <h1>My Projects! </h1>
        <div className="projectContainer">
            <Card style={{margin: 0, width: 400}}>
            <h3>Pokemon API</h3>
            <a href="https://pokemon-api.now.sh/">
                
                <img className="screenshot"  src={require('../img/pokemonAPI.png')} alt="screenshot of pokemon website"></img>
            </a>
            <Card.Content>
                <h5>Made in React.js with Paul Hallet's pokemon Restful API. Search through all 964 Pokemon and try to find your favorite! </h5>
                
                <h5>Visit live site <a href="https://pokemon-api.now.sh/">here</a></h5>
                <h5>Github Repo <a href="https://github.com/AidenBow/pokeAPI">here</a></h5>
            </Card.Content>
            </Card>

            <Card style={{margin: 0, width: 400}}>
            <h3>BlockFlow</h3>
            <a href="https://blockflow.now.sh/">
                
                <img className="screenshot"  src={require('../img/blockflow.png')} alt="screenshot of blockflow website"></img>
            </a>
            <Card.Content>
                <h5>Made in React.js with login through <a href="https://blockstack.org/">blockstack</a>. Make an account and click on the clock tab to record your recent habits and see them displayed on your graph! Journal entry will be added soon</h5>
                <h5>Visit live site <a href="https://blockflow.now.sh/">here</a></h5>
                <h5>Github repo <a href="https://github.com/AidenBow/blockflow">here</a></h5>
            </Card.Content>
            </Card>

            <Card style={{margin: 0, width: 400}}>
            <h3>Restaurant Passport</h3>
            <a href="https://blockflow.now.sh/">
                
                <img className="screenshot"  src={require('../img/passport.png')} alt="screenshot of blockflow website"></img>
            </a>
            <Card.Content>
                <h5>Review restaurants and add your favorites to your Restaurant Passport! In this project I worked with 5 other web developers, my job was to create a CRUD API (backend) using SQL3. You can go thorugh the account making process, login, and upload your favorite restaurant and leave a review after adding them to your passport! </h5>
                <h5>Github repo <a href="https://github.com/bw-restaurant-passport-1/Back-end">here</a></h5>
            </Card.Content>
            </Card>
        </div>
        
        </div>
    )
}

export default Projects