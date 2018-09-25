/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import {Component} from 'react';
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
//import Icon from "@material-ui/core/Icon";
//import MovieList from '../MovieList/MovieList.js'
import '../../Stylesheet/main.scss'
var List = [];
var modal;
class UserDefinedCategory extends Component{
    state={
        id:'',
        modalDisplayValue:false,
        categoryName:"",
    }

    handlerRenderCategories = () =>{
        List=[];
        localStorage.removeItem('loglevel:webpack-dev-server');
        if(localStorage.length < 1 ) {
            return;
        }else {
            for(var i = 0 ; i < localStorage.length;i++){
               let k = i ;
                List.push(
                <Button variant="extendedFab" aria-label="Delete" id="b1" key={k} onClick={()=>this.rendrModalView(k)}>
                <AddIcon />
                {localStorage.key(k)}
              </Button>
               );
            }
        }

    }
    rendrModalView = (k) =>{
        console.log('rendering modal view');
        let moviecategory = localStorage.key(k);
        this.props.triggerRender(moviecategory);
    }
    closeModalView = () =>{
        this.setState({
            modalDisplayValue:false,
        })
    }
    render(){
        this.handlerRenderCategories();
        return(
           
            <div id="div1">
                
                {
                    List.map( categoryName => categoryName)
                }
            </div>
            
        )
    }
}

export default UserDefinedCategory;