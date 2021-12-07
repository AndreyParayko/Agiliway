import {
  ButtonContainer,
  StyledButtonActive,
  StyledButtonDisabled,
  StyledBackButton,
} from '../styled';
import {STEPS} from '../../pages/constants';

const NavButtons = ({ state, setState, errors }) => {
  const next = (errors, state) => {
    if (Object.keys(errors).length !== 0) {
      return (
        <StyledButtonDisabled
          onClick={() =>
            setState({
              ...state,
              displayErrors: true,
            })
          }
        >
          Next
        </StyledButtonDisabled>
      );
    }
    return (
      <StyledButtonActive
        disabled={Object.keys(errors).length !== 0}
        onClick={() =>
          setState({
            ...state,
            step: state.step + 1,
            progress: state.progress + 34,
            displayErrors: false,
          })
        }
      >
        Next
      </StyledButtonActive>
    );
  };
  return (
    <ButtonContainer>
      {state.step === STEPS.FIRST_STEP && <div></div>}
      {state.step === STEPS.SECOND_STEP && (
        <StyledBackButton
          onClick={() =>
            setState({
              ...state,
              step: state.step > 1 ? state.step - 1 : 1,
              progress: state.progress > 0 ? state.progress - 33 : 0,
            })
          }
        >
          Back
        </StyledBackButton>
      )}
      {state.step !== STEPS.LAST_STEP && next(errors, state)}
    </ButtonContainer>
  );
};
export default NavButtons;
