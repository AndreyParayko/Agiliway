import { StyledSelect, StyledError, InputContainer } from '../styled';
import { Select as AntSelect } from 'antd';

const children = [
  <AntSelect.Option key={"Internet"}>Internet</AntSelect.Option>,
  <AntSelect.Option key={"Social Media"}>Social Media</AntSelect.Option>,
  <AntSelect.Option key={"Ad"}>Ad</AntSelect.Option>,
];

const Select = ({ input, meta, errorDisplay }) => {
  return (
    <InputContainer>
      <StyledSelect size={'large'} {...input}>
        {children}
      </StyledSelect>
      {errorDisplay && meta.error && <StyledError>{meta.error}</StyledError>}
    </InputContainer>
  );
};
export default Select;
