import React from 'react';
import { BrowserRouter , Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import App from '../Components/app.js';
import Modal from '../Components/Modal/modal.js';
import AddToCatagory from '../Components/AddtoCatagory/AddToCatagory.js';
import CreateMovieCategory from '../Components/CreateMovieCategory/CreateMovieCategory.js';
import successFullRedirect from '../Components/SuccessFullRedirect/SuccessFullRedirect.js';
import MovieCategories from '../Components/MovieCategories/MovieCategories.js';
import AddToExistingCategory from '../Components/AddToExistingCategory/AddToExistingCategory.js'
function routingPages  (props)  {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={App}></Route>
                    <Route path="/MovieInfo" exact component={Modal}></Route>
                    <Route path="/AddtoCatagory" exact component={AddToCatagory}> </Route>
                    <Route path="/AddtoCatagory/ExistingCategory" exact component={AddToExistingCategory}> </Route>
                    <Route path="/AddtoCatagory/NewCategory" exact component={CreateMovieCategory}> </Route>
                    <Route path="/AddtoCatagory/NewCategory/successFullOperation" exact component={successFullRedirect}> </Route>
                    <Route path="/AddtoCatagory/Categories" exact component={MovieCategories}></Route>
                </Switch>
            </BrowserRouter>
        );
}



export default routingPages;