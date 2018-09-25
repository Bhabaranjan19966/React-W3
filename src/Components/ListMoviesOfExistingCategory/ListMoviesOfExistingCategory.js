/* eslint react/jsx-filename-extension: 0 */
/* global localStorage: 1 */
/* global document: 1 */
/*global window: 1 */
import React from 'react';
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


function Transition(props) {
    return <Slide direction="up" {...props} />;
}
class FullScreenDialog extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            open: true,
            deleteMode: false,
            add: true,
        };
        this.handleClickOpen=this.handleClickOpen.bind(this);
        this.handleClose=this.handleClose.bind(this);
        this.handleDeleteMode=this.handleDeleteMode.bind(this);
        this.handleDeleteMovie=this.handleDeleteMovie.bind(this);
    }

    handleClickOpen  ()  {
        this.setState({ open: true });
    };
    handleClose  ()  {
        document.getElementById('Home_page_redirect').click();
    };
    handleDeleteMode  ()  {
        if (this.state.deleteMode) {
            document.getElementById('deltebutton').innerHTML = "Turn ON Delete mode";
            this.setState({
                deleteMode: false,
                add: false,
            })
        } else {
            document.getElementById('deltebutton').innerHTML = "Turn OFF Delete mode";
            this.setState({
                deleteMode: true,
                add: false,
            })
        }
    }

    handleDeleteMovie  (moviename, id)  {
        
    
        if (this.state.deleteMode ) {
            var movieList = localStorage.getItem(localStorage.key(id));
            var newList = [];
            movieList = movieList.split(',,,');

            var index = movieList.indexOf(moviename);
            
            //movieList.splice(index, 1);
            for (let i = 0; i < movieList.length; i+=1) {
                if (i !== index) {
                    if (movieList[i].length) newList.push(movieList[i]);
                }
            }
            newList = newList.join(',,,');
            
            window.localStorage.setItem(localStorage.key(id), newList);
            
            this.setState({
                open: true,
            });
        }
    }

    render() {
        const { moviename } = this.props.location.state;
        const { Id } = this.props.location.state;
        var movieList;
        movieList = localStorage.getItem(localStorage.key(Id));
    
        if (moviename) {
            if (movieList.indexOf(moviename) < 0 && this.state.add) {
                movieList += ",,,";
                movieList += moviename;
            }
            localStorage.setItem(localStorage.key(Id), movieList);
        }
        movieList = movieList.split(",,,");
        
        const ListMovies = movieList.map((movieName, index) => {

            if (movieName !== undefined) {
                return (
                    <ul key={index}>
                        <ListItem button >
                            <ListItemText 
                            primary={movieName} 
                            key={index} 
                            onClick={() => this.handleDeleteMovie(movieName, Id)} />
                        </ListItem>
                        <Divider />
                    </ul>
                );
            }else{
                return(
                    <ul></ul>
                );

            }
        });
        return (
            <div>
                <Link to='/' id="Home_page_redirect"></Link>
                <Dialog
                    fullScreen
                    open={this.state.open}
                    onClose={this.handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar id="ListMovies">
                        <Toolbar>
                            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="title" color="inherit" id="typohy">
                                Sound
                            </Typography>
                        </Toolbar>
                        <Button color="primary" variant="contained" onClick={this.handleDeleteMode} id="deltebutton">
                            Turn on Delete mode
                         </Button>
                    </AppBar>
                    <List>
                        {ListMovies}
                    </List>
                </Dialog>
            </div>
        );
    }
}
export default (FullScreenDialog);
