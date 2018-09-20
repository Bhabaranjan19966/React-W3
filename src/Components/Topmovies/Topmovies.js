import React from 'react';
import {Component} from 'react';



var thetopList;
class Topmovies extends Component{
    





    fetchData = () =>{
      
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3693fada7703a9016579565320426cde&language=en-US&page=1`)
        .then(
            function(response){
                return response.json();
            }
        )
        .then(
            function(jsonData){
                
            }
        );
    }



    render(){
      
    }
}