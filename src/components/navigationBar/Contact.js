import React from 'react';
import './CSSfiles/HomeCSS.css'

function Contact() {
    return (
        <div id="contactimage">





            <section className="hero is-fullheight ">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns is-8 is-variable ">
                            <div className="column is-two-thirds has-text-centered">
                                <h1 className="title is-size-1" id="ucsdTitle">Professional Profiles</h1>
                                <div className="social-media">
                                    <a href="mailto:jsonavalos@gmail.com"  target="_blank" className="button is-light is-large"><i className="fa fa-envelope" aria-hidden="true" /></a>
                                    <a href="https://linkedin.com/in/jsonavalos" target="_blank" className="button is-light is-large"><i className="fab fa-linkedin" aria-hidden="true" /></a>
                                    <a href="https://github.com/jsonavalos" target="_blank" className="button is-light is-large"><i className="fab fa-github" aria-hidden="true" /></a>
                                </div>
                            </div>

                            <div className="is-divider-vertical is-black" data-content="OR"/>

                            <div className="column is-one-third has-text-left">
                                <div className="subtitle is-white">You can also fill out this form to contact me</div>
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