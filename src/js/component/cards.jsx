import React from "react";
import PropTypes from 'prop-types';

function Cards(props) {
    
return (
    <div className="col-lg-3 col-md-6 mb-4">
        <div className="card">
            <img className="card-img-top" src="http://placehold.it/500x325" alt=""></img>
            <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">{props.cardOne}</p>
            </div>
            <div className="card-footer">
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    </div>
    
    
     );
}

Cards.propTypes = {
    cardOne: PropTypes.string
};


export default Cards;