import React from 'react';
import Education from "./Education";
import Experience from "./Experience";
import Home from "./Home";
import Contact from "./Contact";
import Skills from "./Skills";
import Error from "./Error"
import LinkUp from "./LinkUp";
import Extension from "./Extension";
import Portfolio from "./Portfolio"
import logo from "./Jason Avalos.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


class Bar extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = { active: 0, class: "navbar-burger burger"  };
    }
  
    handleClick(event) {
      if(this.state.active === 0){
        this.setState({
            active: 1,
            class: "navbar-burger burger is-active"
          });
      }
      else{
        this.setState({
            active: 0,
            class: "navbar-burger burger"
          });
      }
    }
    render() {
        if(this.props.active){
            return (
            <div>
                <nav className="level is-size-5">
                <p className="level-item ">
                    <a className="link is-info" href="/education">Education</a>
                </p>
                <p className="level-item ">
                    <a className="link is-info" href="/experience">Experience</a>
                </p>
                <p className="level-item " >
                    <a className="link is-info" href="/technicalskills">Technical Skills</a>
                </p>
                <p className="level-item ">
                    <a className="link is-info" href="/contact">Contact</a>
                </p>
                <p className="level-item ">
                    <a className="link is-info" href="/linkupproject">LinkUp Project</a>
                </p>
                <p className="level-item ">
                    <a className="link is-info" href="/portfolio">Portfolio Project</a>
                </p>
                <p className="level-item ">
                    <a className="link is-info" href="/extensionproject">Extension Project</a>
                </p>
            </nav>

      </div>  
      );
    }
    else{
        return null;
    }
    }
  }




class MobileMenuView extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = { isActive: false, class: "navbar-burger burger"  };
    }
  
    handleClick(event) {
      if(this.state.isActive === false){
        this.setState({
            isActive: true,
            class: "navbar-burger burger is-active"
          });
      }
      else{
        this.setState({
            isActive: false,
            class: "navbar-burger burger"
          });
      }

    }
    render() {
      return (
          <div>
          <div className="navbar-brand">
          <a className="navbar-item" href="/">
              <img src={logo}  width={200} height={170} alt="logo"/>
          </a>
          <div className={this.state.class} data-target="navbarExampleTransparentExample" onClick={this.handleClick}>
            <span></span>
            <span></span>
            <span></span>
            <div></div>
          </div>
      </div>  
      <Bar active={this.state.isActive}/>
      </div>
      );
    }
  }


function NavigationBar() {
    return (
        <Router>            
            <nav className="navbar is-dark">
                   <MobileMenuView />
                <div id="navbarExampleTransparentExample" className="navbar-menu">

                    <div className="navbar-start">

                        {/* Home Button */}
                        <span className="navbar-item">
                    <a className="button is-white is-outlined" href="/">
                      <span className="icon">
                        <i className="fa fa-home" />
                      </span>
                      <span>Home</span>
                    </a>
                  </span>
                        {/* Home Button  */}

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
                                <a className="navbar-item" href="/portfolio">
                                    Portfolio Webapp
                                </a>
                                <a className="navbar-item" href="/extensionproject">
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
                <Route exact path="/extensionproject">
                    <Extension/>
                </Route>
                <Route exact path="/portfolio">
                       <Portfolio/>
                </Route>
                <Route > {/*  in case, no url is working    */}
                    <Error/>
                </Route>
            </Switch>

        </Router>
    );
}
export default NavigationBar;