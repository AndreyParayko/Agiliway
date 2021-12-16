import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import { FlexCenter } from '../../pages/Magazines/styled';

const Loader = (props) => {
  const { isLoading, children } = props;
  if (isLoading) {
    return (
      <FlexCenter>
        <Spin>{children}</Spin>
      </FlexCenter>
    );
  }
  return children;
};

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};
export default Loader;
