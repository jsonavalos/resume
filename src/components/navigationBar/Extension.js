import React from 'react';
import Django from './Django.png'
import Javascript from './imagesSkills/javascript.png'
import Python from './imagesSkills/python.png'
import HTML from './imagesSkills/html.png'

function Extension() {
    return (
        <div>

        <section className="hero is-info is-medium is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title has-text-black">
                Velocity Raptor Chrome Extension 

              </h1>
              <h2 className="subtitle">
                An application used to schedule meetings among a large number of individuals that cannot manually decide on a date and time due to group size.
              </h2>
            </div>
          </div>
        </section> 

        <section className="section">
        <div className="container has-text-centered py-4">
          <h2 className="title mb-6">PiperNet Setup</h2>
          <div className="columns is-multiline is-centered">
            <div className="column is-8 is-4-widescreen mb-5">
              <div className="block"><img src="placeholder/pictures/bg_16-9.svg?primary=00d1b2" alt="" /></div>
              <h4 className="title"><small className="number">1</small> Move Data</h4>
              <p>Using our Piper Assistant application, you can move your data to be stored our decentralized network with simple drag &amp; drop.</p>
            </div>
            <div className="column is-8 is-4-widescreen mb-5">
              <div className="block"><img src={Python} alt="" /></div>
              <h4 className="title"><small className="number">2</small> Integrate Software</h4>
              <p>We want to make sure that you can keep using the software that you use to manage your business.</p>
            </div>
            <div className="column is-8 is-4-widescreen mb-5">
              <div className="block"><img src="placeholder/pictures/bg_16-9.svg?primary=00d1b2" alt="" /></div>
              <h4 className="title"><small className="number">3</small> Ongoing Support</h4>
              <p>As with all innovative technologies, sometimes unpredictable things will happen, and you can always count on our support to solve issues for&nbsp;you.</p>
            </div>
          </div>
          <div className="buttons is-centered"><a className="button is-primary" href="/">Learn more</a></div>
        </div>
      </section>




        <section className="container">
          <div className="intro column is-5 ">
            <p className="title has-text-success">Development Process</p>
          </div>
          <div className="intro is-5 ">
            <p className="subtitle ">I was the <b>database specialist</b> for the team.However, I spent most of my time, using Javascript,Python,Bulma and  HTML to design the overall look of the application.Moreover, I did the research to implement the database and the documentation for it.</p>
          </div>
          <div className="intro is-5 ">
            <a href="http://linkup-env.3yijpwf3qp.us-west-2.elasticbeanstalk.com/" target="_blank" rel="noopener noreferrer">To view our website please click here</a>
          </div>

          <div className="sandbox">
            <div className="tile is-ancestor">
              <div className="tile is-parent is-shady">
                <article className="tile is-child notification is-white">
                  <p className="title">Django</p>
                  <figure className="image is-4by3">
                        <img src={Django}  alt="Django"/>
                  </figure>
                </article>
              </div>
              <div className="tile is-parent is-shady">
                <article className="tile is-child notification is-white">
                  <p className="title">Javascript</p>
                  <figure className="image is-4by3">
                        <img src={Javascript}  alt="Javascript"/>
                  </figure>
                </article>
              </div>
              <div className="tile is-parent is-shady">
                <article className="tile is-child notification is-white">
                  <p className="title">Python</p>
                  <figure className="image is-4by3">
                        <img src={Python}  alt="Python"/>
                  </figure>
                </article>

              </div>
            </div>
            <div className="tile is-ancestor">
              <div className="tile is-parent is-shady">
                <article className="tile is-child notification is-white">
                  <p className="title">HTML</p>
                  <figure className="image is-4by3">
                        <img src={HTML}  alt="HTML"/>
                  </figure>
                </article>
              </div>
              <div className="tile is-parent is-shady">
                <article className="tile is-child notification is-white">
                  <p className="title">Bulma</p>
                </article>
              </div>
              <div className="tile is-parent is-shady">
                <article className="tile is-child notification is-white">
                  <p className="title">AWS</p>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
        
    )}
export default Extension;