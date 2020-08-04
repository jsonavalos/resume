import React from 'react';
import './CSSfiles/HomeCSS.css'

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = { active: 0, class: "navbar-burger burger"  };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.nameRef = React.createRef();
        this.emailRef = React.createRef();
        this.messageRef = React.createRef();
      }


      handleSubmit(event){
        alert('name: ' + this.nameRef.current.value + '\nemail: '+this.emailRef.current.value + '\nmessage: '+this.messageRef.current.value);
      }

    render(){
    return (

        <div id="contactimage">
            <section className="hero is-fullheight ">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="columns is-8 is-variable ">
                            <div className="column is-two-thirds has-text-centered">
                                <h1 className="title is-size-1 is-family-code" id="ucsdTitle">Professional Profiles</h1>
                                <div className="social-media">
                                    <a href="mailto:jsonavalos@gmail.com" rel="noopener noreferrer" target="_blank" className="button is-light is-large"> <i className="fa fa-envelope" aria-hidden="true" /></a>
                                    <a href="https://linkedin.com/in/jsonavalos" rel="noopener noreferrer" target="_blank" className="button is-light is-large"> <i className="fab fa-linkedin" aria-hidden="true" /></a>
                                    <a href="https://github.com/jsonavalos" rel="noopener noreferrer" target="_blank" className="button is-light is-large"> <i className="fab fa-github" aria-hidden="true" /></a>
                                </div>
                            </div>

                            <div className="is-divider-vertical is-black" data-content="OR"/>

                            <div className="column is-one-third has-text-left">
                                <div className="subtitle has-text-white is-family-code">You can also fill out this form to get in contact with me.</div>
                                <div className="field">
                                    <label className="label has-text-white">Name</label>
                                    <div className="control">
                                        <input className="input is-medium " type="text" ref={this.nameRef} />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label has-text-white">Email</label>
                                    <div className="control">
                                        <input className="input is-medium" type="text" ref={this.emailRef}/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label has-text-white">Message</label>
                                    <div className="control">
                                        <textarea className="textarea is-medium" defaultValue={""} ref={this.messageRef} />
                                    </div>
                                </div>
                                <div className="control">
                                    <button type="submit" className="button is-link is-fullwidth has-text-weight-medium is-medium" onClick={this.handleSubmit}>Send Message</button>
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
}

export default Contact;