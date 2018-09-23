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
    state = {
        open: true,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        document.getElementById('Home_page_redirect').click();
    };

    render() {
        const { moviename } = this.props.location.state;
        const { Id } = this.props.location.state;
        var movieList;
        movieList = localStorage.getItem(localStorage.key(Id));
        if (movieList.indexOf(moviename) < 0) {
            movieList += ",,,";
            movieList += moviename;
        }
        localStorage.setItem(localStorage.key(Id), movieList);
        movieList = movieList.split(",,,");

        const ListMovies = movieList.map((movieName, index) => {
            return (
                <ul>
                    <ListItem button>
                        <ListItemText primary={movieName} key={index} />
                    </ListItem>
                    <Divider />
                </ul>
            );
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
