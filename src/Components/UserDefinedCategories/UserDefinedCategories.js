/* eslint react/jsx-filename-extension: 0 */
/*global localStorage:true*/
/* react/prop-types: 0 */
/*no-undef: 0 */
import React from 'react';
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
//import Icon from "@material-ui/core/Icon";
//import MovieList from '../MovieList/MovieList.js'
import '../../Stylesheet/main.scss'
var List = [];
class UserDefinedCategory extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
            //id:'',
            //modalDisplayValue:false,
            //categoryName:"",
        }
        this.handlerRenderCategories=this.handlerRenderCategories.bind(this);
        this.rendrModalView=this.rendrModalView.bind(this);
       // this.closeModalView=this.closeModalView.bind(this);
    }
    

    handlerRenderCategories  () {
        List=[];
        localStorage.removeItem('loglevel:webpack-dev-server');
        if(localStorage.length > 0) {
            for(var i = 0 ; i < localStorage.length;i+=1){
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
    rendrModalView  (k) {
        let moviecategory = localStorage.key(k);
        var {triggerRender} = this.props;
        triggerRender(moviecategory);
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