import React, { useEffect } from 'react';
import {graphql} from 'gatsby';
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import "../../styles/page.css"

function ITResources({data}){
    useEffect( () => {
        //console.log("effect fired - IT");
        const doc = new DOMParser().parseFromString(data.nodePage.body.value, "text/html").querySelector("body");
        document.getElementById("body-content").appendChild(doc);
    }, [data.nodePage.body.value]);

    return(
      <Layout link="Resources">
        <SEO title="IT"/>
        <h2> {data.nodePage.title} </h2>
        <div id="body-content">
        </div>
      </Layout>
    );
}

export const query = graphql`
  {
    nodePage(drupal_internal__nid: {eq: 48}) {
      title
      body {
        value
      }
    }
  }
`

export default ITResources;