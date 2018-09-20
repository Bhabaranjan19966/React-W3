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

var k, previous, after;
class Item extends Component {
    state = {
        list: "",
    }
    list;
    name = window.queryString;
    dataValue;
    fetchData = () => {
        console.log(this.props.value + "prp    -----------will mount");
        previous = this.props.value;
        if (this.props.value) {
            var line = 1;
            var that = this;
            while (line < 3) {
                fetch(`https://api.themoviedb.org/3/search/multi?api_key=3693fada7703a9016579565320426cde&language=en-US&query=${this.props.value}&page=${line}&include_adult=false`)
                    .then(
                        function (response) {
                            return response.json();
                        })
                    .then(
                        function (jsonData) {
                            console.log(jsonData);
                            for (var i = 0; i < jsonData.results.length; i++) {
                                k = jsonData.results.map((data) => {
                                    console.log(data.poster_path);
                                    if (data.name) {
                                        return (

                                            <Card  className="Card">
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
                                                            {data.name}<br/>Rating:{data.popularity}
                                                        </Typography>
                                                        <Typography component="p">
                                                            {data.overview}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>





                                        );


                                    } else {

                                        return (

                                            <Card className="Card">
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
                                                            {data.title}<br/>Rating:{data.popularity}
                                                        </Typography>
                                                        <Typography component="p">
                                                            {data.overview}
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>




                                        );



                                    }
                                });
                            }
                            that.setState({
                            });
                            console.log(k[0])
                        });
                line++;
            }
        }
    }
    render() {
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
                {values}
            </div>
        );
    }
}
export default Item;