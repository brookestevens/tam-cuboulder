import PropTypes from "prop-types"
import React from "react"


// A recursively rendered module

function SideMenu(props) {
    // to = "#id-name" 
    return (
        props.sublinks.map(i => (
            <React.Fragment>
            <ul className="submenu">
                <li>
                    <a key={i.link.meta_data.entity_id} className="header-links" style={{ color: 'white' }} href={`#${i.link.title}-id`}> {i.link.title} </a>
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