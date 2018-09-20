import React from 'react';
import {Component} from 'react';
import Ip from '../InputField/Input'
import '../../Stylesheet/main.scss';
import Grid from '../../Components/Grids/Grids.js';
import TList from '../../Components/Topmovies/Topmovies.js';


class Search extends Component{


    reRender = () => {
        this.setState({

        });
    }
    render(){
        return(
            <div>
                 <div className="Background"  >
                <Ip reRender={this.reRender}/>
            </div>
            <div className="GridView" id='results'>
                <Grid value={window.queryString}/>
            </div>
                <div className="the_top_movies">
                        <TList/>
                </div>
           
            </div>      
        );
    }
}

export default Search;