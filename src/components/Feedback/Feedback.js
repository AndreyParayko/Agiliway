import React from "react";
import FormErrors from "../FormErrors";
class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: "",
      Message: "",
      formErrors: { Email: "", Name: "", Message: "" },
      EmailValid: false,
      NameValid: false,
      MessageValid: false,
      formValid: false
    };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value
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
    let MessageValid = this.state.MessageValid;

    switch (fieldName) {
      case "Email":
        EmailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)&& value.length >0;
        fieldValidationErrors.Email = EmailValid ? "" : " is invalid";
        break;
      case "Name":
        NameValid = value.length >= 3;
        fieldValidationErrors.Name = NameValid ? "" : " is too short";
        break;
        case "Message":
            MessageValid = value.length > 10;
            fieldValidationErrors.Message = MessageValid ? "" : " is too short";
            break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        EmailValid: EmailValid,
        NameValid: NameValid,
        MessageValid: MessageValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({ formValid: this.state.EmailValid && this.state.NameValid && this.state.MessageValid});
  }

  handleSubmit = event => {
    console.log("Name: " + this.state.Name);
    console.log("Email: " + this.state.Email);
    console.log("Message: " + this.state.Message);
    event.preventDefault();
  };

  render() {
    return (
      <div className="box">
        <div id="about" className="d-flex justify-content-center">
          <form
            id="contact-form"
            className="contact-form"
            onSubmit={this.handleSubmit}
          >
            <h1>Please write feedback!</h1>
            <div classNameName="panel panel-default">
              <FormErrors formErrors={this.state.formErrors} />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="Name"
                    autocomplete="off"
                    id="Name"
                    placeholder="Name"
                    value={this.state.Name}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    // type="Email"
                    className="form-control"
                    name="Email"
                    autocomplete="off"
                    id="Email"
                    placeholder="E-mail"
                    value={this.state.Email}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <textarea
                    className="form-control textarea"
                    rows="3"
                    name="Message"
                    id="Message"
                    placeholder="Message"
                    value={this.state.Message}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 ">
                <button
                  type="submit"
                  className="btn btn-primary btn-md pull-right"
                  disabled={!this.state.formValid}
                >
                  Send a message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Feedback;
