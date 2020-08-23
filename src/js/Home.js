import React from 'react';
import './CSSfiles/HomeCSS.css'
import Typing from 'react-typing-animation';



function Home() {
    return (
        <div id="Home" className="hero-body" >







            <section className="hero-body" >

                <div className="hero-body">
                    <div className="container  is-centered ">

                            <br/> <br/>  <br/><br/> <br/>  <br/>
                            <div className="column is-6 is-offset-3 is-centered">
                                <progress className="progress is-small is-primary" max="100">15%</progress>
                            </div>
                            <div className="intro">
                                <Typing speed={200} >
            <p className="title has-text-white is-family-code is-size-1" >Jason Avalos</p>
            </Typing>
                               </div>
                        <div className="column is-6 is-offset-3 is-centered">
                            <progress className="progress is-small is-primary" max="100">15%</progress>

                            
    <a class="button " href="./JasonAvalosResume.pdf" download>
      <span class="icon is-small">
        <i class="fa fa-download"></i>
      </span>
      <span className="is-family-code">Jason's Resume</span>
    </a>

                        </div>

                    </div>

                </div>


            </section>

<section className="has-text-grey-dark">




        </section>








        </div>
///Users/jsonavalos/app/my-app/src/components/navigationBar
    );
}
export default Home;