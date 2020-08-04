import React from 'react';
import OLC from './OLCFacilitator.png'
import INTERN from './SummerSupervisor.png'
import './CSSfiles/HomeCSS.css'
import CASPTEAM from './imagesSkills/supervisor.png'

function Experience() {
    return (
        <div id="experience">
            <br></br>
            <br></br>
            <section className="hero is-info is-small is-bold">
                <div className="hero-body has-background-grey">
                    <div className="container has-text-left">
                        <h1 className="title is-family-code has-text-left"> Work Experience </h1>
                    </div>
                </div>
            </section>
            <br/>
            <div className="container ">
                {/* OLC  */}
                <section className="articles">
                    <div className="column is-8 is-offset-2">
                        {/* START ARTICLE */}

                        <div className="card article">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content has-text-centered">
                                        <p className="title article-title is-family-code">Program Assistant</p>
                                        <div className="tags has-addons level-item">
                                            <span className="tag is-rounded is-info">Chancellor's Associates Scholars Program</span>
                                            <span className="tag is-rounded">June 15, 2020 - August 7, 2020</span>
                                        </div>
                                    </div>
                                </div>
                                <figure >
                                    <img src={CASPTEAM} className="image is-1x1 is-centered"  alt="OLC"/>
                                </figure>
                                <br></br>
                           <div className="columns is-gapless is-centered">
                          
                                <div className="card">

                                    <header className="card-header has-background-success ">
                                        <p className="card-header-title is-centered is-family-code">
                                            DUTIES AND RESPONSABILITIES
                                        </p>
                                    </header>
                                    <div className="card-content has-text-left is-family-code">
                                        <div className="content is-8">
                                            <ul>
                                                <li>Provide general administrative support to the CASP office and its staff</li>
                                                <li>General clerical duties</li>
                                                <li>Checking in students</li>
                                                <li>Helping create and update CASP publications</li>
                                                <li>Light office clean-up and ordering</li>

                                            </ul>
                                        </div>
                                    </div>
                                    <br></br>
                                </div>
                               
            
                            </div>
                            </div>
                        </div>
                   <br></br>


                        <div className="card article ">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content has-text-centered">
                                        <p className="title article-title is-family-code">Learning Community Facilitator</p>

                                        <div className="tags has-addons level-item">
                                            <span className="tag is-rounded is-info">Chancellor's Associates Scholars Program</span>
                                            <span className="tag is-rounded">Jan 6, 2020 - Present</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-image level-left is-size-10">
                                    <br/><br/>
                                    <figure >
                                        <img src={OLC} width={200} height={50}  alt="OLC"/>
                                    </figure>

                                   <div className="column">
                                    <div className="card">
                                        <header className="card-header has-background-success ">
                                            <p className="card-header-title is-centered is-family-code">
                                                DUTIES AND RESPONSABILITIES
                                            </p>
                                        </header>
                                        <div className="card-content has-text-left is-family-code">
                                            <div className="content is-8">
                                                <ul>
                                                    <li>Prepare and organize program supplies and materials.</li>
                                                    <li>Co-lead a group of approximately 10-12 retreat participants to ensure their active learning, well-being, enjoyment and safety.</li>
                                                    <li>Serve as a positive role model and UCSD representative including language, appearance, and manner.</li>
                                                    <li>Facilitate ice breakers, team builders, discussions, and activities related to leadership and diversity.</li>
                                                    <li>Maintain and enforce program rules and UCSD policy and procedures.</li>
                                                    <li>Assist with program and learning outcome assessment.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>



                        
                        <br/>
                        {/* END ARTICLE */}
                        {/* Peer Leader */}
                        <div className="card article">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content has-text-centered">
                                        <p className="title article-title is-family-code">Peer Leader</p>
                                        <div className="tags has-addons level-item">
                                            <span className="tag is-rounded is-info">Chancellor's Associates Scholars Program</span>
                                            <span className="tag is-rounded">September 20, 2019 - Present</span>
                                        </div>
                                    </div>
                                </div>

          <div className="column is-gapless">
                                <div className="card ">
                                    <header className="card-header has-background-success ">
                                        <p className="card-header-title is-centered is-family-code">
                                            DUTIES AND RESPONSABILITIES
                                        </p>
                                    </header>
                                    <div className="card-content has-text-left is-family-code">
                                        <div className="content is-8">
                                            <ul>
                                                <li>Work with a caseload of 8-10 Chancellor’s Associates Scholars (CASP) students by providing support and counseling related to academic, personal, and sociocultural issues affecting their college transition. </li>
                                                    <li>Foster a welcoming, safe, and inclusive community among entering students and to encourage student development and identity awareness through peer mentoring meetings.</li>
                                                <li>Conduct at least one hour long one-to-one meeting with assigned students each quarter</li>
                                                <li>Document the progress of assigned students (evaluations, academic progress checks)</li>
                                                <li>Organize group activities for assigned students</li>











                                            </ul>
                                        </div>
                                    </div>
                                </div>


                            </div>





                            </div>
                        </div>
                        <br/>
                        {/* Peer Leader End */}

                        {/* Peer Leader */}



                        <br/>
                        {/* Peer Leader End */}
                        {/* Summer Supervisor */}
                        <div className="card article">
                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content has-text-centered">
                                        <p className="title article-title is-family-code">Summer Intern Supervisor</p>
                                        <div className="tags has-addons level-item">
                                            <span className="tag is-rounded is-info">Chancellor's Associates Scholars Program</span>
                                            <span className="tag is-rounded">June 8, 2019 - July 26, 2019</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <header className="card-header has-background-success ">
                                        <p className="card-header-title is-8 is-centered is-family-code">
                                            DUTIES AND RESPONSABILITIES
                                        </p>
                                    </header>
                                    <div className="card-content has-text-left is-family-code">
                                        <div className="content is-9">
                                            <ul>
                                                <li>Prepare and organize program supplies and materials.</li>
                                                <li>Co-lead a group of approximately 10-12 retreat participants to ensure their active learning, well-being, enjoyment and safety.</li>
                                                <li>Serve as a positive role model and UCSD representative including language, appearance, and manner.</li>
                                                <li>Facilitate ice breakers, team builders, discussions, and activities related to leadership and diversity.</li>
                                                <li>Maintain and enforce program rules and UCSD policy and procedures.</li>
                                                <li>Assist with program and learning outcome assessment.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                 <br/>

                                <div className="card-image is-centered">
                                    <figure >
                                        <img src={INTERN} width={300} height={150} alt="Intener" />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <br/>
                        {/* Summer Supervisor */}
                    </div>
                </section>
                {/* END ARTICLE FEED */}
            </div>
        </div>
///Users/jsonavalos/app/my-app/src/components/navigationBar
    );
}
export default Experience;