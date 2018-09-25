/* eslint react/jsx-filename-extension: 0 */
import React from 'react';
import { Component } from 'react';
import ContentDeleteSweep from 'material-ui/SvgIcon';
import '../../Stylesheet/main.scss';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '../Modal/modal.js';
import { Link } from 'react-router-dom';
import DeviceDataUsage from 'material-ui/SvgIcon';

var k, previous, after;
class Item extends Component {
    
    state = {
        list: "",
    }
    list;
    name = window.queryString;
    dataValue;
    print = (value) => {

        console.log(value);
        this.dataValue = <Modal name={value[0]} popularity={value[1]} overview={value[2]} />
        this.setState({

        });
    }
    fetchData = () => {
        console.log(this.props.value + "prp    -----------will mount");
        previous = this.props.value;
        if (this.props.value) {
            var line = 1;
            var that = this;
            while (line < 3) {
                fetch(`https://api.themoviedb.org/3/search/movie?api_key=3693fada7703a9016579565320426cde&language=en-US&query=${this.props.value}&page=1llo&include_adult=false`)
                    .then(
                        function (response) {
                            return response.json();
                        })
                    .then(
                        function (jsonData) {
                            console.log(jsonData);
                            for (var i = 0; i < jsonData.results.length; i++) {
                                k = jsonData.results.map((data , index) => {
                                    //console.log(data.poster_path);
                                    if (data.name) {
                                        //console.log(that);

                                        return (
                                            <Card className="Card" key={index}>
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
                                                            {data.name}<br />Rating:  {data.popularity}
                                                        </Typography>
                                                        <Typography component="p">
                                                            {data.overview}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <Button size="small" color="primary">
                                                        <Link to={{
                                                            pathname: "/MovieInfo",
                                                            state: {
                                                                moviename: data.name,
                                                                popularity: data.popularity,
                                                                overview: data.overview,
                                                            }
                                                        }}>
                                                           View Details
                                                    </Link>
                                                    </Button>
                                                    <Button size="small" color="primary" onClick={() => that.print([data.name, data.popularity, data.overview])}>
                                                        <Link
                                                            to={{
                                                                pathname: "/AddtoCatagory",
                                                                state: {
                                                                    moviename: data.name,
                                                                    popularity: data.popularity,
                                                                    overview: data.overview,
                                                                }
                                                            }}
                                                        > 
                                                        AddtoCatagory
                                                        </Link>
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        );
                                    } else {
                                        return (
                                            <Card className="Card" key={index}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        width="130"
                                                        height="220"
                                                        image={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                                                        title="Contemplative Reptile"
                                                    />
                                                    <CardContent>
                                                        <Typography gutterBottom variant="headline" component="h2">
                                                            {data.title}<br />Rating:  {data.popularity}
                                                        </Typography>
                                                        <Typography component="p">
                                                            {data.overview}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                                <CardActions>
                                                    <Button size="small" color="primary" onClick={() => that.print([data.title, data.popularity, data.overview])}>
                                                        <Link to={{
                                                            pathname: "/MovieInfo",
                                                            state: {
                                                                moviename: data.title,
                                                                popularity: data.popularity,
                                                                overview: data.overview,
                                                            }
                                                        }}>
                                                            View Details
                                                    </Link>
                                                    </Button>
                                                    <Button size="small" color="primary" >
                                                        <Link
                                                            to={{
                                                                pathname: "/AddtoCatagory",
                                                                state: {
                                                                    moviename: data.title,
                                                                    popularity: data.popularity,
                                                                    overview: data.overview,
                                                                }
                                                            }}
                                                        > Add to Catagory </Link>
                                                    </Button>
                                                </CardActions>
                                            </Card>
                                        );
                                    }
                                });
                            }
                            that.setState({
                            });

                        });
                line++;
            }
        }
    }
    componentDidMount() {
        console.log('mounted drop down');
    }
    render() {
        console.log('rendering drop down');
        if (previous != this.props.value) this.fetchData();
        if (!k) {
            return <section></section>;
        }
        if (k.length === 0) {
            return <li></li>;
        }
        const values = k.map((data) => data)
        return (
            <div>
                {this.dataValue}
                {values}
            </div>
        );
    }
}
export default Item;