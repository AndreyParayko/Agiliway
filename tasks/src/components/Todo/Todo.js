import React from "react";
import "./todo.scss";

class Todo extends React.Component {
  state = {
    todos: ["Learn JS"],
    fields: {
      todoText: {
        name: "todoText",
        value: "",
        placeholder: "Type here",
        err: true, // ??
      },
    },
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    const currentField = this.state.fields[name];
    const err = value.length === 0 ? true : false; // ??

    this.setState({
      fields: {
        ...this.state.fields,
        [name]: { ...currentField, value, err }, // ??
      },
    });
  };

  handleTodoIncrease = () => {
    const isError = this.state.fields.todoText.err;
    const todoValue = this.state.fields.todoText.value;
    if (!isError) {
      this.setState({
        todos: [...this.state.todos, todoValue],
        fields: {
          todoText: {
            name: "todoText",
            value: "",
            placeholder: "Type here",
            err: true,
          },
        },
      });
    }
    console.log(this.state);
  };

  handleTodoDecrease = () => {
    const todosCopy = [...this.state.todos];
    todosCopy.pop();
    this.setState({ todos: todosCopy });
  };

  render() {
    const {
      todos,
      fields: { todoText },
    } = this.state;

    const size = todos.length;
    const isAddDisabled = size >= 10;
    const isRemoveDisabled = size === 0;
    const isListEmpty = size !== 0; // ??

    return (
      <div className="box1">
        <h2>Todo</h2>
        <ul className="list1">
          {todos.map((todo, index) => (
            <li key={index} className="listItem1">
              {todo}
            </li>
          ))}
        </ul>
        <h3 hidden={isListEmpty}>Nothing to do</h3>
        <form>
          <label className="text1">Todo text:</label>
          <input
            type="text1"
            className="input1"
            name={todoText.name}
            id=""
            onChange={this.handleChange}
            value={todoText.value}
          />
        </form>

        <div>
          <button
            disabled={isAddDisabled}
            onClick={this.handleTodoIncrease}
            className="btn1"
          >
            Add
          </button>

          <button
            disabled={isRemoveDisabled}
            onClick={this.handleTodoDecrease}
            className="btn1"
          >
            Remove
          </button>
        </div>
        {todoText.err && <span className="err1">Field can't be empty</span>}
      </div>
    );
  }
}

export default Todo;
