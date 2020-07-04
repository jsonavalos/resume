import React from 'react';
import Django from './Django.png'
import Javascript from './imagesSkills/javascript.png'
import Python from './imagesSkills/python.png'
import HTML from './imagesSkills/html.png'
import linktogithub from './Extensions_images/linktogithub.png'
import name from './Extensions_images/name.png'
import settings from './Extensions_images/settings.png'
import video1 from './Extensions_images/video1.mov'
import video2 from './Extensions_images/video2.mov'

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
                <p>An extension intended for software engineers to keep track of velocity in a agile team</p>

              </h2>
            </div>
          </div>
        </section> 

        <section className="section">
        <div className="container has-text-centered py-4">
         
          <div className="columns is-multiline is-centered">

            <div className="column is-8 is-4-widescreen mb-5">
              <div className="block"><img src={settings} alt="" /></div>
              <h4 className="title"><small className="number">1</small> Settings Page</h4>
            </div>

            <div className="column is-8 is-4-widescreen mb-5">
              <video  controls autoplay>
                    <source src={video1} type="video/mp4"></source>
            </video>
              <h4 className="title"><small className="number">2</small> Raptor Running</h4>
            </div>


            <div className="column is-8 is-4-widescreen mb-5">
              <div className="block"><img src={name} alt="" /></div>
              <h4 className="title"><small className="number">3</small> Raptor Naming</h4>
            </div>

            <div className="column is-8 is-4-widescreen mb-5">
            <div className="block"><img src={linktogithub} alt="" /></div>
              <h4 className="title"><small className="number">4</small> Link to GitHub</h4>
            </div>

            <div className="column is-9 is-7-widescreen mb-5">
           <br></br><br></br>
            <video  controls autoplay>
                    <source src={video2} type="video/mp4"></source>
            </video>
            <h4 className="title"><small className="number">5</small> K e v i n 's end</h4>
            </div>

          </div>
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
                  <figure className="image is-2">
                        <img src={Django}  alt="Django"/>
                  </figure>
                </article>
              </div>
              <div className="tile is-parent is-shady">
                <article className="tile is-child notification is-white">
                  <p className="title">Javascript</p>
                  <figure className="image">
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