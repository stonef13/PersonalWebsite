import React, {useState} from 'react'
import {Link} from 'react-scroll'
import {useSpring, animated} from 'react-spring'
import VisibilitySensor from 'react-visibility-sensor'

const FadeInDirection = ({isVisible, children}) => {
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(50px)',
    config: {duration: 3000}
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

const Intro = () => {
  return (
    <div className="intro">
      <FadeInContainer>
        <h4 className="welcome-description">
          Hello. My name is Stone Fuglaar and I'm a software engineer living in
          Los Angeles, California.
        </h4>
      </FadeInContainer>
      <FadeInContainer>
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
      </FadeInContainer>
    </div>
  )
}

export default Intro
