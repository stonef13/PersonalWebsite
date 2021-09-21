import React, {useState} from 'react'
import {useSpring, animated} from 'react-spring'
import VisibilitySensor from 'react-visibility-sensor'

const FadeInDirection = ({isVisible, children}) => {
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px)' : 'translateY(50px)'
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

const Skills = () => {
  return (
    <div>
      <h1 id="skills">Skills</h1>
      <div className="container">
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 g-lg-2">
          <div className="col p-2">
            <div className="card card-skill">
              <div className="card-body">
                <FadeInContainer>
                  <img
                    className="card-img-top"
                    src="skill_logos/JavaScript_Logo.png"
                    alt="javascript icon"
                  />
                </FadeInContainer>
              </div>
              <h5 className="card-title">JavaScript</h5>
            </div>
          </div>
          <div className="col p-2">
            <div className="card card-skill">
              <div className="card-body">
                <FadeInContainer>
                  <img
                    className="card-img-top"
                    src="skill_logos/Bootstrap_Logo.png"
                    alt="bootstrap logo"
                  />
                </FadeInContainer>
              </div>
              <h5 className="card-title">Bootstrap</h5>
            </div>
          </div>
          <div className="col p-2">
            <div className="card card-skill">
              <div className="card-body">
                <FadeInContainer>
                  <img
                    className="card-img-top"
                    src="skill_logos/CSS_Logo.png"
                    alt="css logo"
                  />
                </FadeInContainer>
              </div>
              <h5 className="card-title">CSS3</h5>
            </div>
          </div>
          <div className="col p-2">
            <div className="card card-skill">
              <div className="card-body">
                <FadeInContainer>
                  <img
                    className="card-img-top"
                    src="skill_logos/Express_Logo.png"
                    alt="express logo"
                  />
                </FadeInContainer>
              </div>
              <h5 className="card-title">Express</h5>
            </div>
          </div>
          <div className="col p-2">
            <div className="card card-skill">
              <div className="card-body">
                <FadeInContainer>
                  <img
                    className="card-img-top"
                    src="skill_logos/Git_Logo.png"
                    alt="git logo"
                  />
                </FadeInContainer>
              </div>
              <h5 className="card-title">Git</h5>
            </div>
          </div>
          <div className="col p-2">
            <div className="card card-skill">
              <div className="card-body">
                <FadeInContainer>
                  <img
                    className="card-img-top"
                    src="skill_logos/HTLM5_Logo.png"
                    alt="html5 logo"
                  />
                </FadeInContainer>
              </div>
              <h5 className="card-title">HTML5</h5>
            </div>
          </div>
          <div className="col p-2">
            <div className="card card-skill">
              <div className="card-body">
                <FadeInContainer>
                  <img
                    className="card-img-top"
                    src="skill_logos/Node_Logo.png"
                    alt="node logo"
                  />
                </FadeInContainer>
              </div>
              <h5 className="card-title">Node</h5>
            </div>
          </div>
          <div className="col p-2">
            <div className="card card-skill">
              <div className="card-body">
                <FadeInContainer>
                  <img
                    className="card-img-top"
                    src="skill_logos/PostgreSQL_Logo.png"
                    alt="postgresql logo"
                  />
                </FadeInContainer>
              </div>
              <h5 className="card-title">PostgreSQL</h5>
            </div>
          </div>
          <div className="col p-2">
            <div className="card card-skill">
              <div className="card-body">
                <FadeInContainer>
                  <img
                    className="card-img-top"
                    src="skill_logos/React_Logo.png"
                    alt="react logo"
                  />
                </FadeInContainer>
              </div>
              <h5 className="card-title">React</h5>
            </div>
          </div>
          <div className="col p-2">
            <div className="card card-skill">
              <div className="card-body">
                <FadeInContainer>
                  <img
                    className="card-img-top"
                    src="skill_logos/React-Victory_Logo.jpeg"
                    alt="react-victory logo"
                  />
                </FadeInContainer>
              </div>
              <h5 className="card-title">Victory.js</h5>
            </div>
          </div>
          <div className="col p-2">
            <div className="card card-skill">
              <div className="card-body">
                <FadeInContainer>
                  <img
                    className="card-img-top"
                    src="skill_logos/REST_API_Logo.png"
                    alt="rest api logo"
                  />
                </FadeInContainer>
              </div>
              <h5 className="card-title">REST API</h5>
            </div>
          </div>
          <div className="col p-2">
            <div className="card card-skill">
              <div className="card-body">
                <FadeInContainer>
                  <img
                    className="card-img-top"
                    src="skill_logos/Swift_Logo.png"
                    alt="swift logo"
                  />
                </FadeInContainer>
              </div>
              <h5 className="card-title">Swift</h5>
            </div>
          </div>
          <div className="col p-2">
            <div className="card card-skill">
              <div className="card-body">
                <FadeInContainer>
                  <img
                    className="card-img-top"
                    src="skill_logos/WebPack_Logo.png"
                    alt="webpack logo"
                  />
                </FadeInContainer>
              </div>
              <h5 className="card-title">WebPack</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
