import React from 'react';
import Education from "./Education";
import Experience from "./Experience";
import Home from "./Home";
import Contact from "./Contact";
import Skills from "./Skills";
import Error from "./Error"
import LinkUp from "./LinkUp";
import logo from "./Jason Avalos.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function NavBAr() {
    return (
        <Router>
            <nav className="navbar is-dark">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src={logo}  width={200} height={170} alt="logo"/>
                    </a>
                    <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
                <div id="navbarExampleTransparentExample" className="navbar-menu">

                    <div className="navbar-start">

                        {/* Home Botton */}
                        <span className="navbar-item">
                    <a className="button is-white is-outlined" href="/">
                      <span className="icon">
                        <i className="fa fa-home" />
                      </span>
                      <span>Home</span>
                    </a>
                  </span>
                        {/* Home Botton  */}

                        {/* Education */}
                        <span className="navbar-item">
                    <a className="button is-white is-outlined" href="/education">
                      <span>Education</span>
                    </a>
                  </span>
                        {/* Education  */}

                        {/* Experience */}
                        <span className="navbar-item">
                    <a className="button is-white is-outlined" href="/experience">
                      <span>Experience</span>
                    </a>
                  </span>
                        {/* Experience  */}


                        {/* Experience */}
                        <span className="navbar-item">
                    <a className="button is-white is-outlined" href="/technicalskills">
                      <span> Technical Skills</span>
                    </a>
                  </span>
                        {/* Experience  */}


                        <div className="navbar-item has-dropdown is-hoverable">


                            <span className="navbar-item">
                            <a className="navbar-link button is-white is-outlined" href="/">
                                <span> Projects</span>
                            </a>
                             </span>


                            <div className="navbar-dropdown is-boxed">
                                <a className="navbar-item has-text-centered" href="/linkupproject">
                                    LinkUp Webapp
                                </a>
                                <a className="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                                    Portfolio Webapp
                                </a>
                                <a className="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                                    Chrome Extension
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">



                            {/* Contact */}
                            <span className="navbar-item">
                    <a className="button is-white is-outlined" href="/contact">
                        <span className="icon">
                        <i className="fa fa-phone" />
                      </span>
                      <span>Contact</span>
                    </a>
                  </span>
                            {/* Contact  */}






                    </div>
                </div>
            </nav>


            <Switch>
                <Route exact path="/education">
                       <Education/>
                </Route>
                <Route exact path="/experience">
                    <Experience/>
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/contact">
                    <Contact />
                </Route>
                <Route exact path="/technicalskills">
                    <Skills/>
                </Route>
                <Route exact path="/linkupproject">
                    <LinkUp/>
                </Route>
                <Route > {/*  in case, no url is working    */}
                    <Error/>
                </Route>
            </Switch>

            <nav className="level is-size-5">
                <p className="level-item has-text-centered">
                    <a className="link is-info" href="/education">Education</a>
                </p>
                <p className="level-item has-text-centered">
                    <a className="link is-info" href="/experience">Experience</a>
                </p>
                <p className="level-item has-text-centered" href="/">
                    <img src={logo}  alt="" style={{height: '30px'}}/>
                </p>
                <p className="level-item has-text-centered" >
                    <a className="link is-info" href="/technicalskills">Technical Skills</a>
                </p>
                <p className="level-item has-text-centered">
                    <a className="link is-info" href="/contact">Contact</a>
                </p>
            </nav>









        </Router>
    );
}
export default NavBAr;