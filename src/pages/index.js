import React from "react"
import {graphql} from "gatsby"
import Header from "../components/header"
import Footer from '../components/Footer'
import FeaturedGallery from "../components/featuredGallery";
import SEO from "../components/seo"
import Particles from 'react-particles-js'
import ArrowDown from '../images/arrow-down.png';

import '../styles/page.css';
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
  const height = document.body.scrollHeight - 1000;
  window.scroll({ top: height, left: 0 , behavior: 'smooth' });
}

function IndexPage({data}){
  return(
    <React.Fragment>
      <SEO title="Home" />
      <Header siteTitle = "Technology Arts & Media Program"/>
      {/* Top front page */}
      <div id="front-page-image">
        <Particles className="particles" params={particlesOptions}/>
        <h1 className="tam-title" > Technology, Arts & Media Program</h1>
        <div className="centered-subtitle-text" >
          <h3> INVENT</h3>
          <h3> DESIGN</h3>
          <h3> CREATE</h3>
        </div>
        <img onClick = {()=> handleClick()} className="scroll-arrow" src={ArrowDown}/> 

      </div>
      {/* Second part of the screen */}
      <div className = "front-page-news">
        <h2> Radical Creativity and Invention. </h2>
        <p>
          The Technology, Arts & Media Program is part of the ATLAS Institute on the University of Colorado at Boulder campus. 
          ATLAS is an innovative initiative in education, research, creative work and outreach in which information and communication 
          technology is the enabling force.
        </p>
        {/* map through news on the front page */}
        {data.allNodePage.nodes.map( i => (
          <div key = {i.title}>
            <h3>{i.title}</h3>
            <p> {i.body.value} </p>
            <hr/>
          </div>
        ))}
        {/* The featured works gallery here */}
        <FeaturedGallery/>
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export const query = graphql`
  {
    allNodePage(filter: {promote: {eq: true}}) {
      nodes {
        title
        body {
          value
        }
      }
    }
  }
`


export default IndexPage
