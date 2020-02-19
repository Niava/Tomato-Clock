import React from 'react';

const myStyle = {
    color:'red',
    textAlign:'center'
};
const myPosition = {
    textAlign:'center'
};

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date:new Date(),
            name: 'Niava',
        };
        
    }
    
    componentDidMount(){
        this.timerID = setInterval(
            ()=> this.tick(),1000
        );
    }

    componentWillMount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    render(){
        return(
            <div className="wrapper" style={myPosition}>
                <h2>{(this.state.date.getHours())>=12 ? "Good Afternoon" : "Good Morning"}! { this.state.name }</h2>
                <h1>Time now is <span style={myStyle}> {this.state.date.toLocaleTimeString()}</span></h1>
                <h3>Start Your Tomato Clock</h3>
            </div>
        );
    }
}

export default Clock;