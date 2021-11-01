import React from "react";

const MyField = ({ title, placeholder, autoComplete, input, meta }) => {
  return (
    <>
      <p type={title} className="legend2"></p>
      <input
        className="input"
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...input}
      />
      {meta.touched && <p className="formError">{meta.error}</p>}
    </>
  );
};
export default MyField;
