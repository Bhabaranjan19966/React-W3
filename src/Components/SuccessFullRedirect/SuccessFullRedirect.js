/* eslint react/jsx-filename-extension: 0 */
/*global document: 1 */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import {Link} from 'react-router-dom';
import InProgress from '../InProgress/InProgress';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}


class AlertDialogSlide extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: true,
    };
    this.handleClose=this.handleClose.bind(this);
  }

  handleClose  ()  {
      
    setTimeout(()=>{
        document.getElementById('Rdirect_Home').click();
    },2500)
  };

  render() {
    return (
      <div>
          <Link to="/" id="Rdirect_Home">  </Link>
        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {"Category Created Successfully!!  "}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
            
                Movie Added Successfully!!
             
            </DialogContentText>
          </DialogContent>
          <InProgress left={30}/>
          <DialogActions>
            <Button onClick={this.handleClose()} color="primary">             
            </Button>
            
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialogSlide;
