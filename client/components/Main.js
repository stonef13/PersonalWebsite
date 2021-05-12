import React from 'react'
import {Link} from 'react-scroll'

class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="intro">
          <h2>
            Hi. My name is Stone Fuglaar and I'm a software engineer living in
            Los Angeles, California.
          </h2>
          <Link
            className="link"
            spy={true}
            smooth={true}
            offset={-30}
            duration={700}
            to="work"
          >
            <h2 className="learn-more">Learn More</h2>
          </Link>
        </div>
        <div className="work" id="work">
          <h1>Work</h1>
          <div className="work-container">
            <a href="https://fsahedgehog.herokuapp.com/">
              <img
                src="work_images/Poster-quote-PixTeller.png"
                alt="hedgehog poster"
                className="poster"
              />
            </a>

            <a href="https://links-lights.herokuapp.com/">
              <img
                src="work_images/Links-Lights-PixTeller.png"
                alt="link's lights poster"
                className="poster"
              />
            </a>

            <a href="https://rsfuglaar.medium.com/switching-from-javascript-to-swift-2b1c4c415a16">
              <img
                src="work_images/Poster-mockup-iphone-phone-PixTeller.png"
                alt="swift publication photo"
                className="poster"
              />
            </a>
          </div>
        </div>
        <div className="about-me" id="about-me">
          <div className="about-container">
            <img src="my_image/Screen Shot 2021-04-13 at 10.28.26.png" />
            <div>
              <h1>About Me</h1>
              <p>
                Before entering the world of tech, I was involved in the
                performing arts. I had dabbled in coding since high school, but
                when I actually dove into it, I absolutely fell in love. I
                started with self teaching, and then became more and more
                involved until I found myself deep in an immersive coding
                bootcamp with Fullstack Academy. There I was certified in a tech
                stack revolving around Node.js, React, PostgreSQL, and
                Express.js. With a huge desire to learn, I immediately became
                fascinated by the power of technology (Especially JavaScript).
                This is something that is changing every day and always leads to
                an opportunity to learn and grow. I plan to combine my creative
                background with my coding skills to effectively create, problem
                solve, and communicate to lead to an output of success.
              </p>

              <p>
                When I’m not coding or learning new technology, you can find me
                playing the guitar, writing music, hiking, or finding places to
                explore in my new home of Los Angeles.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 id="skills">Skills</h1>
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2 g-lg-2">
              <div className="col p-2">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/JavaScript_Logo.png"
                      alt="javascript icon"
                    />
                  </div>
                  <h1 className="card-title">JavaScript</h1>
                </div>
              </div>
              <div className="col p-2">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/Bootstrap_Logo.png"
                      alt="bootstrap logo"
                    />
                  </div>
                  <h1 className="card-title">Bootstrap</h1>
                </div>
              </div>
              <div className="col p-2">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/CSS_Logo.png"
                      alt="css logo"
                    />
                  </div>
                  <h1 className="card-title">CSS3</h1>
                </div>
              </div>
              <div className="col p-2">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/Express_Logo.png"
                      alt="express logo"
                    />
                  </div>
                  <h1 className="card-title">Express</h1>
                </div>
              </div>
              <div className="col p-2">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/Git_Logo.png"
                      alt="git logo"
                    />
                  </div>
                  <h1 className="card-title">Git</h1>
                </div>
              </div>
              <div className="col p-2">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/HTLM5_Logo.png"
                      alt="html5 logo"
                    />
                  </div>
                  <h1 className="card-title">HTML5</h1>
                </div>
              </div>
              <div className="col p-2">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/Node_Logo.png"
                      alt="node logo"
                    />
                  </div>
                  <h1 className="card-title">Node</h1>
                </div>
              </div>
              <div className="col p-2">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/PostgreSQL_Logo.png"
                      alt="postgresql logo"
                    />
                  </div>
                  <h1 className="card-title">PostgreSQL</h1>
                </div>
              </div>
              <div className="col p-2">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/React_Logo.png"
                      alt="react logo"
                    />
                  </div>
                  <h1 className="card-title">React</h1>
                </div>
              </div>
              <div className="col p-2">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/React-Victory_Logo.jpeg"
                      alt="react-victory logo"
                    />
                  </div>
                  <h1 className="card-title">Victory.js</h1>
                </div>
              </div>
              <div className="col p-2">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/REST_API_Logo.png"
                      alt="rest api logo"
                    />
                  </div>
                  <h1 className="card-title">REST API</h1>
                </div>
              </div>
              <div className="col p-2">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/Swift_Logo.png"
                      alt="swift logo"
                    />
                  </div>
                  <h1 className="card-title">Swift</h1>
                </div>
              </div>
              <div className="col p-2">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/WebPack_Logo.png"
                      alt="webpack logo"
                    />
                  </div>
                  <h1 className="card-title">WebPack</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h1 id="connect">Connect</h1>
        <a href="github.com/stonef13">GitHub</a>
        <a href="linkedin.com/in/stonefuglaar">LinkedIn</a>
        <p>email: rsfuglaar@gmail.com</p>
      </div>
    )
  }
}

export default Main
