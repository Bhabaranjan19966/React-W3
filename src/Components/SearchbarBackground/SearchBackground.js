/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import { Component } from 'react';
import Ip from '../InputField/Input'
import '../../Stylesheet/main.scss';
import Grid from '../../Components/Grids/Grids.js';
import TList from '../../Components/Topmovies/Topmovies.js';
import UserDefinedCategories from '../UserDefinedCategories/UserDefinedCategories.js';
import MovieList from '../MovieList/MovieList.js'
class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            renderMovieList: false,
            movieCategoryName: " ",
        }
        this.reRender=this.reRender.bind(this);
    }


    reRender  (moviecategoryname)  {
        if (this.state.renderMovieList) {
            this.setState({
                renderMovieList: false,
            });
        } else {
            this.setState({
                renderMovieList: true,
                movieCategoryName: moviecategoryname,
            })
        }
    }
    render() {
        return (
            <div>
                <div className="Background "  >
                    <div className="Lable_user_categories"> Search for Movies</div>
                    <Ip reRender={this.reRender} />
                </div>
                <div className="GridView" id='results'>
                    <Grid value={window.queryString} />
                </div>
                <div>
                    <div className="Lable_user_categories"> User Categories </div>
                    <UserDefinedCategories triggerRender={this.reRender} />
                </div>
                <MovieList status={this.state.renderMovieList} triggerRender={this.reRender} movieCategoryName={this.state.movieCategoryName} />
                <div className="Lable_user_categories" id="differs"> Trending Movies </div>
                <div className="the_top_movies ">
                    <div className="the_top_movies marquee">
                        <TList />
                    </div>
                </div>
            </div>
        );
    }
}
export default Search;