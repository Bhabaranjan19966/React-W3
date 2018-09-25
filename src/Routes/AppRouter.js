/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import { BrowserRouter , Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import App from '../Components/app';
import Modal from '../Components/Modal/modal';
import AddToCatagory from '../Components/AddtoCatagory/AddToCatagory';
import CreateMovieCategory from '../Components/CreateMovieCategory/CreateMovieCategory';
import successFullRedirect from '../Components/SuccessFullRedirect/SuccessFullRedirect';
import MovieCategories from '../Components/MovieCategories/MovieCategories';
import ListMoviesOfExistingCategory from '../Components/ListMoviesOfExistingCategory/ListMoviesOfExistingCategory';
function routingPages  ()  {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={App}></Route>
                    <Route path="/MovieInfo" exact component={Modal}></Route>
                    <Route path="/AddtoCatagory" exact component={AddToCatagory}> </Route>
                    <Route path="/AddtoCatagory/ExistingCategory" exact component={ListMoviesOfExistingCategory}> </Route>
                    <Route path="/AddtoCatagory/NewCategory" exact component={CreateMovieCategory}> </Route>
                    <Route path="/AddtoCatagory/NewCategory/successFullOperation" exact component={successFullRedirect}> </Route>
                    <Route path="/AddtoCatagory/Categories" exact component={MovieCategories}></Route>
                </Switch>
            </BrowserRouter>
        );
}



export default routingPages;