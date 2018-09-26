/* eslint react/jsx-filename-extension: 0 */
/*global document :1 */
import React from 'react';
import { Link } from 'react-router-dom';
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
  static changepage() {
    document.getElementById('newcat').click();
  }
  constructor(props) {
    super(props)
    this.state = {
      open: true,
    };
    //this.getCategoriyList = this.getCategoriyList.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
   // this.changepage = this.changepage.bind(this);

  }


  static getCategoriyList() {
    document.getElementById('catlist').click();
  }
  handleClickOpen() {
    this.setState({ open: true });
  };
  handleClose() {
    this.setState({ open: false });
  };

  render() {
    //const { classes } = this.props;
    const { state } = this;
    const { location } = this.props;
    const { moviename } = location.state;
    //console.log(moviename);
    return (
      <div>
        <Link id="catlist"
          to={{
            pathname: "/add-to-catagory/categories",
            state: {
              moviename: moviename,
            }
          }}
        >  </Link>
        <Dialog
          fullScreen
          open={state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar id="myappbar">
            <Toolbar>
              <IconButton color="primary" onClick={this.handleClose} aria-label="Close">
                <Link to="/"> <CloseIcon /></Link>
              </IconButton>
              <Typography variant="title" color="inherit" >
                Where Do You Want To Add ??
              </Typography>

            </Toolbar>
          </AppBar>
          <List>
            <ListItem button>
              <ListItemText primary="Add to an existing catagory" onClick={FullScreenDialog.getCategoriyList} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Create new catagory" onClick={FullScreenDialog.changepage} />
              <Link id="newcat"
                to={{
                  pathname: "/add-to-catagory/new-category",
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
