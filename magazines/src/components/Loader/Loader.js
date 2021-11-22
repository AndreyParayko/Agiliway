import React from "react";
import { Spin } from "antd";
import { FlexCenter } from "../../pages/Magazines/styled";


const Loader = (props) => {
  if (props.isLoading) {
    return <FlexCenter><Spin>{props.children}</Spin></FlexCenter>;
  }
  return props.children;
};
export default Loader;



