import React from 'react';
import UCSD from './geisel.jpeg'
import SWC from './SWC.png'

function Education() {
    return (
      <div>

          <div className="hero-body has-background-grey-light">
              <div className="container has-text-centered">
                  <div className="columns is-vcentered">
                      <div className="column is-5">
                          <figure className="image is-4by3">
                              <img src={UCSD} alt="Description" />
                          </figure>
                      </div>
                      <div className="column is-6 is-offset-1">
                          <h1 className="title is-2">
                              University of California, San Diego
                          </h1>
                          <h2 className="subtitle is-4">
                              B.S. Mathematics - Computer Science
                          </h2>
                          <br />
                          <p className="has-text-centered">
                              <a className="button is-medium is-info is-outlined">
                                  Coursework
                              </a>
                          </p>
                      </div>
                  </div>
              </div>


              <div className="container has-text-centered">
                  <div className="columns is-vcentered">

                      <div className="column is-6 is-offset-1">
                          <h1 className="title is-2">
                              Southwestern College
                          </h1>
                          <h2 className="subtitle is-4">
                              A.S Mathematics
                              <br/>
                              A.A Mathematics
                          </h2>
                          <br />
                          <p className="has-text-centered">
                              <a className="button is-medium is-info is-outlined">
                                  Coursework
                              </a>
                          </p>
                      </div>
                      <div className="column is-5">
                          <figure className="image is-4by3">
                              <img src={SWC} alt="Description22" />
                          </figure>
                      </div>
                  </div>
              </div>
          </div>
      </div>
///Users/jsonavalos/app/my-app/src/components/navigationBar
    );
}
export default Education;