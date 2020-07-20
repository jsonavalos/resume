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
                                <Typing speed={500}>
            <p className="title has-text-white is-family-code" style={{fontSize: '100px' }}>Jason Avalos</p>
            </Typing>
                               </div>

                

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