import React,{ Component } from 'react';
import Card from './Card';

class Name extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[
                {
                    name: 'Vin',
                    age: 23
                }
            ]
        }
    }

    render(){
        return(
            <div className="container">
            <h1>Day2 Learning State</h1>
  
            <div className="row">
              <form className="form-inline">
                <input
                    type="text"
                    className="form-control mb-2 mr-sm-2 mb-sm-0"
                    placeholder="Name"
                    />
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Age"
                      />
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
              </form>
            </div>
            <hr/>
            <div className="row">
              {this.state.data.map((info, index ) => <Card key={index} info={info}/>)}
            </div>
          </div>
        )
    }
}

export default Name;