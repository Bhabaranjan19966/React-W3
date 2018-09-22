import React from 'react';
import { BrowserRouter , Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import App from '../Components/app.js';
import RenderToLayer from 'material-ui/internal/RenderToLayer'; 
import Modal from '../Components/Modal/modal.js';
import AddToCatagory from '../Components/AddtoCatagory/AddToCatagory.js';


function routingPages  (props)  {
    window.catagoryName =[];
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={App}></Route>
                    <Route path="/MovieInfo" exact component={Modal}></Route>
                    <Route path="/AddtoCatagory" exact component={AddToCatagory}> </Route>
                </Switch>
            </BrowserRouter>
        );
}



export default routingPages;