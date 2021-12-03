import {
  ButtonContainer,
  StyledButtonActive,
  StyledButtonDisabled,
} from '../styled';

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
            type: state.type + 1,
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
      {state.type == 1 && <div></div>}
      {state.type == 2 && (
        <StyledButtonDisabled
          onClick={() =>
            setState({
              ...state,
              type: state.type > 1 ? state.type - 1 : 1,
              progress: state.progress > 0 ? state.progress - 33 : 0,
            })
          }
        >
          Back
        </StyledButtonDisabled>
      )}
      {state.type != 3 && next(errors, state)}
    </ButtonContainer>
  );
};
export default NavButtons;
