import { Link, withAssetPrefix } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: '0px',
      position: 'relative',
      zIndex: 3,
      boxShadow: `3px 3px 3px rgba(0,0,0, 0.5)`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem`,
        fontFamily: 'helveticaNeue-light'
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{ color: `white`, textDecoration: `none` }} >
          {siteTitle}
        </Link>
      </h1>
      <div className="header-links-flex" style={{display: 'flex', justifyContent: 'space-between'}} >
        <Link className="header-links" style={{ color: `white`, textDecoration: `none` }} to="/courses/"> Courses </Link>
        <Link className="header-links" style={{ color: `white`, textDecoration: `none` }} to="/programs/"> Programs </Link>
        <Link className="header-links" style={{ color: `white`, textDecoration: `none` }} to="/advising/"> Advising </Link>
        <Link className="header-links" style={{ color: `white`, textDecoration: `none` }} to="/people"> People </Link>
        <Link className="header-links" style={{ color: `white`, textDecoration: `none` }} to="/student-groups"> Student Groups </Link>
        <Link className="header-links" style={{ color: `white`, textDecoration: `none` }} to="/resources"> Resources </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
