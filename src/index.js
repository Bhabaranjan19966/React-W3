import React from "react";
import ReactDOM from "react-dom";
import App from './Components/app.js'
import Button from '@material-ui/core/Button';
import AppRouter from './Routes/AppRouter.js'


ReactDOM.render(<AppRouter />, document.getElementById("index"));