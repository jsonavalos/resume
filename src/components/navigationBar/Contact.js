import React from 'react';


function Contact() {
    return (
        <div>





            <section className="hero is-fullheight has-background-grey-lighter">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns is-8 is-variable ">
                            <div className="column is-two-thirds has-text-left">
                                <h1 className="title is-1">Contact Information</h1>
                                <div className="social-media">
                                    <a href="mailto:jsonavalos@gmail.com"  className="button is-light is-large"><i className="fa fa-envelope" aria-hidden="true" /></a>
                                    <a href="https://instagram.com/jsonavalos"  className="button is-light is-large"><i className="fab fa-linkedin" aria-hidden="true" /></a>
                                    <a href="https://github.com/jsonavalos"  className="button is-light is-large"><i className="fab fa-github" aria-hidden="true" /></a>
                                </div>
                            </div>

                            <div className="is-divider-vertical is-black" data-content="OR"/>

                            <div className="column is-one-third has-text-left">
                                <div className="field">
                                    <label className="label">Name</label>
                                    <div className="control">
                                        <input className="input is-medium" type="text" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        <input className="input is-medium" type="text" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Message</label>
                                    <div className="control">
                                        <textarea className="textarea is-medium" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="control">
                                    <button type="submit" className="button is-link is-fullwidth has-text-weight-medium is-medium">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>












        </div>
///Users/jsonavalos/app/my-app/src/components/navigationBar
    );
}
export default Contact;