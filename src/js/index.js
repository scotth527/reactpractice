//import react into the bundle
import React from 'react';
import ReactDOM from 'react-dom';

//include bootstrap npm library into the bundle
import 'bootstrap';

//include your index.scss file into the bundle
import '../styles/index.scss';

//import your own components
function NavBar () {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <span className="navbar-text ml-auto">
            <div className="collapse navbar-collapse " id="navbarText">
                <ul className="navbar-nav ">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>    
            </div>
        </span>
        
    </nav>
        );
}



//render your react application
ReactDOM.render(
    <NavBar />,
    document.querySelector('#app')
);