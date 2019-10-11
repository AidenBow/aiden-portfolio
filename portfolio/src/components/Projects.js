import React from "react"

const Projects = () => {
    return (
        <div>
            <section className="projectCard" >
            <h3>Pokemon API</h3>
            <a href="https://thunker.bow.now.sh/">
                <img className="screenshot"  src={require('../img/pokemonAPI.png')} alt="screenshot of pokemon website"></img>
            </a>
            </section>
        </div>
    )
}

export default Projects