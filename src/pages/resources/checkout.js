import React, {useEffect} from 'react';
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import "../../styles/page.css";
import {graphql} from "gatsby";

function CheckoutPage({data}){
    useEffect(()=>{
        const doc = new DOMParser().parseFromString(data.nodePage.body.value, "text/html").querySelector("body");
        document.getElementById("body-content").appendChild(doc);
    }, [data.nodePage.body.value]);

    return(
        <Layout link="Resources">
          <SEO title="Checkout"/>
          <h2> {data.nodePage.title} </h2>
          <div id="body-content"> </div>
          <h2> Items Available for Checkout </h2>
          <div className="checkout-item-flex">
          {data.allNodeCheckOutItem.edges.map( i => (
              <div className="checkout-item-child" key = {i.title}>
                    <img src={i.node.relationships.field_item_picture.uri.url} alt={i.node.field_item_picture.alt} width="200" height="200"/>
                    <h4> {i.node.title} </h4>
                    {i.node.relationships.field_checkout_manual ? 
                      <a href={i.node.relationships.field_checkout_manual.uri.url}> Manual </a>
                    : "No Manual Available" }
                    
              </div>
          ))}
          </div>
        </Layout>
    );
}

export const query = graphql`
  {
    nodePage(drupal_internal__nid: {eq: 47}) {
      title
      body {
        value
      }
    }
    allNodeCheckOutItem {
      edges {
        node {
          field_item_picture {
            alt
          }
          relationships {
            field_checkout_manual {
              uri {
                url
              }
            }
            field_item_picture {
              uri {
                url
              }
            }
          }
          title
        }
      }
    }
  }
`;


export default CheckoutPage;