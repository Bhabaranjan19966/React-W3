/* eslint react/jsx-filename-extension: 0 */
/*no-undef: 0 */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
//import Grids from './Grids/Grids.js';
//import Cards from './Cards/Cards.js';
import '../Stylesheet/main.scss';
import Search from './SearchbarBackground/SearchBackground'
const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};

function DenseAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" id="Home_Page_appbar">
        <Toolbar variant="dense">
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            Browse Movies
          </Typography>
        </Toolbar>
      </AppBar>
      {/* <Grids/> */}
      <Search>          
      </Search>
    </div>
  );
}



export default withStyles(styles)(DenseAppBar);
