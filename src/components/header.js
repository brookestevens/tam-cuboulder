import {Link} from "gatsby"
import ATLSLogo from "../images/atls-logo.png";
import React, {useState, useEffect} from "react"
import twitterLogo from "../images/twitter-icon.png";
import facebookLogo from "../images/facebook-icon.png";
import linkedInLogo from "../images/linked-in-icon.png";
import Hamburger from "../images/hamburger-menu.png";
import MoreArrow from "../images/arrow-down.png";

function Header(){
  const[mobile, setMobile] = useState("screen");
  const[hidden, setHidden] = useState("hide");
  const[tablet, setTablet] = useState("no-tab");
 
  useEffect( () => {
    window.addEventListener("resize", () => handleResize());
    let mainNav = document.querySelectorAll('.header-links');
    console.log("links: ", mainNav);
    let path = (window.location.pathname).split('/' ,2);
    let pattern = new RegExp(path[1]); //get the first directory level
    if(path[1] === ""){
      return;
    }
    else{
      for(let i = 0; i< mainNav.length; i++){
        if(mainNav[i].hasAttribute("aria-current")){
          mainNav[i].classList.add("current-main-menu");
        }
        else if(pattern.test(mainNav[i].href)){
          mainNav[i].classList.add("current-main-menu");
        }
      } 
    }
  },[]);

  function handleResize(){
    let w = window.innerWidth;
    if(w <= 600){
      setMobile("mobile");
      setTablet("no-tab");
    }
    else{
      setMobile("screen");
      setTablet("no-tab");
    }

  }
  function handleClick(){
    if(hidden == "hide"){
      setHidden("show");
      if(window.location.pathname === "/"){
        document.getElementById("front-page-image").style.display = "none";
        document.getElementsByClassName("mobile-index")[0].style.zIndex = "0";
        document.getElementsByClassName("mobile-index")[1].style.zIndex = "0";  
      }
    }
    else{
      if(window.location.pathname === "/"){
        document.getElementById("front-page-image").style.display = "block";  
      }
      setHidden("hide"); 
    }
  }

  function renderMenu(){
    return (
      <div className={`header-links-flex ${mobile} ${hidden}`}>
      <Link className= "header-links"  to="/programs/major"> Programs </Link>
      <Link className= "header-links"  to="/courses/current"> Courses </Link>
      <Link className= "header-links"  to="/featured-work"> Featured Work </Link>
      <Link className= "header-links"  to="/advising"> Advising </Link>
      <Link className= "header-links drop"  to="/people/faculty"> People </Link>
      <Link className= "header-links drop"  to="/student-groups"> Student Groups </Link>
      <Link className= "header-links drop"  to="/resources/checkout"> Resources </Link>
      {/* Add any extra menu links here! */}

      {/* Social Media Links */}
      <div id="social-icons-div">
        <a className="header-links" href="https://www.facebook.com/TechnologyArtsMedia"> <img src={facebookLogo} width= "35px" alt="facebook icon"/> </a>
        <a className="header-links" href="https://twitter.com/tam_cu"> <img src={twitterLogo}  width= "35px" alt="twitter icon"/> </a>
        <a className="header-links" href="https://www.linkedin.com/groups/4398953"> <img src={linkedInLogo} width= "35px" alt="linked in icon" /> </a>
      </div>
      {/* OTHER TABS */}
      <img id="show-more-icon" src={MoreArrow} alt="More Items Button" height="35" width="35" onClick = 
        {() => tablet === "no-tab" ? setTablet("show-tab") : setTablet("no-tab")}/>
      
      <div id="dropdown-content" className = {tablet}>
        <Link to="/people/faculty"> People </Link>
        <Link to="/student-groups"> Student Groups </Link>
        <Link to="/resources/checkout"> Resources </Link>
        <a href="">Facebook</a>
        <a href="">Twitter</a>
        <a href="">LinkedIn</a>
      </div>

    </div>
    );
  }
  return(
    <header>
      <div className={`header-container ${hidden}`}>
        <div id="header-icons-flex">
          <Link to="/"> <img id = "atls-logo" src={ATLSLogo} alt="ATLS logo" width="30%" /> </Link>
          <div onClick={ () => handleClick() } 
            id="mobile-menu-icon">
            <img src={Hamburger}/>
          </div>
        </div>
        {renderMenu()}
      </div>
    </header>
  );
}

export default Header
