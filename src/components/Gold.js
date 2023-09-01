import React from "react"
import "./navbar.css"
import hackerearth from "./images/HackerEarth.png"
import hackerrank from "./images/hackerrank.png"
import geeks from "./images/geeks.jpg"


const Gold = () => {

    return (<>
        <div id="gold" className="gold">
            <div >
                <h1 className="courses">Courses</h1>
                <div className="geeksforgeeks">
                    <img className="img-kid" src={geeks} />
                    <h2>Geek for Geeks</h2>
                    <p className="gold-p">LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.</p>

                </div>
                <div className="hackerrank">
                    <img className="img-kid" src={hackerrank} />
                    <h2>Hacker Rank</h2>
                    <p className="gold-p">LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.</p>
                </div>
                <div className="hackerearth">
                    <img className="img-kid" src={hackerearth} />
                    <h2>HackerEarth</h2>
                    <p className="gold-p">LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.</p>
                </div>
            </div>
        </div>

    </>)
}

export default Gold; 