import { StyledAntInput, StyledError } from '../styled';

const DateInput = ({ input, meta, placeholder, errorDisplay }) => {
  return (
    <>
      <StyledAntInput placeholder={placeholder} {...input} />
      {(errorDisplay || (meta.visited && !meta.active)) && meta.error && <StyledError>{meta.error}</StyledError>}
    </>
  );
};
export default DateInput;
