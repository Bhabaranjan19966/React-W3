import React from 'react';
import { Component } from 'react';
import ContentDeleteSweep from 'material-ui/SvgIcon';

var k = [];
class Item extends Component {
    state = {
        list: "",
    }
    list;
    name = window.queryString;
    dataValue;
    
    dataFetch = (props) => {
        if (this.props.value) {
            fetch(`https://api.themoviedb.org/3/search/multi?api_key=3693fada7703a9016579565320426cde&language=en-US&query=${this.props.value}&page=1&include_adult=false`)
                .
                then(
                    function (response) {
                        return response.json();
                    })
                .then(
                    function (jsonData) {
                        console.log(jsonData);         
                    });
        
        }
         for( let i = 0 ; i< k.length; i++){
                console.log(i);
                if(k.name){
                    return <div> abc </div>
                }else{
                    return <div> sdfsd </div>
                }

         }
    }
    render(){
        return(
            <div>
                {this.dataFetch()}
            </div>
        );
    }

}


export default Item;