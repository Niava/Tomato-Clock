import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './module/Clock';
import AppCountDown from './module/App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

function tick(){
    ReactDOM.render(
        <Clock date={new Date()} name="Niava" />, document.getElementById('root')
    );
}

setInterval(tick,1000);

ReactDOM.render(<AppCountDown />, document.getElementById('View'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
