import React from 'react'
import Navbar from './navbar'
import Intro from './Intro'
import Work from './Work'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Connect from './Connect'

class Main extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Intro />
        <Work />
        <AboutMe />
        <Skills />
        <Connect />
      </div>
    )
  }
}

export default Main
