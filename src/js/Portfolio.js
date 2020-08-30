import React from 'react';
import REACT from './imagesSkills/react.png'
import JSX from './imagesSkills/jsx.png'
import NETLIFY from './imagesSkills/netlify-logo.png'


function Portfolio() {
    return (
        <div>
        <section className="hero is-info is-medium is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
              
              <h1 className="title has-text-black">
                PORTFOLIO
              </h1>
              <h3 className="subtitle has-text-black">
                Web Application
              </h3>

              <h2 className="subtitle is-family-code">
                A web application that I created for people to have a visual of my work,education and experience.
              </h2>
            </div>
          </div>
        </section>  
        <section className="container">
          <div className="intro column is-5 has-text-left ">
            <p className="title has-text-success is-family-code">Development Process</p>
          </div>
          <div className="intro is-5 has-text-left">
            <p className="subtitle is-family-code ">I created this website using React to practice with the framework and learn JSX. I'm keep on improving this website because I just realized that it has some issues with mobile devices that I've been trying to fix.</p>
          </div>
     

          <div className="sandbox ">
            <div className="tile is-ancestor">
              <div className="tile is-parent is-shady is-2">
                <article className="tile is-child notification is-white">
                  <p className="title">React</p>
                  <figure className="image is-4by3">
                        <img src={REACT}  alt="React"/>
                  </figure>
                </article>
              </div>
              <div className="tile is-parent is-shady is-2">
                <article className="tile is-child notification is-white">
                  <p className="title">JSX</p>
                  <figure className="image is-4by3">
                        <img src={JSX}  alt="Javascript"/>
                  </figure>
                </article>
              </div>
              <div className="tile is-parent is-shady is-2">
                <article className="tile is-child notification is-white">
                  <p className="title">npm</p>
                  <figure className="image is-4by3">
                  <img src="https://jjwvpw.bn.files.1drv.com/y4mVSNb0fzszDGrMaoVbed6l_iAS3YurSb0TQBmdXkmyspcayVlk0vgI1YvgWx30ABVJw3NrBV68xktgVTPFk0mSWk8SgR9aeVvaHFJSWByi_IrvIOJwRSp3DWQIXjMIDNwEWBcKNft7I5UtYNreSlDG2WWpfBBXDi_t6u0BU1Un4I-O6cexPIagi8LP5-fkuZ62Ab--uLmwZRlnZFmVjuuhQ?" alt="npm" />
                  </figure>
                </article>
              </div>

              <div className="tile is-parent is-shady is-2">
                <article className="tile is-child notification is-white">
                  <p className="title">HTML</p>
                  <figure className="image is-4by3">
                  <img src="https://8sapbq.bn.files.1drv.com/y4mkRnW61WeK4VoJXjkBeMtEtHSBEx6nuWKosaF1EVSi3LkSlLB2mSbPxq5sCokWWUaQWbEMlfjIDhEoyfCA8sbWiLl87kM6e2aLREa35wkMZcUIv6Px2JzP-1xOOV16PwDzs7E1c4OmFuF9B-fHLEEDJLbD3bHsA157Fhwv50cKx32DkZTY9s1sFqUchIO182qhyMnq6CQEBiJQQXKyb3dhg?"  alt="HTML" />

                  </figure>
                </article>
              </div>

              <div className="tile is-parent is-shady is-2">
                <article className="tile is-child notification is-white">
                  <p className="title">Bulma</p>
                  <figure className="image is-4by3">
                  <img src="https://jwpqpq.bn.files.1drv.com/y4mxZytAcIwUKqY0c89CvDaBzarOZHUs9TjBLAf4xXdfkl3OSXtPFVUAcErQtfYzJbsmf3rjuEGGpr3Vwq1GJZXdr5Dx9l_DhI2rgnnvzPuCLzJ7774Nh1LGySowWOEfoucS-PjegRDX3LEy2DxI6M5bAnYwqpQBBcSzyDZb48dXdC0UGdHayPwMMbV8kFQ95zKkLAfxe_lxod9NzVyglcPhg?" alt="BULMA" />
                  </figure>
                </article>
              </div>
 
              <div className="tile is-parent is-shady is-2">
                <article className="tile is-child notification is-white">
                  <p className="title">Netlify</p>
                  <figure className="image is-4by3">
                        <img src={NETLIFY}  alt="HTML"/>
                  </figure>
                </article>
              </div>


            </div>

    



          </div>
        </section>
      </div>
        
    )}
export default Portfolio;