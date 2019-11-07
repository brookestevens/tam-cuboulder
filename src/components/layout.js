import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from './Footer'
import "../styles/layout.css"
import SideMenu from "./SideMenu"

function Layout({ children, link }){
  const [sublinks, setSubLinks] = useState([]);
  useEffect(()=>{
      fetch('/entity/menu/site-menu-gatsby/tree')
      .then(res => res.json())
      .then(res => {
          if(!link) return false;
          for(let i = 0; i<res.length; i++){
              console.log(res[i].link.title, link);
              if(res[i].link.title === link){
                  return res[i].subtree;
              }
          }
          return false;
      })
      .then(subtree => {
          subtree ? setSubLinks([...sublinks, ...subtree]) : console.log("No Sub-menu found"); 
      })
      .catch(err => console.log(err));
  }, []);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  //render any sublinks if any
  function renderSubLinks(){
    if(sublinks.length === 0){
      return null;
    }
    else{
      return(
        <React.Fragment>
        <div className="side-menu-links">
          <SideMenu sublinks={sublinks}/>
        </div>
        <hr/>
        </React.Fragment>
      );
    }
  }
  
  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      {renderSubLinks()}
      <div className="page-body-content">
        <main>{children}</main>
      </div>
      <Footer/>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string
}

export default Layout
