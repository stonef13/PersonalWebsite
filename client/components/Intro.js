import React from 'react'
import {Link} from 'react-scroll'

const Intro = () => {
  return (
    <div className="intro">
      <h4 className="welcome-description">
        Hello. My name is Stone Fuglaar and I'm a software engineer living in
        Los Angeles, California.
      </h4>
      <Link
        className="link"
        spy={true}
        smooth={true}
        offset={-80}
        duration={700}
        to="work"
      >
        <h4 className="learn-more welcome-description">Learn More</h4>
      </Link>
    </div>
  )
}

export default Intro
