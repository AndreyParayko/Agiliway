import React from "react";
import "./testForm.css";
import FormErrors from "./FormErrors";
class TestForm extends React.Component {
  state = {
    Name: "",
    Email: "",
    Password: "",
    PasswordConfirm: "",
    formErrors: { Email: "", Name: "", Password: "", PasswordConfirm: "" },
    EmailValid: false,
    NameValid: false,
    PasswordValid: false,
    PasswordConfirmValid: false,
    formValid: false,

  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(this.state);

    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let EmailValid = this.state.EmailValid;
    let NameValid = this.state.NameValid;
    let PasswordValid = this.state.PasswordValid;
    let PasswordConfirmValid = this.state.PasswordConfirmValid;

    switch (fieldName) {
      case "Email":
        EmailValid =
          value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) &&
          value.length > 0;
        fieldValidationErrors.Email = EmailValid ? "" : "Email is invalid";
        break;
      case "Name":
        NameValid = value.length >= 3;
        fieldValidationErrors.Name = NameValid ? "" : "Name is too short";
        break;
      case "Password":
        PasswordValid = value.length > 0;
        value.match(
        /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
        );
        fieldValidationErrors.Password = PasswordValid
          ? ""
          : "Password is invalid";
        break;
      case "PasswordConfirm":
        PasswordConfirmValid = value === this.state.Password;
        fieldValidationErrors.PasswordConfirm = PasswordConfirmValid
          ? ""
          : "Passwords isnt macth";
        break;

      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        EmailValid: EmailValid,
        NameValid: NameValid,
        PasswordValid: PasswordValid,
        PasswordConfirmValid: PasswordConfirmValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.EmailValid &&
        this.state.NameValid &&
        this.state.PasswordValid &&
        this.state.PasswordConfirmValid,
    });
  }

  handleSubmit = (event) => {
    console.log("Name: " + this.state.Name);
    console.log("Email: " + this.state.Email);
    console.log("Password: " + this.state.Password);
    console.log("PasswordConfirm: " + this.state.PasswordConfirm);
    event.preventDefault();
  };

  render() {
    const nameErr = this.state.formErrors.Name;
    const emailErr = this.state.formErrors.Email;
    const passwordErr = this.state.formErrors.Password;
    const confirmErr = this.state.formErrors.PasswordConfirm;
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <h2>FORM</h2>
          <p type="Name:" className="legend2"></p>

          <input
            className="input"
            placeholder="Name.."
            name="Name"
            value={this.state.Name}
            onChange={this.handleChange}
          ></input>

          <FormErrors err={nameErr} />
          <p type="Email:" className="legend2"></p>
          <input
            className="input"
            placeholder="email.."
            name="Email"
            value={this.state.Email}
            onChange={this.handleChange}
          ></input>
          <FormErrors err={emailErr} />
          <p type="Password:" className="legend2"></p>
          <input
            className="input"
            placeholder="Password.."
            name="Password"
            value={this.state.Password}
            onChange={this.handleChange}
          ></input>
          <FormErrors err={passwordErr} />
          <p type="Confirm password:" className="legend2"></p>
          <input
            className="input"
            placeholder="Confirm password.."
            name="PasswordConfirm"
            value={this.state.PasswordConfirm}
            onChange={this.handleChange}
          ></input>
          <FormErrors err={confirmErr} />
          <button className="formButton">Reset</button>
          <button
            className="formButton"
            type="submit"
            disabled={!this.state.formValid}
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default TestForm;
