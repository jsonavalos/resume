import React from 'react';
import Django from './Django.png'
import Javascript from './imagesSkills/javascript.png'
import Python from './imagesSkills/python.png'
import HTML from './imagesSkills/html.png'
function Portfolio() {
    return (
        <div>
        <section className="hero is-info is-medium is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title has-text-black is-size-1">
                Portfolio Webapp
              </h1>
              <h2 className="subtitle">
                A web application that I created for people to have a visual of my work,education and experience.
              </h2>
            </div>
          </div>
        </section>  
        <section className="container">
          <div className="intro column is-5 has-text-left ">
            <p className="title has-text-success">Development Process</p>
          </div>
          <div className="intro is-5 has-text-left">
            <p className="subtitle ">I created this website using React to practice with the framework and learn JSX. I'm keep on improving this website because I just realized that it has some issues with mobile devices that I've been trying to fix.</p>
          </div>
     

          <div className="sandbox ">
            <div className="tile is-ancestor">
              <div className="tile is-parent is-shady is-3">
                <article className="tile is-child notification is-white">
                  <p className="title">React</p>
                  <figure className="image is-4by3">
                        <img src={Django}  alt="Django"/>
                  </figure>
                </article>
              </div>
              <div className="tile is-parent is-shady is-3">
                <article className="tile is-child notification is-white">
                  <p className="title">JSX</p>
                  <figure className="image is-4by3">
                        <img src={Javascript}  alt="Javascript"/>
                  </figure>
                </article>
              </div>
              <div className="tile is-parent is-shady is-3">
                <article className="tile is-child notification is-white">
                  <p className="title">npm</p>
                  <figure className="image is-4by3">
                        <img src={Python}  alt="Python"/>
                  </figure>
                </article>
              </div>

              <div className="tile is-parent is-shady is-3">
                <article className="tile is-child notification is-white">
                  <p className="title">HTML</p>
                  <figure className="image is-4by3">
                        <img src={HTML}  alt="HTML"/>
                  </figure>
                </article>
              </div>

 

            </div>
            <div className="tile is-ancestor">
            <div className="tile is-parent is-shady ">
                <article className="tile is-child notification is-white">
                  <p className="title">Bulma</p>
                  <figure className="image is-4by3">
                        <img src={HTML}  alt="HTML"/>
                  </figure>
                </article>
              </div>
              <div className="tile is-parent is-shady">
                <article className="tile is-child notification is-white">
                  <p className="title">Netlify</p>
                  <figure className="image is-4by3">
                        <img src={HTML}  alt="HTML"/>
                  </figure>
                </article>
              </div>

            <div className="tile is-parent is-shady ">
                <article className="tile is-child notification is-white">
                  <p className="title">HTML</p>
                  <figure className="image is-4by3">
                        <img src={HTML}  alt="HTML"/>
                  </figure>
                </article>
              </div>


            </div>



          </div>
        </section>
      </div>
        
    )}
export default Portfolio;