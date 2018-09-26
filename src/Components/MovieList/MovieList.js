/* eslint react/jsx-filename-extension: 0 */
/*global localStorage: 1 */
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

  constructor(props) {
    super(props)
    this.state = {
      //open: this.props.status,
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.renderMovielist = this.renderMovielist.bind(this);
  }
  handleClickOpen() {
    this.setState({});
  };

  handleClose() {
    const { triggerRender } = this.props;
    triggerRender();
    this.setState({});
  };

  renderMovielist() {
    movieListinCategory = [];
    //console.log('called'); 
    const { movieCategoryName } = this.props;
    movieList = localStorage.getItem(movieCategoryName);
    if (movieList != null) {
      movieList = movieList.split(',,,');
      for (var i = 0; i < movieList.length; i += 1) {
          let index = i;
        movieListinCategory.push(
          <ListItem button divider key={index}>
            <ListItemText primary={movieList[i]} />
          </ListItem>
        );
      }
    }
    //this.setState();
  }

  render() {
    //      console.log(this.props.status+"---------listmovies"+this.props.movieCategoryName);
    const { movieCategoryName } = this.props;
    const {status} = this.props;
    if (movieCategoryName !== " ") this.renderMovielist();
    let k = status;
    if (movieList == null) {
      k = false;
    }
    return (

      <div>

        <Dialog
          open={k}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{movieCategoryName}</DialogTitle>
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
