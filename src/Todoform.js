import React, { Component } from "react";

export default class Todo_form extends Component {
  constructor(props)
  {
   super();
    this.state = {
      text:""
    }
  }
  handleChange = (e) => {
    this.setState({text:e.target.value})
  }
  render() {
    return (
      <div>
        <br/>
        <form className="form-group" onSubmit={(e)=>{this.props.add(e,this.state.text);this.setState({text:""})}}>
          <div className="row">
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Todo"
                value={this.state.text}
                onChange={this.handleChange}
              />
            </div>
            <div className="col-2 ">
              
              <button className="btn btn-primary"><b className="bi bi-plus-circle"></b></button>
            </div>
            <div className="col-2">
            <div className="btn btn-danger" onClick={this.props.clear}>
          <b className="bi bi-trash3 text-light"></b>
        </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
