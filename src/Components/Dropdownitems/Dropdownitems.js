import React from 'react';
import { Component } from 'react';
import ContentDeleteSweep from 'material-ui/SvgIcon';

var k;
class Item extends Component {
    state = {
        list: "",
    }
    list;
    name = window.queryString;
    dataValue;

    fetchData = () => {
        console.log(this.props.value+"prp    -----------will mount");
        
        if (this.props.value) {
           var  line =1;
            while( line < 3 ){
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

                                if(data.name){
                                    return <li>{data.name}</li>;
                                }else{
                                    return <li>{data.title}</li>;
                                }

                            });
                        }
                        console.log(k[0])
                    });
            line++;

        }
    }
    
        
    }


    render() {
        console.log('fetch redner called');
        this.fetchData();
        //this.dataFetch();
        console.log(k + "the k");

        console.log('fetched');
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