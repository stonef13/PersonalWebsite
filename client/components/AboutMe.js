import React from 'react'

const AboutMe = () => {
  return (
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
            Before entering the world of tech, I was involved in the performing
            arts. I had dabbled in coding since high school, but when I actually
            dove into it, I absolutely fell in love. I started with self
            teaching, and then became more and more involved until I found
            myself deep in an immersive coding bootcamp with Fullstack Academy.
            There I was certified in a tech stack revolving around Node.js,
            React, PostgreSQL, and Express.js. With a huge desire to learn, I
            immediately became fascinated by the power of technology (Especially
            JavaScript). This is something that is changing every day and always
            leads to an opportunity to learn and grow. I plan to combine my
            creative background with my coding skills to effectively create,
            problem solve, and communicate to lead to an output of success.
          </p>

          <p>
            When I’m not coding or learning new technology, you can find me
            playing the guitar, writing music, hiking, or finding places to
            explore in my new home of Los Angeles.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
