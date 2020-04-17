import React from "react"
import { Card, Icon, Image } from 'semantic-ui-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
const Projects = () => {
    return (
        <div>
            <h1 className="techStack"> My Tech Stack</h1>
        <div className="logoContainer">
            <div><img src={require("../img/sass.png")} style={{width: "15%"}}></img><img src={require("../img/html5.png")} style={{width: "40%"}}></img></div>
            <div><img src={require("../img/react.png")} style={{width: "40%"}}></img><img src={require("../img/redux.png")} style={{width: "20%"}}></img></div>
            
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
            <div className="aboutContainer">
                <h1 style={{color: "black", position: "relative", top: -30 , textAlign: "left"}}>Who am I?</h1>
                <p style={{color: "black", textAlign: "left"}}>I'm a front-end focused web developer located in Gilbert, Arizona. I'm currently a student at Lambda School studying web development and computer science. My goal is to make your website a fun experience that everyone can enjoy.</p>
            </div>
            <div style={{width: "40%", margin: "auto 5%"}}><img style={{width: "100%", maxWidth: 500, maxHeight: 400}} src={require("../img/lambdaedit.jpg")}></img></div>
        </div>

        <h1>My Projects! </h1>
        <div className="projectContainer">
            <Card style={{margin: 10, width: 400}}>
            <h3>Pokemon API</h3>
            <a href="https://pokemon-api.now.sh/">
                
                <img className="screenshot"  src={require('../img/pokemonAPI.png')} alt="screenshot of pokemon website"></img>
            </a>
            <Card.Content>
                <h5>Made in React.js with Paul Hallet's pokemon Restful API. Search through all 964 Pokemon and try to find your favorite! </h5>
                <h4>Tech Stack: </h4>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", margin: "-10px 0 10px 0"}}>
                    <h5>React.js | JS | HTML | CSS | Redux</h5>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                    <div>
                        <a href="https://pokemon-api.now.sh/"><FontAwesomeIcon icon={faGlobe} size="2x"/></a>
                        <h5 style={{margin: 0}}>Visit live site <a href="https://pokemon-api.now.sh/">here</a></h5>
                    </div>
                    <div>
                        <a href="https://github.com/AidenBow/pokeAPI"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                        <h5 style={{margin: 0}}>Github Repo <a href="https://github.com/AidenBow/pokeAPI">here</a></h5>
                    </div>
                </div>
            </Card.Content>
            </Card>

            <Card style={{margin: 10, width: 400}}>
            <h3>BlockFlow</h3>
            <a href="https://blockflow.now.sh/">
                
                <img className="screenshot"  src={require('../img/blockflow.png')} alt="screenshot of blockflow website"></img>
            </a>
            <Card.Content>
                <h5>Made in React.js with login through <a href="https://blockstack.org/">blockstack</a>. Make an account and click on the clock tab to record your recent habits and see them displayed on your graph! Journal entry will be added soon</h5>
                <h4>Tech Stack: </h4>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", margin: "-10px 0 10px 0"}}>
                    <h5>React.js | JS | HTML | CSS | Redux | Blockstack</h5>
                </div>

                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
                    <div>
                        <a href="https://blockflow.now.sh/"><FontAwesomeIcon icon={faGlobe} size="2x"/></a>
                        <h5 style={{margin: 0}}>Visit live site <a href="https://blockflow.now.sh/">here</a></h5>
                    </div>
                    <div>
                        <a href="https://github.com/AidenBow/blockflow"><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                        <h5 style={{margin: 0}}>Github repo <a href="https://github.com/AidenBow/blockflow">here</a></h5>
                    </div>
                </div>
                
            </Card.Content>
            </Card>

            <Card style={{margin: 10, width: 400}}>
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