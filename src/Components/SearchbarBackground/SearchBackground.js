import React from 'react';
import {Component} from 'react';
import Ip from '../InputField/Input'
import '../../Stylesheet/main.scss';

class Search extends Component{
    render(){
        return(
            <div className="Background"  >
                <Ip/>
            </div>
        );
    }
}

export default Search;