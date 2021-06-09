import React from 'react'

const Work = () => {
  return (
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
  )
}

export default Work
