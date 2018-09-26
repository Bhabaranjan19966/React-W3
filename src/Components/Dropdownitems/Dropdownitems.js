/* eslint react/jsx-filename-extension: 0 */
/*no-undef: 0 */
/*global fetch : 1 */
import React from 'react';
import '../../Stylesheet/main.scss';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '../Modal/modal';
import { Link } from 'react-router-dom';

var k, previous, dataValue;
class Item extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            //list: "",
        }
        this.fetchData = this.fetchData.bind(this);
        this.print = this.print.bind(this);
    }

    // name = window.queryString;
    print(value) {

        dataValue = <Modal name={value[0]} popularity={value[1]} overview={value[2]} />
        this.setState({

        });
    }
    fetchData() {
        const { value } = this.props;
        previous = value;
        if (value) {
            var that = this;
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=3693fada7703a9016579565320426cde&language=en-US&query=${value}&page=1llo&include_adult=false`)
                .then(
                    function (response) {
                        return response.json();
                    })
                .then(
                    function (jsonData) {

                        for (var i = 0; i < jsonData.results.length; i += 1) {
                            k = jsonData.results.map((data, index) => {
                                let unique = index;
                                if (data.name) {
                                    return (
                                        <Card className="Card" key={unique}>
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
                                                        pathname: "/movie-info",
                                                        state: {
                                                            moviename: data.name,
                                                            popularity: data.popularity,
                                                            overview: data.overview,
                                                            source: `https://image.tmdb.org/t/p/original/${data.poster_path}`,
                                                        }
                                                    }}>
                                                        Details
                                                    </Link>
                                                </Button>
                                                <Button size="small" color="primary" onClick={() => that.print([data.name, data.popularity, data.overview])}>
                                                    <Link
                                                        to={{
                                                            pathname: "/add-to-catagory",
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
                                        <Card className="Card" key={unique}>
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
                                                <Button
                                                    size="small"
                                                    color="primary"
                                                    onClick={() => that.print([data.title, data.popularity, data.overview])}>
                                                    <Link to={{
                                                        pathname: "/movie-info",
                                                        state: {
                                                            moviename: data.title,
                                                            popularity: data.popularity,
                                                            overview: data.overview,
                                                            source: `https://image.tmdb.org/t/p/original/${data.poster_path}`,
                                                        }
                                                    }}>
                                                        Details
                                                    </Link>
                                                </Button>
                                                <Button size="small" color="primary" >
                                                    <Link
                                                        to={{
                                                            pathname: "/add-to-catagory",
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
        }
    }
    render() {
        const { value } = this.props;
        if (previous !== value) this.fetchData();
        if (!k) {
            return <section></section>;
        }
        if (k.length === 0) {
            return <li></li>;
        }
        const values = k.map((data) => data)
        return (
            <div>
                {dataValue}
                {values}
            </div>
        );
    }
}
export default Item;