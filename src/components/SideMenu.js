import PropTypes from "prop-types"
import React from "react"
import {Link} from "gatsby";

// A recursively rendered component
// hashlinks are taken out due to site editor confusion

function SideMenu(props) {
    function setClasses(url){
        if(url === window.location.pathname || url === window.location.pathname + '/'){
            return "sub-menu-link current-path";
        }
        else return "sub-menu-link";
    }
    function renderLink(url = "#", title){
        let classes = setClasses(url);
        switch(url[0]){
            case "#":
                return <a className={classes} href={url}> {title} </a> //hash links
            case "/":
                return <Link className={classes} to={url}> {title} </Link> //internal routes
            default:
                return <a className={classes} href={url}> {title} </a> //any external links
        }
    }
    return (
        props.sublinks.map(i => (
            <React.Fragment key={i.link.meta_data.entity_id}>
            <div className="submenu">
                {renderLink(i.link.url, i.link.title)}
            </div>
            { i.subtree.length > 0 ?  <SideMenu sublinks={i.subtree}/> : null}
            </React.Fragment>
        ))
    );
}

SideMenu.propTypes = {
    sublinks: PropTypes.array
}

export default SideMenu;