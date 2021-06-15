import React from 'react'
import {Link} from 'react-scroll'

const Navbar = () => (
  <div>
    <nav>
      <div className="navbar navbar-light fixed-top navbar-background">
        <div className="container-fluid">
          <div>
            <Link
              className="link nav-link"
              spy={true}
              smooth={true}
              offset={-80}
              duration={700}
              to="work"
            >
              <h6>Work</h6>
            </Link>
          </div>
          <div>
            <Link
              className="link nav-link"
              spy={true}
              smooth={true}
              offset={-80}
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
              offset={-80}
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
    </nav>
  </div>
)

export default Navbar
