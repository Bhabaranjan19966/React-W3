/* eslint react/jsx-filename-extension: 0 */
/*no-undef: 0 */
/*global window: 1 */
import React from 'react';
import Ip from '../InputField/Input'
import '../../Stylesheet/main.scss';
import Grid from '../../Components/Grids/Grids';
import TList from '../../Components/Topmovies/Topmovies';
import UserDefinedCategories from '../UserDefinedCategories/UserDefinedCategories';
import MovieList from '../MovieList/MovieList'
class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            renderMovieList: false,
            movieCategoryName: " ",
        }
        this.reRender=this.reRender.bind(this);
    }
    reRender  (moviecategoryname)  {
        const {state}=this;
        if (state.renderMovieList) {
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
        const {state} = this;
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
                <MovieList 
                status={state.renderMovieList} 
                triggerRender={this.reRender} 
                movieCategoryName={state.movieCategoryName} />
                <div 
                className="Lable_user_categories" 
                id="differs"> 
                Trending Movies 
                </div>
                <div className="the_top_movies ">
                    <div className="the_top_movies">
                        <TList />
                    </div>
                </div>
            </div>
        );
    }
}
export default Search;