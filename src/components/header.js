import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import twitterLogo from "../images/twitter-icon.png";
import facebookLogo from "../images/facebook-icon.png";
import linkedInLogo from "../images/linked-in-icon.png";

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-container">
      <h1 style={{ margin: 0 }}>
        <Link to="/"> {siteTitle} </Link>
      </h1>
      <div className="header-links-flex" >
        <Link className="header-links"  to="/programs/major"> Programs </Link>
        <Link className="header-links"  to="/courses/course-inventory"> Courses </Link>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
