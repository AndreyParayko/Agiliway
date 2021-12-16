import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const InputField = ({ input, placeholder }) => (
  <Input {...input} placeholder={placeholder} />
);

InputField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string,
  }),
  placeholder: PropTypes.string,
};

InputField.defaultProps = {
  input: {},
  placeholder: '',
};
export default InputField;
