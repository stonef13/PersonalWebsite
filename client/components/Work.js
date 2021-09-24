import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring'
import VisibilitySensor from 'react-visibility-sensor'

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
        <div className="row">
          <div className="col-md align-self-start">
            <FadeInContainer>
              <a href="https://fsahedgehog.herokuapp.com/">
                <img
                  src="work_images/HedgeHog_Work.png"
                  alt="hedgehog poster"
                  className="poster"
                />
              </a>
            </FadeInContainer>
          </div>
          <div className="col-md align-self-center">
            <FadeInContainer>
              <a href="https://links-lights-v2.herokuapp.com/">
                <img
                  src="work_images/LinksLights_Work.png"
                  alt="link's lights poster"
                  className="poster"
                />
              </a>
            </FadeInContainer>
          </div>
          <div className="col-md align-self-end">
            <FadeInContainer>
              <a href="https://rsfuglaar.medium.com/switching-from-javascript-to-swift-2b1c4c415a16">
                <img
                  src="work_images/Switching_From_JavaScript_To_Swift_Work.png"
                  alt="swift publication photo"
                  className="poster"
                />
              </a>
            </FadeInContainer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
