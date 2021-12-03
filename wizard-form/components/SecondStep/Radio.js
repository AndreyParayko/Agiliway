import { RadioButton } from '../styled';

const Radio = ({ input, text }) => {
  return (
    <>
      <RadioButton {...input} type="radio">
        {text}
      </RadioButton>
    </>
  );
};
export default Radio;
