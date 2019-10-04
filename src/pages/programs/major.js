import React, { useState, useEffect } from 'react';
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { graphql } from 'gatsby';
import "../../styles/page.css"

function MajorsPage({data}){

  useEffect(()=>{
    const doc = new DOMParser().parseFromString(data.nodePage.body.value, "text/html").querySelector("body");
    document.getElementById("body-content").appendChild(doc);
  }, [data.nodePage.body.value]);

  return(
        <React.Fragment>
        <Layout link="Programs">
          <SEO title="Programs"/>
          <h2>{data.nodePage.title}</h2>
          <div id="body-content">
            {/* {put infoe here} */}
          </div>
        </Layout>
      </React.Fragment>
    );
}

export const query = graphql`
  {
    nodePage(drupal_internal__nid: {eq: 33}) {
      title
      body {
        value
      }
    }
  }
`



export default MajorsPage;