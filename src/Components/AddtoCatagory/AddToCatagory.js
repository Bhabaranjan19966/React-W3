import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
//import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
import '../../Stylesheet/main.scss'

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: true,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  changepage = () => {
    document.getElementById('newcat').click();
  }

  getCategoriyList = () => {
    document.getElementById('catlist').click();
  }
  render() {
    //const { classes } = this.props;
    const { moviename } = this.props.location.state;
    console.log(moviename);
    return (
      <div>
        <Link id="catlist"
          to={{
            pathname: "/AddtoCatagory/Categories",
            state: {
              moviename: moviename,
            }
          }}
        >  </Link>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar id="myappbar">
            <Toolbar>
              <IconButton color="white" onClick={this.handleClose} aria-label="Close">
                <Link to="/"> <CloseIcon /></Link>
              </IconButton>
              <Typography variant="title" color="inherit" >
                Sound
              </Typography>
              
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="Add to an existing catagory" onClick={this.getCategoriyList} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Create new catagory" onClick={this.changepage} />
              <Link id="newcat"
                to={{
                  pathname: "/AddtoCatagory/NewCategory",
                  state: {
                    moviename: moviename,
                  }
                }}
              >  </Link>
            </ListItem>


          </List>
        </Dialog>
      </div>
    );
  }
}

export default (FullScreenDialog);
