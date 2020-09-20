import React from 'react';
import linktogithub from './Extensions_images/linktogithub.png'
import name from './Extensions_images/name.png'
import video1 from './Extensions_images/video1.mov'
import video2 from './Extensions_images/video2.mov'
function Extension() {
    return (
        <div className="has-text-centered">

        <section className="hero is-light is-medium is-bold">
          <div className="hero-body">
            <div className="container has-text-centered">
        

              <h1 className="title has-text-black">
                Velocity Raptor
              </h1>
              <h3 className="subtitle has-text-black">
              Chrome Extension
              </h3>
              <h2 className="subtitle is-family-code">
                <p>An extension intended for software engineers to keep track of velocity in a agile team</p>

              </h2>
            </div>
          </div>
        </section> 

        <section className="section">
        <div className="container has-text-centered py-4">
         
          <div className="columns is-multiline is-centered">

            <div className="column is-8 is-4-widescreen mb-5">
            <img src="https://8sdzgw.bn.files.1drv.com/y4mIqfbrcW6lf42CXAJqg5aIBICp_-LMuEt5egNjhcFlp15qlH2m9dT9DHL6t0Eh88RoYT4mhn2mZD1Z1rwFeEmg7mw_MmRG6RdlT3gLKH8VLTKRdJTU1z7xL1bMneodBo9fFoJarXQ2XEmTZu-jagiGfLbPglETzzXHfigjXNpucAnXMyM0SeGyNIP4XFVLoPzVvNduidSxUxZTScNHA48ng?width=1000&height=630&cropmode=none" width="1000" height="630" alt="settings" />
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
          <div className="intro column is-5 has-text-left ">
            <p className="title has-text-success is-family-code">Development Process</p>
          </div>
          <div className="intro is-5 has-text-left">
            <p className="subtitle is-family-code">I was the <b>coder</b> for the team.I used Javascript,Python,Bootstrap and  HTML to design the overall look of the chrome extension.Moreover, I designed the logic to dress the raptor with artifacts according to the user's velocity. <i>This project was not published to the Chrome Web Store.</i></p>
          </div>
          <div className="intro is-5 is-family-code ">
            <a href="https://github.com/cse112-sp20/CalamariCrew" target="_blank" rel="noopener noreferrer">To view the project on Github, please click here</a>
          </div>

          <div className="sandbox">
            <div className="tile is-ancestor">
              <div className="tile is-parent is-shady is-2">
                <article className="tile is-child notification is-white ">
                  <p className="title" style={{wordBreak: 'keep-all'}}>Javascript</p>
                  <figure className="image is-1">
                  <img src="https://8sd6yg.bn.files.1drv.com/y4mezklGaKlWO-YcAna1Bnn-pwK64cHF3yxJI1TF6RLpful3N-ix5leVVcFc63tAoRy95Vik2UfVartYXQ7rAR8aG_Bos2xAzQPbOfkA1V21Bpn6ACdrbZ9hsqFBDRZ-H3YclxejzL3vGopScrJOcznhhryI3nmIzMUpRVWghZfbI-j3o6hYQbAlSsYybeB3iATHw3KQ-z1cvVzfS9y8IPC6g?"  alt="Javascript" />
                  </figure>
                </article>
              </div>
              <div className="tile is-parent is-shady is-2">
                <article className="tile is-child notification is-white">
                  <p className="title">npm</p>
                  <figure className="image">
                  <img src="https://jjwvpw.bn.files.1drv.com/y4mVSNb0fzszDGrMaoVbed6l_iAS3YurSb0TQBmdXkmyspcayVlk0vgI1YvgWx30ABVJw3NrBV68xktgVTPFk0mSWk8SgR9aeVvaHFJSWByi_IrvIOJwRSp3DWQIXjMIDNwEWBcKNft7I5UtYNreSlDG2WWpfBBXDi_t6u0BU1Un4I-O6cexPIagi8LP5-fkuZ62Ab--uLmwZRlnZFmVjuuhQ?" alt="npm" />
                  </figure>
                </article>
              </div>
              <div className="tile is-parent is-shady is-2">
                <article className="tile is-child notification is-white">
                  <p className="title">GitHub</p>
                  <figure className="image is-4by3">
                  <img src="https://8saiwq.bn.files.1drv.com/y4mObR7QoFOsYq6n2630I7OljS0D4Egp09V5ZtXX2c_vwpROVHLU9fG_2v68mcmg4A9U-eBJTI3HD8CYGix2f8ryDHEvg17uQfx_rOMgRqp9i1PDB1TySg90Wi0yYl6-gOi-xWEqlVO3e5A_MSUydb-aecmpFIAnKb38WzavUZTJ3-Y025Z76Wnwyebrr0xyERH7BJGjZbM9YucMeOc8TgcEg?" alt="Github" />
                  </figure>
                </article>

              </div>

              <div className="tile is-parent is-shady is-2">
                <article className="tile is-child notification is-white">
                  <p className="title">HTML</p>
                  <figure className="image is-4by3">
                  <img src="https://8sapbq.bn.files.1drv.com/y4mkRnW61WeK4VoJXjkBeMtEtHSBEx6nuWKosaF1EVSi3LkSlLB2mSbPxq5sCokWWUaQWbEMlfjIDhEoyfCA8sbWiLl87kM6e2aLREa35wkMZcUIv6Px2JzP-1xOOV16PwDzs7E1c4OmFuF9B-fHLEEDJLbD3bHsA157Fhwv50cKx32DkZTY9s1sFqUchIO182qhyMnq6CQEBiJQQXKyb3dhg?" alt="HTML"  />
                  </figure>
                </article>
              </div>

              <div className="tile is-parent is-shady is-2">
                <article className="tile is-child notification is-white">
                  <p className="title" style={{wordBreak: 'keep-all'}}>Boostrap</p>
                  <figure className="image is-4by3">
                  <img src="https://jwrkha.bn.files.1drv.com/y4mfL0mQjPmBVsHaf1WZcsQZm5tA1es7lMR3JcWrAAv7gujsnJKycVtY06_iH0Wqn1j9dHF9sUF4sziztG-y2kIgdsP_jKnNkz59pY0xp-dzuekAtSfDruygx4XJ9i4g7pV2oOqyCMB1YcKMlXwZTSrLg3691cANP0V0XyJnZ_8mLC753267SFFZgUoNXrCcD4b5cSt960LacRfSNFXVZlRmA?" alt="Bootstrap" />
                  </figure>
                </article>
              </div>


              <div className="tile is-parent is-shady is-2">
                <article className="tile is-child notification is-white">
                  <p className="title" >Jest</p>
                  <figure className="image is-4by3">
                  <img src="https://jwq8kq.bn.files.1drv.com/y4m4Q0zRtvok44TmVa7D9OV21DUKGNE1CksO_W-UK7JDQxML908xxLQfgtn4hJVcvS8xGRcM_Mh9WKjbAGXqFCb0obb5RUllANBd6U0VODtxQR9LQZwNNyBo3yd87icQ7KVweyrn3dtqJURjFTNZ54AiHCMpbezZGmKBA2Y-FcsR3eWZZfQHliAPGn_1lJytSdjO650dSNDiIlRovDnoKKvhg?" alt="JEST" />
                  </figure>
                </article>
              </div>

            </div>
    
          </div>
        </section>
      </div>
        
    )}
export default Extension;