import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Link} from 'react-scroll'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          {/* <Link to="/home">Home</Link> */}
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div className="navbar fixed navbar-dark bg-dark">
          <div>{/* <h3>Stone Fuglaar</h3> */}</div>
          <div className="inner-right-nav-container">
            <Link
              className="link"
              spy={true}
              smooth={true}
              offset={-30}
              duration={700}
              to="work"
            >
              <h3>Work</h3>
            </Link>
            <Link
              className="link"
              spy={true}
              smooth={true}
              offset={-30}
              duration={700}
              to="about-me"
            >
              <h3>About Me</h3>
            </Link>
            <Link
              className="link"
              spy={true}
              smooth={true}
              offset={-30}
              duration={700}
              to="skills"
            >
              <h3>Skills</h3>
            </Link>
            <Link
              className="link"
              spy={true}
              smooth={true}
              offset={-30}
              duration={700}
              to="connect"
            >
              <h3>Connect</h3>
            </Link>
          </div>
        </div>
      )}
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
