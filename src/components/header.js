import {Link} from "gatsby"
import ATLSLogo from "../images/atls-logo.png";
import React from "react"
import twitterLogo from "../images/twitter-icon.png";
import facebookLogo from "../images/facebook-icon.png";
import linkedInLogo from "../images/linked-in-icon.png";

const Header = () => (
  <header>
    <div className="header-container">
        <Link to="/"> <img src={ATLSLogo} alt="ATLS logo" width="20%" /> </Link>
      <div className="header-links-flex" >
        <Link className="header-links"  to="/programs/major"> Programs </Link>
        <Link className="header-links"  to="/courses/current"> Courses </Link>
        <Link className="header-links"  to="/featured-work"> Featured Work </Link>
        <Link className="header-links"  to="/advising"> Advising </Link>
        <Link className="header-links"  to="/people/faculty"> People </Link>
        <Link className="header-links"  to="/student-groups"> Student Groups </Link>
        <Link className="header-links"  to="/resources/checkout"> Resources </Link>
        {/* Add any extra menu links here! */}

        {/* Social Media Links */}
        <a className="header-links" href="https://www.facebook.com/TechnologyArtsMedia"> <img src={facebookLogo} width= "35px" alt="facebook icon"/> </a>
        <a className="header-links" href="https://twitter.com/tam_cu"> <img src={twitterLogo}  width= "35px" alt="twitter icon"/> </a>
        <a className="header-links" href="https://www.linkedin.com/groups/4398953"> <img src={linkedInLogo} width= "35px" alt="linked in icon" /> </a>
      </div>
    </div>
  </header>
)

export default Header
