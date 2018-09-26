/* eslint react/jsx-filename-extension: 0 */
/*no-undef: 0 */
/*global window: 1 */
/*global document: 1 */
/*global localStorage: 1 */
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';



export default class CreateMovieCategory extends React.Component {
  
  static handleCreateCategory  (moviename)  {
    var getText = document.getElementById('name').value;
    //console.log(!getText);
    //console.log(getText.lenght+" my text filed value");     
    if (!getText || (window.localStorage.getItem(getText))) {
      
      return 0;
    } else {
     // console.log(moviename+"---------added"+getText);
      localStorage.setItem(getText, moviename);
      document.getElementById('createCategory').click();
      return 0;
    }
  }
  constructor(props){
    super(props)
    this.state = {
      open: true,
    };
    
    this.handleClickOpen=this.handleClickOpen.bind(this);
    this.handleClose=this.handleClose.bind(this);
  }
  
  

  handleClickOpen  ()  {
    this.setState({ open: true });
  };

  handleClose  ()  {
    document.getElementwsById('redirect_back').click();
    this.setState({ open: false });
  };

  render() {
    const {location} = this.props;
    const { moviename } = location.state;
    const {state} = this;
    //console.log(moviename);
    return (
      <div>
        <Dialog
          open={state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Category</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please Add/Rename a new Category to Your Preference List.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Category Name"
              type="Add New Category "
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
                <Link to="/" id="redirect_back">  </Link>
            </Button>
            <Button onClick={() => CreateMovieCategory.handleCreateCategory(moviename)} color="primary">
              Create Category
              <Link to="/add-to-catagory/new-category/success-full-operation" id="createCategory">  </Link>
            </Button>
          </DialogActions>
        </Dialog>

      </div>
    );
  }
}
