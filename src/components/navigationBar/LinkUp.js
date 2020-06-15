import React from 'react';
import Django from './Django.png'
import Javascript from './imagesSkills/javascript.png'
import Python from './imagesSkills/python.png'
import HTML from './imagesSkills/html.png'
function LinkUp() {
    return (
        <div>
        <section className="hero is-info is-medium is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title has-text-black">
                LinkUp Web Application
              </h1>
              <h2 className="subtitle">
                An application used to schedule meetings among a large number of individuals that cannot manually decide on a date and time due to group size.
              </h2>
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
export default LinkUp;