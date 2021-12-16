import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import Loader from '../../../components/Loader';

const ModalForm = ({ isLoading, initialValues, handleSubmit }) => (
  <Loader isLoading={isLoading}>
    <Form
      id="form"
      initialValues={initialValues}
      onSubmit={handleSubmit}
      // eslint-disable-next-line no-shadow
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} id="form">
          <Field name="name" placeholder="Name" component={InputField} />
          <Field name="author" placeholder="Author" component={InputField} />
          <Field
            name="description"
            placeholder="Description"
            component={TextAreaField}
          />
        </form>
      )}
    />
  </Loader>
);

ModalForm.propTypes = {
  isLoading: PropTypes.bool,
  handleSubmit: PropTypes.func,
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    uuid: PropTypes.string,
  }),
};
ModalForm.defaultProps = {
  isLoading: true,
  handleSubmit: () => {},
  initialValues: {},
};
export default ModalForm;
