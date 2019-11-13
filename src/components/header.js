import {Link} from "gatsby"
import ATLSLogo from "../images/atls-logo.png";
import React, {useState, useEffect} from "react"
import twitterLogo from "../images/twitter-icon.png";
import facebookLogo from "../images/facebook-icon.png";
import linkedInLogo from "../images/linked-in-icon.png";
import Hamburger from "../images/hamburger-menu.png";
import arrowUP from "../images/arrow-down.png";

function Header(){
  const[mobile, setMobile] = useState("screen");
  const[hidden, setHidden] = useState("hide");
  
  useEffect( () => {
    window.addEventListener("resize", () => handleResize());
  },[]);

  function handleResize(){
    console.log("width: ", window.innerWidth);
    if(window.innerWidth <= 600){
      setMobile("mobile");
    }
    else if(window.innerWidth > 600){
      setMobile("screen");
    }
  }

  function setClasses(url){
    let path = (window.location.pathname).split('/' ,2);
    let pattern = new RegExp(path[1]); //get the first directory level
    if(path[1] === ""){ //home path
      return "header-links";
    }
    else if(pattern.test(url)){
      return "header-links current-main-menu";
    }
    else return "header-links";
  }

  function renderMenu(){
    return (
      <div className={`header-links-flex ${mobile} ${hidden}`}>
      <Link className= {setClasses("/programs/major")} to="/programs/major"> Programs </Link>
      <Link className= {setClasses("/courses/current")}   to="/courses/current"> Courses </Link>
      <Link className= {setClasses("/featured-work")}   to="/featured-work"> Featured Work </Link>
      <Link className= {setClasses("/advising")}   to="/advising"> Advising </Link>
      <Link className= {setClasses("/people/faculty")}   to="/people/faculty"> People </Link>
      <Link className= {setClasses("/student-groups")}   to="/student-groups"> Student Groups </Link>
      <Link className= {setClasses("/resources/checkout")}   to="/resources/checkout"> Resources </Link>
      {/* Add any extra menu links here! */}

      {/* Social Media Links */}
      <a className="header-links" href="https://www.facebook.com/TechnologyArtsMedia"> <img src={facebookLogo} width= "35px" alt="facebook icon"/> </a>
      <a className="header-links" href="https://twitter.com/tam_cu"> <img src={twitterLogo}  width= "35px" alt="twitter icon"/> </a>
      <a className="header-links" href="https://www.linkedin.com/groups/4398953"> <img src={linkedInLogo} width= "35px" alt="linked in icon" /> </a>
      <img onClick = {() => {
        if(window.location.pathname === "/"){
          document.getElementById("front-page-image").style.display = "block";  
        }
        setHidden("hide"); 
        }}
        className="up-arrow-mobile" width="40px" height="40px" src={arrowUP} alt="close mobile menu button"/>
    </div>
    );
  }
  return(
    <header>
      <div className={`header-container ${hidden}`}>
        <div id="header-icons-flex">
          <Link to="/"> <img id = "atls-logo" src={ATLSLogo} alt="ATLS logo" width="30%" /> </Link>
          <div onClick={ () => {
              setHidden("show");
              if(window.location.pathname === "/"){
                document.getElementById("front-page-image").style.display = "none";
                document.getElementsByClassName("mobile-index")[0].style.zIndex = "0";
                document.getElementsByClassName("mobile-index")[1].style.zIndex = "0";  
              }
            }} 
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
