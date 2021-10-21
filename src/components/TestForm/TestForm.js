import React from "react";
import "./testForm.scss";
import Fields from "./Fields";
class TestForm extends React.Component {
  state = {
    fields: {
      name: {
        title: "Name",
        type: "name",
        name: "name",
        value: "",
        error: false,
        placeholder: "Input your name..",
        validator: (value = "") => {
          return value.length >= 2 ? false : "Name is too short";
        },
      },
      email: {
        title: "Email",
        type: "email",
        name: "email",
        value: "",
        error: false,
        placeholder: "Input your email..",
        validator: (value = "") => {
          return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
            ? false
            : "Email is invalid";
        },
      },
      password: {
        title: "Password",
        type: "password",
        name: "password",
        autoComplete: "false",
        value: "",
        error: false,
        placeholder: "Input your password..",
        validator: (value = "") => {
          return value.match(
            /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
          )
            ? false
            : "Password is too simple";
        },
      },
      passwordConfirm: {
        title: "Password confirm",
        type: "password",
        name: "passwordConfirm",
        autoComplete: "false",
        value: "",
        error: false,
        placeholder: "Confirm your password..",
        validator: (value = "", allValues) => {
          return value === allValues.password ? false : "Passwords dont match";
        },
      },
    },
    isError: null,
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    const currentField = this.state.fields[name];
    let errors = [];
    const allValues = Object.entries(this.state.fields).reduce(
      (newObj, [fieldname, fieldState]) => {
        return { ...newObj, [fieldname]: fieldState.value };
      },
      {}
    );

    const error = currentField.validator(value, allValues);
    this.setState(
      {
        fields: {
          ...this.state.fields,
          [name]: { ...currentField, value, error },
        },
      },
      () => {
        Object.entries(this.state.fields).forEach(([_, fieldState]) => {
          let error = fieldState.error;
          errors.push(error);
        });
        let fieldsError = !errors.every((err) => err === false);
        this.setState({ isError: fieldsError });
      }
    );
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { fields } = this.state;
    const updatedValues = {};
    const errors = [];
    const allValues = Object.entries(fields).reduce(
      (newObj, [fieldname, fieldState]) => {
        return { ...newObj, [fieldname]: fieldState.value };
      },
      {}
    );

    Object.entries(fields).forEach(([fieldName, fieldState]) => {
      const updatedFields = { ...fields[fieldName] };
      let error = fieldState.validator(fieldState.value, allValues);
      updatedFields.error = error;
      updatedValues[fieldName] = updatedFields;
    });

    this.setState({ fields: updatedValues }, () => {
      Object.entries(this.state.fields).forEach(([_, fieldState]) => {
        let error = fieldState.error;
        errors.push(error);
      });
      let fieldsError = !errors.every((err) => err === false);
      this.setState({ isError: fieldsError }, () => {
        !this.state.isError &&
          Object.entries(this.state.fields).forEach(
            ([fieldName, fieldState]) => {
              console.log(`${fieldName}: ${fieldState.value}`);
            }
          );
      });
    });
  };

  handleReset = (event) => {
    event.preventDefault();
    const { fields } = this.state;
    const updatedValues = {};
    Object.entries(fields).forEach(([fieldname]) => {
      const updatedFields = { ...fields[fieldname] };
      updatedFields.value = "";
      updatedFields.error = false;
      updatedValues[fieldname] = updatedFields;
    });
    this.setState({ fields: updatedValues, isError: null });
  };

  handlePasswordChange = (event) => {
    const { value } = event.target;
    const passwordField = this.state.fields.password;
    const error = passwordField.validator(value);
    const errors = [];

    this.setState(
      {
        fields: {
          ...this.state.fields,
          password: { ...passwordField, value, error },
        },
      },
      () => {
        const allValues = Object.entries(this.state.fields).reduce(
          (newObj, [fieldname, fieldState]) => {
            return { ...newObj, [fieldname]: fieldState.value };
          },
          {}
        );
        const confirmField = this.state.fields.passwordConfirm;
        if (confirmField.value) {
          const confirmErr = confirmField.validator(
            confirmField.value,
            allValues
          );
          this.setState(
            {
              fields: {
                ...this.state.fields,
                passwordConfirm: { ...confirmField, error: confirmErr },
              },
            },
            () => {
              Object.entries(this.state.fields).forEach(([_, fieldState]) => {
                let error = fieldState.error;
                errors.push(error);
              });
              let fieldsError = !errors.every((err) => err === false);
              this.setState({ isError: fieldsError });
            }
          );
        }
      }
    );
  };

  render() {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <h2>FORM</h2>
          {Object.entries(this.state.fields).map(([_, fieldState]) => {
            return (
              <Fields
                title={fieldState.title}
                key={fieldState.name}
                error={fieldState.error}
                autoComplete={fieldState.autoComplete}
                type={fieldState.type}
                placeholder={fieldState.placeholder}
                name={fieldState.name}
                value={fieldState.value}
                onChange={
                  fieldState.name === "password"
                    ? this.handlePasswordChange
                    : this.handleChange
                }
              />
            );
          })}

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
