import React from "react";
import "./todo.scss";
import { connect } from "react-redux";
import { addTodo, removeTodo, handleInput } from "../app/store";
class Todo extends React.Component {
  handleChange = (event) => {
    const { value, name } = event.target;
    const currentField = this.props.fields[name];
    const err = value.length === 0 ? true : false;

    this.props.handleChange({ value, name, currentField, err });
  };

  handleTodoIncrease = () => {
    const isError = this.props.fields.todoText.err;
    const todoValue = this.props.fields.todoText.value;

    this.props.handleTodoIncrease({ isError, todoValue });
  };

  handleTodoDecrease = () => {
    this.props.handleTodoDecrease();
  };

  render() {
    console.log(this.props);
    const {
      todos,
      fields: { todoText },
    } = this.props;

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
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    fields: state.fields,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (changeObj) => {
      dispatch(handleInput(changeObj));
    },
    handleTodoIncrease: (increaseObj) => {
      dispatch(addTodo(increaseObj));
    },
    handleTodoDecrease: () => {
      dispatch(removeTodo());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
