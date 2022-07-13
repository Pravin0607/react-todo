import React, { Component } from "react";

export default class Todos extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      // align-items-center
      <>
        <br />
        <div className="container">
          {this.props.todos.map((todo) => {
            let btn=!todo.status?'text-primary':'text-success'
            let cl = todo.status ? "complete" : "";
            return (
              <div className="row" key={todo.id}>
                <div className="col-1 ">{todo.id}</div>
                <div className={`col-7 ${cl} justfy-content-start`}>
                  {todo.text}
                </div>
                <div className={`col-2 btn btn-outlined-primary align-items-center ${btn}`} onClick={() => this.props.status(todo.id)}>
                  
                    <b className="bi bi-check2-circle"></b>
                
                </div>
                <div className="col-2 btn btn-outlined-primary align-items-center text-danger"onClick={() => this.props.delete(todo.id)}>
                  <b className="bi bi-trash3"></b></div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
