import React from 'react';
//import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import {Link} from 'react-router-dom';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: true
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handlerAddMovieToCategory = (moviename,LinkId) =>{
    console.log(moviename +"--------------"+LinkId);
    document.getElementById(LinkId).click();
    
  }

  render() {
    var list = [];
    const { moviename } = this.props.location.state;
    localStorage.removeItem("loglevel:webpack-dev-server");
    for (var i = 0; i < localStorage.length; i++) {
      let k = i;
      list.push(
        <ul><ListItem button>
          <ListItemText primary={localStorage.key(i)}  onClick={()=> this.handlerAddMovieToCategory(moviename,k)}/>
        </ListItem>
          <Divider />
          <Link  id={k}
           to={{
            pathname: "/AddtoCatagory/ExistingCategory",
            state: {
              moviename: moviename,
              Id:k,
            }
          }}
          ></Link>
        </ul>
      );
    }
    return (
      <div>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar id="List_app_bar">
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" id="typo">
                Sound
              </Typography>
            </Toolbar>
          </AppBar>
          <List id="listView">
            {list}
          </List>
        </Dialog>
      </div>
    );
  }
}



export default (FullScreenDialog);
