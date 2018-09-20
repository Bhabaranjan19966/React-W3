import React from 'react';
import { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../Stylesheet/main.scss'
import Modal from '@material-ui/core/Modal';
import Grid from '../Grids/Grids.js';
import Fetch from '../Dropdownitems/Dropdownitems.js'
import CommunicationCallMissedOutgoing from 'material-ui/SvgIcon';
var v;
class Ip extends Component {

    state ={
        value:0,
    }
    follow ;
    nameChangeHandler = () => {
        v = document.getElementById('filed').value;
        window.queryString =v;
        console.log(window.queryString + 'changed value');
        if(v){
            window.modalDisplay = true;
            this.setState(
                {
                    value:1,
                }
            );
        } 
        this.props.reRender();
    }
    wipeValue = () => {
       // document.getElementById('dropdown').style.display='none';
    }

    // fetchData = () => {
    //     if(window.queryString){
    //         console.log('passed data' + window.queryString);
    //         return <Fetch value={window.queryString}/>;
    //     }
    // }

    render() {
        console.log('called render');
        return (
            <div>
                <TextField id="filed" onClick={this.wipeValue}>

                </TextField>
                <Button variant="contained" color="primary"  onClick={this.nameChangeHandler} >
                    Primary
              </Button>
              
              {/* {this.fetchData()} */}
            </div>

        );

    }
}

export default Ip; 