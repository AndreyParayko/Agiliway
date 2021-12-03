import { Header, StyledProgress } from '../styled';

const Head = ({ state }) => {
  return (
    <>
      <Header>
        {state.type != 3 && 'Signup'}
        {state.type == 3 && 'Thank you!'}
      </Header>
      <StyledProgress
        strokeLinecap="square"
        status="active"
        percent={state.progress}
        showInfo={false}
      />
    </>
  );
};

export default Head;
