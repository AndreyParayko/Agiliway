import React from "react";

export class FirstComponent extends React.Component {
  state = {
    todoList: [],
    fields: { todoText: { name: "todoText", label: "Todo text", value: "" } },
  };

  handleSubmit = (event) => {};

  handleChange = (event) => {
    const { value, name } = event.target;
    const currentField = this.state.fields[name];
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: { ...currentField, value },
      },
    });
    console.log(this.state)
  };

  render() {
    const {
      todoList,
      fields: { todoText },
    } = this.state;

    return (
      <>
        <div>
          <div>Todo List</div>
          {todoList.map((todo) => (
            <div>ITEM</div>
          ))}
        </div>
        <hr style={{ width: "100%" }} />
        <div>
          <div>Todo Add Form</div>
          <form onSubmit={this.handleSubmit}>
            <label style={{ paddingRight: "20px" }} htmlFor="name">
              {todoText.label}
            </label>
            <input
              type="text"
              onChange={this.handleChange}
              value={todoText.value}
              name={todoText.name}
              id={todoText.name}
            />
            {todoText.value.length === 0 && <span>Field can't be empty</span>}
            <button
              disabled={todoText.value.length === 0}
              style={{ marginLeft: "20px" }}
            >
              Add todo
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default FirstComponent;
