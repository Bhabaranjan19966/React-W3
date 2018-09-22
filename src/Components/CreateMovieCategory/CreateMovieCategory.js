import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Link} from 'react-router-dom';



export default class FormDialog extends React.Component {
  state = {
    open: true,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    document.getElementById('redirect_back').click();   
    this.setState({ open: false });
  };
  handleCreateCategory = () =>{
      var TextFieldValue =document.getElementById('name').value;
    if( TextFieldValue !=''){
        window.catagoryList.has
    } 
    
  }

  render() {
    return (
      <div>        
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add Category</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please add a new Category to Your Preference List.
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
                <Link to="/AddtoCatagory" id="redirect_back">  </Link> 
            </Button>
            <Button onClick={this.handleCreateCategory} color="primary">
              Create Category
              <Link to="/AddtoCatagory/NewCategory/successFullOperation" id="createCategory">  </Link>
            </Button>
          </DialogActions>
        </Dialog>
        
      </div>
    );
  }
}
