import React from 'react';

const myStyle = {
    color:'red',
    textAlign:'center'
};
const myPosition = {
    textAlign:'center'
};

class Clock extends React.Component{
    render(){
        return(
            <div className="wrapper" style={myPosition}>
                <h2>{(this.props.date.getHours())>=12 ? "Good Afternoon" : "Good Morning"}! { this.props.name }</h2>
                <h1>Time now is <span style={myStyle}> {this.props.date.toLocaleTimeString()}</span></h1>
                <h3>Start Your Tomato Clock</h3>
            </div>
        );
    }
}

export default Clock;