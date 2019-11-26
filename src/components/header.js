import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/logo.png'
const Header = ({ siteTitle }) => (
  <header>
    <div className="head-box">
      <div className="container clearfix">
        <div className="left-info">
          <div className="logo">
            <a href="#"><img src={logo} /></a>
          </div>
        </div>
        <div className="right-info">
          <ul className="info-ul">
            <li><a className="greetings" href="/">Products</a></li>
            <li><a href="/Blog">Blog</a></li>
            <li><Link to="/about/">About</Link></li>
          </ul>
          <div className="menu-hide"></div>
        </div>
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
