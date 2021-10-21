import React from "react";

const Fields = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  autoComplete,
  error,
  title,
}) => {
  return (
    <>
      <p type={title} className="legend2"></p>
      <input
        type={type}
        className="input"
        placeholder={placeholder}
        autoComplete={autoComplete}
        name={name}
        value={value}
        
        onChange={onChange}
      ></input>
      <p className="formError">{error}</p>
    </>
  );
};
export default Fields;
