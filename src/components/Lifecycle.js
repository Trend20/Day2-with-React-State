import React, { Component } from 'react';

class Lifecycle extends Component{
    constructor(props){
        super(props);
        this.state={
            count: 0,
        }
    }
    updateCounter(){
        this.setState((prevState, props) =>{
            return {count: prevState.count + 1}
        })
    }
    render(){
        return(
            <button onClick={() =>this.updateCounter()}>
                Clicked {this.state.count} times
            </button>
        )
    }
}

export default Lifecycle;