import { InputsContainer } from '../styled';
import { Field } from 'react-final-form';
import FirstStepInput from './FirstStepInput';
import { FirstStepValidators } from '../../pages/utils';

const FirstStep = ({
  errorDisplay,
}) => {
  return (
    <InputsContainer>
      <div>EMAIL</div>
      <Field
        component={FirstStepInput}
        name={'email'}
        validate={FirstStepValidators.email}
        errorDisplay={errorDisplay}
      ></Field>
      <div>PASSWORD</div>
      <Field
        type="password"
        component={FirstStepInput}
        name={'password'}
        validate={FirstStepValidators.password}
        errorDisplay={errorDisplay}
      ></Field>
      <div>CONFIRM PASSWORD</div>
      <Field
        type="password"
        component={FirstStepInput}
        name={'passwordConfirm'}
        validate={FirstStepValidators.passwordConfirm}
        errorDisplay={errorDisplay}
      ></Field>
    </InputsContainer>
  );
};
export default FirstStep;
