import { StyledInput, StyledError } from "../styled";

const FirstStepInput = ({ input, meta, errorDisplay }) => {
    return (
      <>
        <StyledInput fullWidth autoComplete="on"
          {...input}
        />
        {(errorDisplay || meta.touched) && meta.error && <StyledError >{meta.error}</StyledError >}
      </>
    );
  };
  export default FirstStepInput;