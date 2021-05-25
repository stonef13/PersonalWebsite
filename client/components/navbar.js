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
        <div className="navbar navbar-light fixed-top navbar-background">
          <div className="container-fluid">
            <div className="navbar-brand">Stone Fuglaar</div>
            <div>
              <Link
                className="link nav-link"
                spy={true}
                smooth={true}
                offset={-30}
                duration={700}
                to="work"
              >
                <h6>Work</h6>
              </Link>
              {/* /START */}
            </div>
            <div>
              <Link
                className="link nav-link"
                spy={true}
                smooth={true}
                offset={-30}
                duration={700}
                to="about-me"
              >
                <h6>About Me</h6>
              </Link>
            </div>
            <div>
              <Link
                className="link nav-link"
                spy={true}
                smooth={true}
                offset={-30}
                duration={700}
                to="skills"
              >
                <h6>Skills</h6>
              </Link>
            </div>
            <div>
              <Link
                className="link nav-link"
                spy={true}
                smooth={true}
                offset={-30}
                duration={700}
                to="connect"
              >
                <h6>Connect</h6>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
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
