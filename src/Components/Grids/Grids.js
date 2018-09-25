/*global window:1 */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
//import Cards from '../Cards/Cards.js';
import '../../Stylesheet/main.scss';
import Fetch from '../Dropdownitems/Dropdownitems';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    width: 100,
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


  if (window.queryString) {
    // document.getElementById('dropdown').style.display = 'block';
  }



  //const { classes } = props;

  return (
    <div>
      <div className="flex-container">
        <Fetch value={props.value} />
      </div>
    </div>

  );
}


export default withStyles(styles)(CenteredGrid);
