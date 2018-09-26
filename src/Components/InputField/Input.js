
/* eslint react/jsx-filename-extension: 0 */
/*global document:1 */
/*global window: 1 */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../Stylesheet/main.scss'
// import Modal from '@material-ui/core/Modal';
// import Grid from '../Grids/Grids.js';
// import Fetch from '../Dropdownitems/Dropdownitems.js'
// import CommunicationCallMissedOutgoing from 'material-ui/SvgIcon';
var v;
class Input extends React.Component {
    static wipeValue() {
        document.getElementById('results').style.display = 'none';
    }
    constructor(props) {
        super(props)
        this.state = {
            // value: 0,
        }
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        //this.wipeValue = this.wipeValue.bind(this);
    }
    nameChangeHandler() {
        v = document.getElementById('filed').value;
        const { reRender } = this.props;
        window.queryString = v;

        if (v) {
            window.modalDisplay = true;
            this.setState(
                {
                    // value: 1,
                }
            );
        }
        document.getElementById('results').style.display = 'block';
        reRender();
    }

    // fetchData = () => {
    //     if(window.queryString){

    //         return <Fetch value={window.queryString}/>;
    //     }
    // }

    render() {

        return (
            <div>
                <TextField id="filed" onClick={Input.wipeValue}>

                </TextField>
                <Button variant="contained" color="primary" onClick={this.nameChangeHandler} >
                    Search
              </Button>

                {/* {this.fetchData()} */}
            </div>

        );

    }
}

export default Input; 