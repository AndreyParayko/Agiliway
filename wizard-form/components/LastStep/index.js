import {
  SuccessContainer,
  SuccessIcon,
  SuccessButton,
} from '../styled';

const LastStep = () => {
  return (
    <SuccessContainer>
      <SuccessIcon style={{ fontSize: '200px' }} />
      <SuccessButton variant="outlined" type="submit">
        Go to Dashbord
      </SuccessButton>
    </SuccessContainer>
  );
};
export default LastStep;
