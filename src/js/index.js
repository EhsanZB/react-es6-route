import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';


import Routes from './routes';
const app = document.getElementById('app');


// WAY#1
// class Root extends Component {
//     render() {
//         return (
//             <Routes history={browserHistory} />
//         );
//     }
// }

// ReactDOM.render(<Root />, app);


// WAY#2
ReactDOM.render( <Routes history={browserHistory} />, app);
