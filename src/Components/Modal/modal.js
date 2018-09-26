/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
// import { Component } from 'react';
// // import Typography from '@material-ui/core/Typography';
// import Modal from '@material-ui/core/Modal';
import '../../Stylesheet/main.scss';
import { Link } from 'react-router-dom';
function modal(props) {
    // moviename;
    // popularity;
    // overview;

    // componentDidMount() {
    //     console.log(this.props);

    // }
    const { location } = props;
    if (location) {
        const { moviename, popularity, overview, source } = location.state;
        return (
            <div className="full_screen">
            <div className="modal_container">
                <div> <img src={source} alt="movie_poster"/> </div>
            <div className="info_modal" id="the popup modal">
                <h2> {moviename}</h2>
                <hr />
                <h3>{popularity}  </h3>
                <hr />
                <p> {overview} </p>
                <Link to="/">click here</Link>
            </div>
            </div>
            </div>
    
        );
    }
    
    return null;

}

export default modal;