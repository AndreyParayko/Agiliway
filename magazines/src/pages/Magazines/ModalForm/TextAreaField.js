import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const TextAreaField = ({ input, placeholder }) => {
  const { TextArea } = Input;
  return <TextArea rows={4} {...input} placeholder={placeholder} />;
};

export default TextAreaField;

TextAreaField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string,
  }),
  placeholder: PropTypes.string,
};

TextAreaField.defaultProps = {
  input: {},
  placeholder: '',
};
