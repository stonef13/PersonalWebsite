import React from 'react'
import {Link} from 'react-scroll'
import Navbar from './navbar'

class Main extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="intro">
          <h4>
            Hello. My name is Stone Fuglaar and I'm a software engineer living
            in Los Angeles, California.
          </h4>
          <Link
            className="link"
            spy={true}
            smooth={true}
            offset={-80}
            duration={700}
            to="work"
          >
            <h4 className="learn-more">Learn More</h4>
          </Link>
        </div>
        <div className="work" id="work">
          <h1>Work</h1>

          <div className="container">
            <div className="row">
              <div className="col-md align-self-start">
                <a href="https://fsahedgehog.herokuapp.com/">
                  <img
                    src="work_images/HedgeHog_Work.png"
                    alt="hedgehog poster"
                    className="poster"
                  />
                </a>
              </div>
              <div className="col-md align-self-center">
                <a href="https://links-lights.herokuapp.com/">
                  <img
                    src="work_images/LinksLights_Work.png"
                    alt="link's lights poster"
                    className="poster"
                  />
                </a>
              </div>
              <div className="col-md align-self-end">
                <a href="https://rsfuglaar.medium.com/switching-from-javascript-to-swift-2b1c4c415a16">
                  <img
                    src="work_images/Switching_From_JavaScript_To_Swift_Work.png"
                    alt="swift publication photo"
                    className="poster"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container about-container" id="about-me">
          <div className="row">
            <div className="col-sm">
              <img
                className="about-img"
                src="my_image/Screen Shot 2021-04-13 at 10.28.26.png"
              />
            </div>
            <div className="col-sm">
              <h1 className="about-header">About Me</h1>
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
                <div className="card card-skill">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/JavaScript_Logo.png"
                      alt="javascript icon"
                    />
                  </div>
                  <h5 className="card-title">JavaScript</h5>
                </div>
              </div>
              <div className="col p-2">
                <div className="card card-skill">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/Bootstrap_Logo.png"
                      alt="bootstrap logo"
                    />
                  </div>
                  <h5 className="card-title">Bootstrap</h5>
                </div>
              </div>
              <div className="col p-2">
                <div className="card card-skill">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/CSS_Logo.png"
                      alt="css logo"
                    />
                  </div>
                  <h5 className="card-title">CSS3</h5>
                </div>
              </div>
              <div className="col p-2">
                <div className="card card-skill">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/Express_Logo.png"
                      alt="express logo"
                    />
                  </div>
                  <h5 className="card-title">Express</h5>
                </div>
              </div>
              <div className="col p-2">
                <div className="card card-skill">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/Git_Logo.png"
                      alt="git logo"
                    />
                  </div>
                  <h5 className="card-title">Git</h5>
                </div>
              </div>
              <div className="col p-2">
                <div className="card card-skill">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/HTLM5_Logo.png"
                      alt="html5 logo"
                    />
                  </div>
                  <h5 className="card-title">HTML5</h5>
                </div>
              </div>
              <div className="col p-2">
                <div className="card card-skill">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/Node_Logo.png"
                      alt="node logo"
                    />
                  </div>
                  <h5 className="card-title">Node</h5>
                </div>
              </div>
              <div className="col p-2">
                <div className="card card-skill">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/PostgreSQL_Logo.png"
                      alt="postgresql logo"
                    />
                  </div>
                  <h5 className="card-title">PostgreSQL</h5>
                </div>
              </div>
              <div className="col p-2">
                <div className="card card-skill">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/React_Logo.png"
                      alt="react logo"
                    />
                  </div>
                  <h5 className="card-title">React</h5>
                </div>
              </div>
              <div className="col p-2">
                <div className="card card-skill">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/React-Victory_Logo.jpeg"
                      alt="react-victory logo"
                    />
                  </div>
                  <h5 className="card-title">Victory.js</h5>
                </div>
              </div>
              <div className="col p-2">
                <div className="card card-skill">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/REST_API_Logo.png"
                      alt="rest api logo"
                    />
                  </div>
                  <h5 className="card-title">REST API</h5>
                </div>
              </div>
              <div className="col p-2">
                <div className="card card-skill">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/Swift_Logo.png"
                      alt="swift logo"
                    />
                  </div>
                  <h5 className="card-title">Swift</h5>
                </div>
              </div>
              <div className="col p-2">
                <div className="card card-skill">
                  <div className="card-body">
                    <img
                      className="card-img-top"
                      src="skill_logos/WebPack_Logo.png"
                      alt="webpack logo"
                    />
                  </div>
                  <h5 className="card-title">WebPack</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONNECT */}

        <footer className="bg-dark text-center text-white" id="connect">
          <h1>Connect</h1>
          <div className="container p-4">
            <section className="mb-4">
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="github.com/stonef13"
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="linkedin.com/in/stonefuglaar"
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
            </section>
            <h5>rsfuglaar@gmail.com</h5>
          </div>
          <div
            className="text-center p-3"
            style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
          >
            © Copyright 2021 Stone Fuglaar
          </div>
          {/* <div className="text-center p-3 text-light">
            © Copyright 2021 Stone Fuglaar
          </div> */}
        </footer>
      </div>
    )
  }
}

export default Main
