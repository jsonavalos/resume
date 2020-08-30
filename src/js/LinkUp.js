import React from 'react';
import Django from './Django.png'
import AWS from './imagesSkills/aws.png'

function LinkUp() {
    return (
        <div>
        <section className="hero is-light is-medium is-bold">
          <div className="hero-body">
            <div className="container has-text-centered ">
              <h1 className="title has-text-black">
                LINKUP 
              </h1>
              <h3 className="subtitle has-text-black">
                Web Application
              </h3>
              <h2 className="subtitle is-family-code">
                An application used to schedule meetings among a large number of individuals that cannot manually decide on a date and time due to group size.
              </h2>
            </div>
          </div>
        </section>  
        <section className="container">
          <div className="intro column is-5 has-text-left">
            <p className="title has-text-success is-family-code">Development Process</p>
          </div>
          <div className="intro is-5 has-text-left is-family-code">
            <p className="subtitle ">I was the <b>database specialist</b> for the team.However, I spent most of my time, using Javascript,Python,Bulma and  HTML to design the overall look of the application.Moreover, I did the research to implement the database and the documentation for it.</p>
          </div>
          <br></br>
          <div className="intro is-size-4 is-family-code">
            <a href="http://linkup-env.3yijpwf3qp.us-west-2.elasticbeanstalk.com/" target="_blank" rel="noopener noreferrer" >To view our website please click here</a>
          </div>

          <div className="sandbox">
            <div className="tile is-ancestor">
              <div className="tile is-parent is-shady is-2">
                <article className="tile is-child notification is-white">
                  <p className="title">Django</p>
                  <figure className="image is-4by3">
                        <img src={Django}  alt="Django"/>
                  </figure>
                </article>
              </div>
              <div className="tile is-parent is-shady is-2">
                <article className="tile is-child notification is-white">
                  <p className="title" style={{wordBreak: 'keep-all'}}>Javascript</p>
                  <figure className="image is-4by3">
                  <img src="https://8sd6yg.bn.files.1drv.com/y4mezklGaKlWO-YcAna1Bnn-pwK64cHF3yxJI1TF6RLpful3N-ix5leVVcFc63tAoRy95Vik2UfVartYXQ7rAR8aG_Bos2xAzQPbOfkA1V21Bpn6ACdrbZ9hsqFBDRZ-H3YclxejzL3vGopScrJOcznhhryI3nmIzMUpRVWghZfbI-j3o6hYQbAlSsYybeB3iATHw3KQ-z1cvVzfS9y8IPC6g?" alt="Javascript" />
                  </figure>
                </article>
              </div>
              <div className="tile is-parent is-shady is-2">
                <article className="tile is-child notification is-white">
                  <p className="title">Python</p>
                  <figure className="image is-4by3">
                  <img src="https://jjvrha.bn.files.1drv.com/y4mO41aWThQCHkxWz4O4KZjjrbrVdyjTWPTCvoh8BlC7ZclWfbV39451Wr3bGKSiC4jP0EoelyZxTiQGHZnHg1BnxLY5BTw6Av5BGzQoksrBARx628sfzcHboFm-Rma5-BaoX8Vb6B-ww6z-6JQxH7OWKzxqK_Emcf7TO_U5JSAoJpt76ZS7bcPSZ7-2uWkNgNMkkvpGNwbKu6EUwiNvBC2iQ?" alt="Python" />
                  </figure>
                </article>
              </div>

              <div className="tile is-parent is-shady is-2">
                <article className="tile is-child notification is-white">
                  <p className="title">HTML</p>
                  <figure className="image is-4by3">
                  <img src="https://8sapbq.bn.files.1drv.com/y4mkRnW61WeK4VoJXjkBeMtEtHSBEx6nuWKosaF1EVSi3LkSlLB2mSbPxq5sCokWWUaQWbEMlfjIDhEoyfCA8sbWiLl87kM6e2aLREa35wkMZcUIv6Px2JzP-1xOOV16PwDzs7E1c4OmFuF9B-fHLEEDJLbD3bHsA157Fhwv50cKx32DkZTY9s1sFqUchIO182qhyMnq6CQEBiJQQXKyb3dhg?" alt="HTML" />

                  </figure>
                </article>
              </div>

              <div className="tile is-parent is-shady is-2">
                <article className="tile is-child notification is-white">
                  <p className="title">Bulma</p>
                  <figure className="image is-4by3">
                  <img src="https://jwpqpq.bn.files.1drv.com/y4mxZytAcIwUKqY0c89CvDaBzarOZHUs9TjBLAf4xXdfkl3OSXtPFVUAcErQtfYzJbsmf3rjuEGGpr3Vwq1GJZXdr5Dx9l_DhI2rgnnvzPuCLzJ7774Nh1LGySowWOEfoucS-PjegRDX3LEy2DxI6M5bAnYwqpQBBcSzyDZb48dXdC0UGdHayPwMMbV8kFQ95zKkLAfxe_lxod9NzVyglcPhg?" alt="Bulma" />
                  </figure>
                </article>
              </div>
              <div className="tile is-parent is-shady is-2">
                <article className="tile is-child notification is-white">
                  <p className="title">AWS</p>
                  <figure className="image is-4by3">
                        <img src={AWS}  alt="HTML"/>
                  </figure>
                </article>
              </div>

            </div>

          </div>
        </section>
      </div>
        
    )}
export default LinkUp;