import React from 'react'

class Main extends React.Component {
  render() {
    return (
      <div>
        <div className="intro">
          <h1>
            Hi. I'm Stone Fuglaar and I'm a software engineer living in Los
            Angeles, California.
          </h1>
        </div>
        <div className="work">
          <h1>Work</h1>

          <a href="https://fsahedgehog.herokuapp.com/">
            <img
              src="work_images/Poster-quote-PixTeller.png"
              alt="hedgehog poster"
            />
          </a>

          <a href="https://links-lights.herokuapp.com/">
            <img
              src="work_images/Links-Lights-PixTeller.png"
              alt="link's lights poster"
            />
          </a>

          <img
            src="work_images/Swift_Work.png"
            className="work-photos"
            alt="swift publication photo"
          />
          <h2>Switching from JavaScript to Swift</h2>
          <a href="https://rsfuglaar.medium.com/switching-from-javascript-to-swift-2b1c4c415a16" />
        </div>
        <h1>About</h1>
        <p>
          Before entering the world of tech, I was involved in the performing
          arts. I had dabbled in coding since high school, but when I actually
          dove into it, I absolutely fell in love. I started with self teaching,
          and then became more and more involved until I found myself deep in an
          immersive coding bootcamp with Fullstack Academy. There I was
          certified in a tech stack revolving around Node.js, React, PostgreSQL,
          and Express.js. With a huge desire to learn, I immediately became
          fascinated by the power of technology (Especially JavaScript). This is
          something that is changing every day and always leads to an
          opportunity to learn and grow. I plan to combine my creative
          background with my coding skills to effectively create, problem solve,
          and communicate to lead to an output of success.
        </p>

        <p>
          When I’m not coding or learning new technology, you can find me
          playing the guitar, writing music, hiking, or finding places to
          explore in my new home of Los Angeles.
        </p>
        <h1>Skills</h1>
        <img
          src="skill_logos/JavaScript_Logo.png"
          className="logos"
          alt="javascript icon"
        />
        <img
          src="skill_logos/Bootstrap_Logo.png"
          className="logos"
          alt="bootstrap logo"
        />
        <img src="skill_logos/CSS_Logo.png" className="logos" alt="css logo" />
        <img
          src="skill_logos/Express_Logo.png"
          className="logos"
          alt="express logo"
        />
        <img src="skill_logos/Git_Logo.png" className="logos" alt="git logo" />
        <img
          src="skill_logos/HTLM5_Logo.png"
          className="logos"
          alt="html5 logo"
        />
        <img
          src="skill_logos/Node_Logo.png"
          className="logos"
          alt="node logo"
        />
        <img
          src="skill_logos/PostgreSQL_Logo.png"
          className="logos"
          alt="postgresql logo"
        />
        <img
          src="skill_logos/React_Logo.png"
          className="logos"
          alt="react logo"
        />
        <img
          src="skill_logos/React-Victory_Logo.jpeg"
          className="logos"
          alt="react-victory logo"
        />
        <img
          src="skill_logos/REST_API_Logo.png"
          className="logos"
          alt="rest api logo"
        />
        <img
          src="skill_logos/Swift_Logo.png"
          className="logos"
          alt="swift logo"
        />
        <img
          src="skill_logos/WebPack_Logo.png"
          className="logos"
          alt="webpack logo"
        />

        <h1>Connect</h1>
        <a href="github.com/stonef13">GitHub</a>
        <a href="linkedin.com/in/stonefuglaar">LinkedIn</a>
        <p>email: rsfuglaar@gmail.com</p>
      </div>
    )
  }
}

export default Main
