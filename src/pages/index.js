import React, { useEffect } from "react"
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
  window.scroll({ top: window.innerHeight+20, left: 0 , behavior: 'smooth' });
}

function IndexPage({data}){
  useEffect( () => {
    for(let i=0; i< data.allNodePage.nodes.length; i++ ){
      var doc = new DOMParser().parseFromString(data.allNodePage.nodes[i].body.value, "text/html").querySelector("body");
      document.getElementById(`content-${data.allNodePage.nodes[i].drupal_internal__nid}`).appendChild(doc);
    }
  }, [data.allNodePage.nodes]);

  return(
    <React.Fragment>
      <SEO title="Home" />
      <Header siteTitle = "Technology Arts & Media Program"/>
      {/* Top front page */}
      <div id="front-page-image">
        <Particles className="particles" params={particlesOptions}/>
        <h1 className="tam-title mobile-index" > Technology, Arts & Media Program</h1>
        <div className="centered-subtitle-text" >
          <h3> INVENT</h3>
          <h3> DESIGN</h3>
          <h3> CREATE</h3>
        </div>
        <img onClick = {()=> handleClick()} className="scroll-arrow mobile-index" src={ArrowDown}/> 

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
            <div id = {`content-${i.drupal_internal__nid}`}></div>
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
        drupal_internal__nid
        body {
          value
        }
      }
    }
  }
`


export default IndexPage
