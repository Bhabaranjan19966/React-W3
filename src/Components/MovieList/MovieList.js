/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
//import Divider from '@material-ui/core/Divider';

var movieListinCategory = [];
var movieList;
class AlertDialog extends React.Component {
  state = {
    open: this.props.status,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.props.triggerRender();
    this.setState({ open: false });
  };
   
  renderMovielist = () =>{
    movieListinCategory = [];
    console.log('called'); 
     movieList=localStorage.getItem(this.props.movieCategoryName);
      if(movieList!= null){
          movieList = movieList.split(',,,');
      for(var i = 0 ; i<movieList.length ; i++ ){
          movieListinCategory.push(
            <ListItem button divider>
            <ListItemText primary={movieList[i]} />
          </ListItem>
          );
      }
    }
      //this.setState();
  }

  render() {
      console.log(this.props.status+"---------listmovies"+this.props.movieCategoryName);
       if(this.props.movieCategoryName != " ") this.renderMovielist();
       let k = this.props.status; 
       if(movieList==null){
            k=false;
        }
      return (
        
      <div>
        
        <Dialog
          open={k}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{this.props.movieCategoryName}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            
            </DialogContentText>
            <List>
                {movieListinCategory.map(moviename => moviename)}
            </List>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
