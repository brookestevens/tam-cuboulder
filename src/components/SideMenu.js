import PropTypes from "prop-types"
import React from "react"
import {Link} from "gatsby";
//use this for hash links navigate('#id');
import { navigate } from '@reach/router';


// A recursively rendered module
// URl is set in the menu builder on Drupal to location
// Any ids are set in the content editor in Drupal too

function SideMenu(props) {
    function renderLink(url = "#", title){
        switch(url[0]){
            case "#":
                return <a className="sub-menu-link" href={url}> {title} </a> //hash links
            case "/":
                return <Link className="sub-menu-link" to={url}> {title} </Link> //internal routes
            default:
                return <a className="sub-menu-link" href={url}> {title} </a> //any external links
        }
    }
    return (
        props.sublinks.map(i => (
            <React.Fragment key={i.link.meta_data.entity_id}>
            <ul className="submenu">
                <li className="sub-menu-links" style={{ color: 'white' }}>
                    {renderLink(i.link.url, i.link.title)}
                </li>
                { i.subtree.length > 0 ?  <SideMenu sublinks={i.subtree}/> : null}
            </ul>
            </React.Fragment>
        ))
    );
}

SideMenu.propTypes = {
    sublinks: PropTypes.array
}

export default SideMenu;