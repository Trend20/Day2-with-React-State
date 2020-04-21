import React, { Component } from 'react';
import Lifecycle from './Lifecycle';
import Name from './friendapp/Name';

class State extends Component{
    constructor(props){
        super(props)
        this.state={
            date: new Date(),
        }
    }
    render(){
        return(
            <div className="state">
                <p>Today is {this.state.date.toLocaleDateString()}</p>
                <Lifecycle />
                <Name />
            </div>
        )
    }
}

export default State;