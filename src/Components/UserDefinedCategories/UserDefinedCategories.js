import React from 'react';
import {Component} from 'react';
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Icon from "@material-ui/core/Icon";
import '../../Stylesheet/main.scss'
var List = [];
class UserDefinedCategory extends Component{
    state={
        id:'',
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
                <Button variant="extendedFab" aria-label="Delete" id="b1" key={k} onClick={()=>this.handleGoTOListOfCategory(k)}>
                <AddIcon />
                {localStorage.key(k)}
              </Button>
               );
            }
        }

    }
    handleGoTOListOfCategory = (Id) =>{

        this.setState({
            id:Id,
        },
        ()=>{
            
        }
        )
                
    }

    render(){
        this.handlerRenderCategories();
        return(
           
            <div id="div1">
                {
                    List.map( categoryName => categoryName)
                }
                 <Link  id="Navigate"
            to={{
                pathname:"",
                state:{
                    Id:this.state.id,
                }

            }}> </Link>
            </div>
        )
    }
}

export default UserDefinedCategory;