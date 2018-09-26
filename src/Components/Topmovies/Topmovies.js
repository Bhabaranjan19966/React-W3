/* eslint react/jsx-filename-extension: 0 */
/* react/prop-types: 0 */
/*no-undef: 0 */
/*global fetch: 1 */
import React from 'react';
import '../../Stylesheet/main.scss';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


var thetopList;
class Topmovies extends React.Component {

    constructor(props){
        super(props)
        this.fetchData = this.fetchData.bind(this);
    }


    fetchData  ()  {
        var self = this;
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3693fada7703a9016579565320426cde&language=en-US&page=1`)
            .then(
                function (response) {
                    return response.json();
                }
            )
            .then(
                function (jsonData) {
                    thetopList = jsonData.results.map(
                        (data, index) => {
                                let ind = index;
                            return (
                                <Card className="Card" key={ind}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            width="130"
                                            image={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                                            height="220"
                                            title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="headline" component="h2">
                                                {data.title}<br />
                                                 {`Rating :`}{data.popularity}
                                            </Typography>
                                            <Typography component="p" >
                                                {data.overview}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                        <Link to={{
                                                            pathname: "/movie-info",
                                                            state: {
                                                                moviename: data.title,
                                                                popularity: data.popularity,
                                                                overview: data.overview,
                                                                source:`https://image.tmdb.org/t/p/original/${data.poster_path}`,
                                                            }
                                                        }}>
                                                        Details
                                                    </Link>
                                        </Button>
                                        <Button size="small" color="primary">
                                            <Link
                                                to={{
                                                    pathname: "/add-to-catagory",
                                                    state: {
                                                        moviename: data.title,
                                                        popularity: data.popularity,
                                                        overview: data.overview,
                                                    }
                                                }}
                                            >
                                                Add to Category</Link>
                                        </Button>
                                    </CardActions>
                                </Card>
                            );
                        }
                    );
                    //console.log(self);
                    self.setState({

                    });
                }
            );

    }



    render() {

        if (!thetopList) this.fetchData();

        if (thetopList) {
            const topArray = thetopList.map(data => data);

            return (
                topArray.map(data => data)
            );
        } else {
            return <h1>  Fetching data .... </h1>;

        }
    }
}

export default Topmovies;