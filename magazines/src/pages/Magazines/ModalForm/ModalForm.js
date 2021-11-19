import React from "react";
import { Form, Field } from "react-final-form";
import { InputField } from "./InputField";
import { TextAreaField } from "./TextAreaField";
import Loader from "../../../components/Loader";

class ModalForm extends React.Component {

  render() {
    const { isLoading, initialValues, handleSubmit } = this.props;
    return (
      <>
        <Loader isLoading={isLoading}>
          <Form
            id="form"
            initialValues={initialValues}
            onSubmit={handleSubmit}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit} id="form">
                <Field name="name" placeholder="Name" component={InputField} />
                <Field
                  name="author"
                  placeholder="Author"
                  component={InputField}
                />
                <Field
                  name="description"
                  placeholder="Description"
                  component={TextAreaField}
                />
              </form>
            )}
          />
        </Loader>
      </>
    );
  }
}

export default ModalForm;
