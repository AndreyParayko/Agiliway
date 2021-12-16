import { StyledAntInput, StyledError, InputContainer } from '../styled';

const DateInput = ({ input, meta, placeholder, errorDisplay }) => {
  return (
    <InputContainer>
      <StyledAntInput placeholder={placeholder} {...input} />
      {(errorDisplay || (meta.visited && !meta.active)) && meta.error && <StyledError>{meta.error}</StyledError>}
    </InputContainer>
  );
};
export default DateInput;
