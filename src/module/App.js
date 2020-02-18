import React from 'react';
import '../App.css';

const divCenter = {
  display:'block',
  width:'220px',
  margin:'0 auto',
  textAlign:'center'
}

class AppCountDown extends React.Component {
  constructor() {
    super();
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

export default AppCountDown;