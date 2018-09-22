import React from 'react';
import { BrowserRouter , Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import App from '../Components/app.js';
import RenderToLayer from 'material-ui/internal/RenderToLayer'; 
import Modal from '../Components/Modal/modal.js';
import AddToCatagory from '../Components/AddtoCatagory/AddToCatagory.js';
import CreateMovieCategory from '../Components/CreateMovieCategory/CreateMovieCategory.js';
import successFullRedirect from '../Components/SuccessFullRedirect/SuccessFullRedirect.js';

function routingPages  (props)  {
    window.catagoryList ={};
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={App}></Route>
                    <Route path="/MovieInfo" exact component={Modal}></Route>
                    <Route path="/AddtoCatagory" exact component={AddToCatagory}> </Route>
                    <Route path="/AddtoCatagory/NewCategory" exact component={CreateMovieCategory}> </Route>
                    <Route path="/AddtoCatagory/NewCategory/successFullOperation" exact component={successFullRedirect}> </Route>
                </Switch>
            </BrowserRouter>
        );
}



export default routingPages;