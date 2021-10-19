import React from "react";
import "./testForm.css";
import FormErrors from "./FormErrors";
class TestForm extends React.Component {
  state = {
    fields: {
      Name: {
        name: "Name",
        value: "",
        error: false,
        validator: (value = "") => {
          return value.length >= 2 ? false : "Name is too short";
        },
      },
      Email: {
        name: "Email",
        value: "",
        error: false,
        validator: (value = "") => {
          return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
            ? false
            : "Email is invalid";
        },
      },
      Password: {
        name: "Password",
        value: "",
        error: false,
        validator: (value = "") => {
          return value.match(
            /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
          )
            ? false
            : "Password is too simple";
        },
      },
      PasswordConfirm: {
        name: "PasswordConfirm",
        value: "",
        error: false,
        validator: (value = "") => {
          return value === this.state.fields.Password.value
            ? false
            : "Passwords isnt match";
        },
      },
    },
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    const currentField = this.state.fields[name];
    const error = currentField.validator(currentField.value);
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: { ...currentField, value, error },
      },
    });
  };
  handleSubmit = (event) => {
    // event.preventDefault();
    // Object.entries(this.state.fields).forEach(([key,value]) => {
    //   let error = value.validator([key].value);
    //   let stateFields = this.state.fields;
    //   let currentField = this.state.fields[key];
    //   this.setState({
    //     fields: {
    //       ...stateFields,
    //       [key]: { ...currentField, error },
    //     },
    //   });
    // });

    event.preventDefault();
    const { Name, Email, Password, PasswordConfirm } = this.state.fields;
    const errorName = Name.validator(Name.value);
    const errorEmail = Email.validator(Email.value);
    const errorPassword = Password.validator(Password.value);
    const errorPasswordConfirm = PasswordConfirm.validator(
      PasswordConfirm.value
    );
    !errorName &&
      !errorEmail &&
      !errorPassword &&
      !errorPasswordConfirm &&
      console.log(
        `Name : ${Name.value} | Email : ${Email.value} | Password : ${Password.value} | Password Confirm : ${PasswordConfirm.value}`
      );
    this.setState({
      fields: {
        ...this.state.fields,
        Name: { ...this.state.fields.Name, error: errorName },
        Email: { ...this.state.fields.Email, error: errorEmail },
        Password: { ...this.state.fields.Password, error: errorPassword },
        PasswordConfirm: {
          ...this.state.fields.PasswordConfirm,
          error: errorPasswordConfirm,
        },
      },
    });
  };

  handleReset = (event) => {
    // event.preventDefault();
    // Object.entries(this.state.fields).forEach(([key]) => {
    //   let currentField = this.state.fields[key];
    //   this.setState({
    //     fields: {
    //       ...this.state.fields,
    //       [key]: { ...currentField, value: "" },
    //     },
    //   });
    // });
  };

  render() {
    const {
      fields: { Name, Email, Password, PasswordConfirm },
    } = this.state;
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <h2>FORM</h2>
          <p type="Name:" className="legend2"></p>

          <input
            className="input"
            placeholder="Name.."
            name="Name"
            value={Name.value}
            onChange={this.handleChange}
          ></input>

          <FormErrors err={Name.error} />
          <p type="Email:" className="legend2"></p>
          <input
            className="input"
            placeholder="email.."
            name="Email"
            value={Email.value}
            onChange={this.handleChange}
          ></input>
          <FormErrors err={Email.error} />
          <p type="Password:" className="legend2"></p>
          <input
            className="input"
            placeholder="Password.."
            name="Password"
            value={Password.value}
            onChange={this.handleChange}
          ></input>
          <FormErrors err={Password.error} />
          <p type="Confirm password:" className="legend2"></p>
          <input
            className="input"
            placeholder="Confirm password.."
            name="PasswordConfirm"
            value={PasswordConfirm.value}
            onChange={this.handleChange}
          ></input>
          <FormErrors err={PasswordConfirm.error} />
          <button onClick={this.handleReset} className="formButton">
            Reset
          </button>
          <button className="formButton" type="submit">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default TestForm;
