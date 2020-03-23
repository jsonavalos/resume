import React from 'react';
import OLC from './OLCFacilitator.png'
import INTERN from './SummerSupervisor.png'


function Experience() {
    return (
        <div className="has-background-grey-lighter">

            <section className="hero is-info is-small is-bold">
                <div className="hero-body has-background-grey">
                    <div className="container has-text-left">
                        <h1 className="title"> Work Experience </h1>
                    </div>
                </div>
            </section>
            <br/>
            <div className="container has-background-grey-lighter">

                {/* OLC  */}
                <section className="articles">
                    <div className="column is-8 is-offset-2">
                        {/* START ARTICLE */}
                        <div className="card article">

                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content has-text-centered">
                                        <p className="title article-title">OLC Facilitator</p>
                                        <div className="tags has-addons level-item">
                                            <span className="tag is-rounded is-info">Chancellor's Associates Scholars Program</span>
                                            <span className="tag is-rounded">Jan 6, 2020 - Present</span>
                                        </div>
                                    </div>
                                </div>



                                <div className="card-image level-left">
                                    <figure >
                                        <img src={OLC} width={200} height={50}  />
                                    </figure>
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
                                        <p className="title article-title">Peer Leader</p>
                                        <div className="tags has-addons level-item">
                                            <span className="tag is-rounded is-info">Chancellor's Associates Scholars Program</span>
                                            <span className="tag is-rounded">September 20, 2019 - Present</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="content article-body">
                                    <p>Non arcu risus quis varius quam quisque. Dictum varius duis at consectetur lorem. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. </p>
                                    <h3 className="has-text-centered">How to properly center tags in bulma?</h3>
                                    <p> Proper centering of tags in bulma is done with class: </p><pre>level-item</pre>

                                </div>



                            </div>
                        </div>
                        <br/>
                        {/* Peer Leader End */}

                        {/* Peer Leader */}
                        <div className="card article">

                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content has-text-centered">
                                        <p className="title article-title">Office Coordinator</p>
                                        <div className="tags has-addons level-item">
                                            <span className="tag is-rounded is-info">Chancellor's Associates Scholars Program</span>
                                            <span className="tag is-rounded">January 20, 2020 - March 11, 2020</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="content article-body">
                                    <p>Non arcu risus quis varius quam quisque. Dictum varius duis at consectetur lorem. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. </p>
                                    <h3 className="has-text-centered">How to properly center tags in bulma?</h3>
                                    <p> Proper centering of tags in bulma is done with class: </p><pre>level-item</pre>

                                </div>

                            </div>
                        </div>
                        <br/>
                        {/* Peer Leader End */}

                        {/* Summer Supervisor */}
                        <div className="card article">

                            <div className="card-content">
                                <div className="media">
                                    <div className="media-content has-text-centered">
                                        <p className="title article-title">Summer Intern Supervisor</p>
                                        <div className="tags has-addons level-item">
                                            <span className="tag is-rounded is-info">Chancellor's Associates Scholars Program</span>
                                            <span className="tag is-rounded">June 8, 2019 - July 26, 2019</span>
                                        </div>
                                    </div>
                                </div>


                                <div className="card-image level-right">
                                    <figure >
                                        <img src={INTERN} width={300} height={150}  />
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