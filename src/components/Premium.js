import React from "react"
import "./navbar.css"
import kid from "./images/kid.jpg"


const Premium = () => {

  
      

    return (<>
        <div id="premium" className="premium">
            <div >
                <div className="card1">
                    <img className="img-kid" src={kid} />
                </div>
                <div className="card2">
                    <h1 >A New Way to Learn.</h1>
                    <p className="learn">LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.</p>
                    <p className="learn">LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.</p>
                    <p className="learn">LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.</p>
                </div>
            </div>
            
            <div className="dev">
                
            </div>
        </div>

    </>)
}

export default Premium; 