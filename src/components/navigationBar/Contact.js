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
                                <p className="is-size-4">Information</p>
                                <div className="social-media">
                                    <a href="https://facebook.com" target="_blank" className="button is-light is-large"><i className="fa fa-facebook-square" aria-hidden="true" /></a>
                                    <a href="https://instagram.com/jsonavalos" target="_blank" className="button is-light is-large"><i className="fa fa-instagram" aria-hidden="true" /></a>
                                    <a href="https://twitter.com" target="_blank" className="button is-light is-large"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                </div>
                            </div>
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