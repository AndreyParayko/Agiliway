import { InputsContainer } from '../styled';
import { Field } from 'react-final-form';
import FirstStepInput from './FirstStepInput';

const FirstStep = ({validators, errorDisplay}) => {
  return (
    <InputsContainer>
      <div>EMAIL</div>
      <Field
        component={FirstStepInput}
        name={'email'}
        validate={validators.email}
        errorDisplay={errorDisplay}
      ></Field>
      <div>PASSWORD</div>
      <Field
        type='password'
        component={FirstStepInput}
        name={'password'}
        validate={validators.password}
        errorDisplay={errorDisplay}
      ></Field>
      <div>CONFIRM PASSWORD</div>
      <Field
        type='password'
        component={FirstStepInput}
        name={'passwordConfirm'}
        validate={validators.passwordConfirm}
        errorDisplay={errorDisplay}
      ></Field>
    </InputsContainer>
  );
};
export default FirstStep;
