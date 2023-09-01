import React from "react";
import "./navbar.css"
const Navbar = () =>{

    function smoothScroll(target) {
        const targetElement = document.querySelector(target);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
          });
        }
      }

      const handleNavLinkClick = (e, target) => {
        e.preventDefault();
        smoothScroll(target);
      };



    return<>
    <nav className="main-nav">
        <div className="logo-title">
            <h2>
                <span className="leet">L</span>eetCode
            </h2>
        </div>
        <div className="menu-link-head">
            <ul className="menu-link">
                <li>
                    <a href="#premium" onClick={e => handleNavLinkClick(e, "#premium")}>Home</a>
                </li>
                <li>
                    <a href="#gold" onClick={e => handleNavLinkClick(e, "#gold")}>Courses</a>
                </li>
                {/* <li>
                    <a href="#" onClick={e => handleNavLinkClick(e, "#premium")}>Product</a> 
                </li> */}
                <li>
                    <a href="#silver" onClick={e => handleNavLinkClick(e, "#silver")}>Contacts</a>
                </li>
                <li>
                    <a href="#">Sign in</a>
                </li>
            </ul>

        </div>

        {/* <section className="home-sec">
            <h1>A New Way to Learn</h1>
            <p>LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.</p>
        </section> */}

    </nav>
    </>
}

export default Navbar;