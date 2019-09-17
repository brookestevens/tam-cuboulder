import React from "react"
import {graphql} from "gatsby"
import Header from "../components/header"
import Footer from '../components/Footer'
import SEO from "../components/seo"
import Particles from 'react-particles-js'
import ArrowDown from '../images/arrow-down.png';
import ATLASlogo from '../images/atls-logo.png';
import "../styles/home.css";

const particlesOptions = {
  particles: {
    number: {
      value: 200,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#CFB87C'
    },
    line_linked:{
      color: '#CFB87C'
    }
  }
};

function handleClick(){
  //scroll down 100% of the page
  window.scroll({ top: document.body.scrollHeight, left: 0 , behavior: 'smooth' });
}

function IndexPage(){
  return(
    <React.Fragment>
      <SEO title="Home" />
      <Header siteTitle = "Technology Arts & Media Program"/>
      {/* Top front page */}
      <div id="front-page-image">
        <Particles className="particles" params={particlesOptions}/>
        <img className="atlas-logo" src={ATLASlogo} alt="atlas intitute logo"/>
        <div className="centered-subtitle-text" >
          <h3> INVENT</h3>
          <h3> DESIGN</h3>
          <h3> CREATE</h3>
        </div>
        <img onClick = {()=> handleClick()} className="scroll-arrow" src={ArrowDown}/> 

      </div>
      {/* Second part of the screen */}
      <div className = "front-page-news">
        <h2> News here </h2>
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default IndexPage
