import React from 'react'


function Error() {


return(

    <div className="hero-body">
        <div className="container has-text-centered">
            <div className="columns is-vcentered">
                <div className="column is-5">
                    <figure className="image is-4by3">
                        <img src="https://picsum.photos/800/600/?random" alt="Description"/>
                    </figure>
                </div>
                <div className="column is-6 is-offset-1">
                    <h1 className="title is-2">
                        Error Page
                    </h1>
                    <h2 className="subtitle is-4">
                        Sorry this page is not available at the moment
                    </h2>
                    <br/>
                    <p className="has-text-centered">
                        <a className="button is-medium is-info is-outlined" href="/">
                            Home
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>





    );

}

    export default Error;