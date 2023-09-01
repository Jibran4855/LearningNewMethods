import React from "react"
import "./navbar.css"
import glogo from "./images/glogo.png"


const Silver = () => {

    return (<>
        <div id="silver" className="silver">
            <div className="logo-g">
                <img className="img-logo-g" src={glogo} />
            </div>
            <div className="contact">
                <h4>Get in touch with us</h4>
                <h4>Contact : <span>gwadardevclub@gmail.com</span></h4>
                <h4>@ Copy right 2023</h4>
            </div>
        </div>

    </>)
}

export default Silver;