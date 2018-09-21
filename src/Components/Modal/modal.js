import React from 'react';
import {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import '../../Stylesheet/main.scss'



    function modal  (props)  {
        console.log("rendering modal"+ props.name);
        return(
            <div className="info_modal" id="the popup modal">
                <h2> {props.name}</h2>
                <hr/>
                <h3>{props.popularity}  </h3>
                <hr/>
                <p> {props.overview} </p>
                
            </div> 
            
        );
    
}

export default modal;