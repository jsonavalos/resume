import React from 'react';
import './CSSfiles/HomeCSS.css'
import {Wave} from "react-animated-text";

function Home() {
    return (
        <div id="Home" className="hero-body">







            <section className="hero-body">

                <div className="hero-body">
                    <div className="container  is-centered">

                            <br/> <br/>  <br/><br/> <br/>  <br/>
                            <div className="column is-6 is-offset-3 is-centered">
                                <progress className="progress is-small is-primary" max="100">15%</progress>
                            </div>
                            <h1 className="title " id="MainPageTitle">
                                <Wave text="Jason Avalos"  effect="stretch" effectChange={1.10} />
                            </h1>
                        <div className="column is-6 is-offset-3 is-centered">
                            <progress className="progress is-small is-primary" max="100">15%</progress>
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