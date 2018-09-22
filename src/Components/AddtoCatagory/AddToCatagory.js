import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">                 
                 <Link to="/"> <CloseIcon /></Link>
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Sound
              </Typography>
            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="Add to an existing catagory"  />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Create new catagory" onClick={this.changepage}  />
              <Link to="/AddtoCatagory/NewCategory" id="newcat" >  </Link>
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

const styles = {
  appBar: {
    position: 'relative',
    color: 'pink' ,
    background:'orange',
  },
  flex: {
    flex: 1,
  },
};

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);
