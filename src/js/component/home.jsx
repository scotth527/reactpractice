import React from 'react';

//include images into your bundle
import rigoImage from '../../img/rigo-baby.jpg';

//create your first component
function NavBar () {
    return (<nav className="navbar navbar-expand-lg navbar-dark col-12 bg-dark">
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

function Footer () {
    return ( 
        <footer className="fixed-bottom">
            <div className="row text-center" id="footer">
                <div className=" col-12 bg-dark text-white p-5 ">Copyright &copy; Your Website 2018</div>
            </div>
        </footer>
        );
}    

export class Home extends React.Component{
    

    
    
    
    
    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <NavBar /> 
                </div>
                <div className="text-center mt-5">
                    <h1>Hello Rigo!</h1>
                    <p><img src={rigoImage} /></p>
                    <a href="#" className="btn btn-success">If you see this green button... bootstrap is working</a>
                    <p>Made by <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with love!</p>
                </div>
                <Footer />
            </div>
            
        );
    }
}
