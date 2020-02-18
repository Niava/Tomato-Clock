import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

const myStyle = {
    color:'red',
    textAlign:'center'
};
const myPosition = {
    textAlign:'center'
};
const divCenter = {
    display:'block',
    width:'220px',
    margin:'0 auto',
    textAlign:'center'
}

class Clock extends React.Component{
    render(){
        return(
            <div class="wrapper" style={myPosition}>
                <h2>{(this.props.date.getHours())>=12 ? "Good Afternoon" : "Good Morning"}! { this.props.name }</h2>
                <h1>Time now is <span style={myStyle}> {this.props.date.toLocaleTimeString()} </span></h1>
                <h3>Start Your Tomato Clock</h3>
            </div>
        );
    }
}

function tick() {
    ReactDOM.render(
        <Clock date={new Date()} name="Leah" />, document.getElementById('root')
    );
}

setInterval(tick,1000);


class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = { time: {}, seconds: 1800 };
      this.timer = 0;
      this.startTimer = this.startTimer.bind(this);
      this.countDown = this.countDown.bind(this);
    }
  
    secondsToTime(secs){
      let hours = Math.floor(secs / (60 * 60));
      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);
      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);
      let obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
      };
      return obj;
    }
  
    componentDidMount() {
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
    }
  
    startTimer() {
      if (this.timer === 0 && this.state.seconds > 0) {
        this.timer = setInterval(this.countDown, 1000);
      }
    }
  
    countDown() {
      // Remove one second, set state so a re-render happens.
      let seconds = this.state.seconds - 1;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });
      
      // Check if we're at zero.
      if (seconds === 0) { 
        clearInterval(this.timer);
      }
    }

    render() {
      return(
        <div style={divCenter}>
          <button onClick={this.startTimer}>Click to Start</button>
          <h1>S:{this.state.time.s}</h1>
          <h1>M:{this.state.time.m}</h1>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Example/>, document.getElementById('View'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
