import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring'
import VisibilitySensor from 'react-visibility-sensor'

//Future addition for animation below

const FadeInDirection = ({isVisible, children}) => {
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(50px)',
    config: {duration: 1000}
  })
  return <animated.div style={props}>{children}</animated.div>
}

export const FadeInContainer = ({children}) => {
  const [isVisible, setVisibility] = useState(false)

  const onChange = visiblity => {
    visiblity && setVisibility(visiblity)
  }

  return (
    <VisibilitySensor onChange={onChange}>
      <FadeInDirection isVisible={isVisible}>{children}</FadeInDirection>
    </VisibilitySensor>
  )
}

const Work = () => {
  return (
    <div className="work" id="work">
      <h1>Work</h1>
      <div className="container">
        <div className="row hedgehog">
          <div className="col-md align-self-start">
            <a href="https://fsahedgehog.herokuapp.com/">
              <img
                src="work_images/HedgeHog_Work.png"
                alt="hedgehog poster"
                className="poster"
              />
            </a>
          </div>
          <div className="col-md">
            <div className="row">
              <p className="card-text">
                ● Integrated data into Victory.js for data visualiation, which
                makes up over 50% of the front end ● Worked with three separate
                third party APIs to request and throttle the necessary data ●
                Created dozens of algorithms to cleanse complex data
              </p>
              <p className="card-text">
                <small className="text-muted">
                  Tech Stack: React/Redux, Sequelize, Express, Victory.js
                </small>
              </p>
            </div>
            <div className="row">
              <FadeInContainer>
                <a
                  href="https://github.com/FSAhedgehog/fsahedgehog"
                  type="button"
                  className="btn btn-dark"
                >
                  GitHub
                </a>
                <a
                  href="https://fsahedgehog.herokuapp.com/"
                  type="button"
                  className="btn btn-secondary"
                >
                  Hedgehog
                </a>
              </FadeInContainer>
            </div>
          </div>
        </div>
        <hr />
        <div className="row links-lights">
          <div className="col-md align-self-start">
            <a href="https://links-lights-v2.herokuapp.com/">
              <img
                src="work_images/LinksLights_Work.png"
                alt="link's lights poster"
                className="poster"
              />
            </a>
          </div>
          <div className="col-md">
            <div className="row">
              <p className="card-text">
                ● Constructed automated testing code and integrated Travis CI
                for continuous integration ● Designed front and back end
                (fullstack) for cart/checkout ● Created back end heavy
                algorithms to sort and organize data in order to keep the front
                end extremely fast and reliable
              </p>
              <p className="card-text">
                <small className="text-muted">
                  Tech Stack: React/Redux, Sequelize, Express
                </small>
              </p>
            </div>
            <div className="row">
              <FadeInContainer>
                <a
                  href="https://github.com/stonef13/grace-shopper"
                  type="button"
                  className="btn btn-dark"
                >
                  GitHub
                </a>
                <a
                  href="https://links-lights-v2.herokuapp.com"
                  type="button"
                  className="btn btn-secondary"
                >
                  Link's Lights
                </a>
              </FadeInContainer>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md align-self-start">
            <a href="https://rsfuglaar.medium.com/switching-from-javascript-to-swift-2b1c4c415a16">
              <img
                src="work_images/Switching_From_JavaScript_To_Swift_Work.png"
                alt="swift publication photo"
                className="poster"
              />
            </a>
          </div>
          <div className="col-md">
            <div className="row">
              <p className="card-text">
                ● Publication on perspectives about switching from JavaScript to
                Swift ● Covers type annotations (similar to TypeScript) ● Covers
                everything from variable declaration to loops
              </p>
              <p></p>
              <p className="card-text">
                <small className="text-muted">
                  Tech Focus: Swift, JavaScript
                </small>
              </p>
            </div>
            <div className="row">
              <FadeInContainer>
                <a
                  href="https://rsfuglaar.medium.com/switching-from-javascript-to-swift-2b1c4c415a16"
                  type="button"
                  className="btn btn-secondary"
                >
                  Switching From JavaScript To Swift
                </a>
              </FadeInContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
