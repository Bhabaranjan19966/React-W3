import React from 'react';
import{Component } from 'react';
import Button from '@material-ui/core/Button';
import '../Stylesheet/main.scss';

class App extends Component{
    render(){
        return (
            <Button variant="raised" color="primary">
      Hello World
    </Button>
        );
    }
}

export default App;