/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import { BrowserRouter , Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import App from '../Components/app';
import Modal from '../Components/Modal/modal';
import ListView from '../Components/ListView/ListView';
import CreateMovieCategory from '../Components/CreateMovieCategory/CreateMovieCategory';
import successFullRedirect from '../Components/SuccessFullRedirect/SuccessFullRedirect';
import MovieCategories from '../Components/MovieCategories/MovieCategories';
import ListMoviesOfExistingCategory from '../Components/ListMoviesOfExistingCategory/ListMoviesOfExistingCategory';
function routingPages  ()  {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={App}></Route>
                    <Route path="/movie-info" exact component={Modal}></Route>
                    <Route path="/add-to-catagory" exact component={ListView}> </Route>
                    <Route path="/add-to-catagory/existing-category" exact component={ListMoviesOfExistingCategory}> </Route>
                    <Route path="/add-to-catagory/new-category" exact component={CreateMovieCategory}> </Route>
                    <Route path="/add-to-catagory/new-category/success-full-operation" exact component={successFullRedirect}> </Route>
                    <Route path="/add-to-catagory/categories" exact component={MovieCategories}></Route>
                </Switch>
            </BrowserRouter>
        );
}



export default routingPages;