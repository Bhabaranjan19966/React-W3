/* eslint react/jsx-filename-extension: 0 */
/*global document :1 */
/*global localStorage :1 */
import React from 'react';
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
import { Link } from 'react-router-dom';
import '../../Stylesheet/main.scss';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      open: true,
      deleteMode: false,
      renaemMode: false,
      newName:'',
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleRenameCategory = this.handleRenameCategory.bind(this);
    this.handleDeleteCategory = this.handleDeleteCategory.bind(this);
    this.handlerAddMovieToCategory = this.handlerAddMovieToCategory.bind(this);
  } 

  handleClickOpen  ()  {
    this.setState({ open: true });
  };

  handleClose  ()  {
    this.setState({ open: false });
    document.getElementById('back_home').click();
  };

  handleRenameCategory  ()  {
    //console.log("renaem"+"----------"+this.state.renaemMode);
    const {state} = this;
    if (state.renaemMode) {
      //console.log('start renameing');
      document.getElementById("rename").innerHTML = 'Start Renaming';
      if (state.deleteMode) document.getElementById("deletion").innerHTML = 'Start Deleting';
      this.setState({
        deleteMode: false,
        renaemMode: false,
      })
    } else {
      document.getElementById("rename").innerHTML = 'Stop Renaming';
      if (state.deleteMode) document.getElementById("deletion").innerHTML = 'Start Deleting';
      this.setState({
        deleteMode: false,
        renaemMode: true,
      })
    }
  }

  handleDeleteCategory  ()  {
    const {state} = this;
    if (state.deleteMode) {
      document.getElementById("deletion").innerHTML = 'Start Deleting';
      if (state.renaemMode) document.getElementById("rename").innerHTML = 'Start Renaming';
      this.setState({
        deleteMode: false,
        renaemMode: false,
      })
    } else {
      document.getElementById("deletion").innerHTML = 'Stop Deletion';
      if (state.renaemMode) document.getElementById("rename").innerHTML = 'Start Renaming';
      this.setState({
        deleteMode: true,
        renaemMode: false,
      })
    }

  }
  handlerAddMovieToCategory  (moviename, LinkId)  {
    //console.log(moviename + "--------------" + LinkId);
    const {state} = this;
    if (!state.deleteMode && !state.renaemMode) document.getElementById(LinkId).click();
    else if(state.deleteMode){
    //  console.log(localStorage.key(LinkId));
      localStorage.removeItem(localStorage.key(LinkId));
      this.setState({
        open: true,
      })
    }else{
      let v = localStorage.getItem(localStorage.key(LinkId));
      localStorage.removeItem(localStorage.key(LinkId));
      this.setState({
        newName:v,
      },()=>{
      //  console.log(this.state.newName + "------"+v);
        document.getElementById('renamecat').click();
      })
      
     
    }

  }

  render() {
    var list = [];
   // console.log(keyvalue);
   const{state} = this;
    const { location } = this.props;
    const {moviename} = location.state;
    localStorage.removeItem("loglevel:webpack-dev-server");
    for (var i = 0; i < localStorage.length; i+=1) {
      let k = i;
      list.push(
        <ul key={k}><ListItem button>
          <ListItemText 
          primary={localStorage.key(i)} 
          onClick={() => this.handlerAddMovieToCategory(moviename, k)} />
        </ListItem>
          <Divider />
          <Link id={k}
            to={{
              pathname: "/add-to-catagory/existing-category",
              state: {
                moviename: moviename,
                Id: k,
              }
            }}
          ></Link>
        </ul>
      );
    }
    //console.log(this.state.newName);
    return (
      <div>
        <Link id="renamecat"
                to={{
                  pathname: "/add-to-catagory/new-category",
                  state: {
                    moviename: state.newName,
                  }
                }}
              >  </Link>

              <Link id="back_home" to="/"> </Link>
        <Dialog
          fullScreen
          open={state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar id="List_app_bar">
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" id="typo">
                Categories
              </Typography>
            </Toolbar>

          </AppBar>
          <List id="listView">
            {list}
          </List>
          <div>
            <Button color="primary" variant="contained" onClick={this.handleRenameCategory} id="rename">
              Start Renaming 
              </Button>

          </div>
          <div>

            <Button variant="contained" color="primary" onClick={this.handleDeleteCategory} id="deletion">
             Start Deleting 
              </Button>
          </div>
        </Dialog>
      </div>
    );
  }
}



export default (FullScreenDialog);
