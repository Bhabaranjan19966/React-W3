import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import App from '../Components/app.js';
import RenderToLayer from 'material-ui/internal/RenderToLayer'; 
import Modal from '../Components/Modal/modal.js';

function routingPages  (props)  {

    
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={App}></Route>
                    <Route path="/MovieInfo" exact component={Modal}></Route>
                </div>
            </BrowserRouter>
        );
}



export default routingPages;