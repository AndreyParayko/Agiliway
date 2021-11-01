import React from "react";
import "./FinalForm.scss";
import MyField from "./MyField";
import { Form, Field } from "react-final-form";
class FinalForm extends React.Component {
  state = {
    fields: {
      name: {
        title: "Name",
        type: "name",
        name: "name",
        placeholder: "Input your name..",
        validator: (value) => {
          if (!value) {
            return "Required";
          } else if (value.length < 2) {
            return "Name is too short";
          }
        },
      },
      email: {
        title: "Email",
        type: "email",
        name: "email",
        placeholder: "Input your email..",
        validator: (value) => {
          if (!value) {
            return "Required";
          } else if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
            return "Email is invalid";
          }
        },
      },
      password: {
        title: "Password",
        type: "password",
        name: "password",
        autoComplete: "false",
        placeholder: "Input your password..",
        validator: (value = "") => {
          if (!value) {
            return "Required";
          } else if (
              !value.match(
                /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
              )
              ) {
            return "Password is too simple";
          }
        },
      },
      passwordConfirm: {
        title: "Password confirm",
        type: "password",
        name: "passwordConfirm",
        autoComplete: "false",
        placeholder: "Confirm your password..",
        validator: (value, allValues) => {
          if (!value) {
            return "Required";
          } else if (value !== allValues.password) {
            return "Password dont match";
          }
        },
      },
    },
  };

  onSubmit = (values) => {
    console.log(values);
  };

  render() {
    let formData = {};
    return (
      <>
        <Form
          onSubmit={this.onSubmit}
          initialValues={formData}
          render={({ handleSubmit, form, submitting, pristine }) => (
            <form className="form" onSubmit={handleSubmit}>
              <h2>Rect Final Form</h2>
              {Object.entries(this.state.fields).map(([_, fieldState]) => {
                return (
                  <Field
                    name={fieldState.name}
                    component={MyField}
                    validate={fieldState.validator}
                    title={fieldState.title}
                    key={fieldState.name}
                    type={fieldState.type}
                    className="input"
                    placeholder={fieldState.placeholder}
                    autoComplete={fieldState.autoComplete}
                  ></Field>
                );
              })}

              <button
                onClick={form.reset}
                className="formButton"
                disabled={submitting || pristine}
              >
                Reset
              </button>
              <button
                className="formButton"
                type="submit"
                disabled={submitting}
              >
                Submit
              </button>
            </form>
          )}
        />
      </>
    );
  }
}

export default FinalForm;
