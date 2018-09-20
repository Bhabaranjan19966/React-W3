import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Cards from '../Cards/Cards.js';
import '../../Stylesheet/main.scss';
import Fetch from '../Dropdownitems/Dropdownitems.js'
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container:{
    width:100,
  }
});


  // fetchData = () => {
  //   if(window.queryString){
  //       console.log('passed data' + window.queryString);
  //       return <Fetch value={window.queryString}/>;
  //   }
  // }

function CenteredGrid(props) {

  // state = {
  //   values:[],
  // }
 
  
    if(window.queryString){
     // document.getElementById('dropdown').style.display = 'block';
    }

    console.log('grid called');
  const { classes } = props;

  return (
    
    <div className={classes.root}>
      <Grid container spacing={16}>
        
           
            
      </Grid>
      <div>
      <div >
            <Fetch value={props.value}/>
            </div>
        </div>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
