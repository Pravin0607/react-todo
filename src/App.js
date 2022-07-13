import React, { Component } from "react";
import Todos from "./Todos";
import Todoform from "./Todoform";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, text: "Learn React", status: false },
        { id: 2, text: "Learn Angular", status: false },
        { id: 3, text: "Learn Node", status: false },
      ],
    };
  }
  addtodo = (e, text) => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos,
        { id: this.state.todos.length + 1, text: text, status: false },
      ],
    });
    this.setState({ text: "" });
  };

  status = (e) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === e) {
          console.log(
            "found",
            e,
            todo,
            "status = ",
            todo.status,
            "after ",
            !todo.status
          );
          return {
            ...todo,
            status: !todo.status,
          };
        } else return todo;
      }),
    });
  };
  delete = (e) => {
    this.setState({
      todos: this.state.todos.filter((ob) => ob.id !== e),
    });
  };
  clear = () => {
    this.setState({ todos: this.state.todos.filter(() => 0) });
  };
  render() {
    return (
      <div className="container1 text-center text-capitalize">
        <Todos
          todos={this.state.todos}
          status={this.status}
          delete={this.delete}
        />
        <Todoform add={this.addtodo} clear={this.clear} />
        <br />
        <div
          class="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <ul className="text-start">
            <pre>
              <b className="bi bi-trash3 text-danger "> deletes a todo.</b>
              <br/>
              <b className="bi bi-plus-circle"> adds new todo.</b>
              <br/>
              <b className="btn bi bi-trash3 btn-danger"></b> deletes all
              available todos.
            </pre>
          </ul>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>{" "}
      </div>
    );
  }
}
