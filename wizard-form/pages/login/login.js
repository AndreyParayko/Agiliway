import { useState } from 'react';
import {
  RootContainer,
  LoginForm,
  StyledDivider,
} from '../../components/styled';
import { Form } from 'react-final-form';
import FirstStep from '../../components/FirstStep';
import SecondStep from '../../components/SecondStep';
import Head from '../../components/Head';
import NavButtons from '../../components/NavButtons';
import LastStep from '../../components/LastStep';
import moment from 'moment';
import Router from 'next/router';
import { STEPS } from '../constants';

const onSubmit = (values) => {
  const date = moment(
    new Date(`${values.month}/${values.day}/${values.year}`)
  ).format('dddd Do MMMM YYYY');

  console.log(`
  Email: ${values.email}
  Password: ${values.password}
  Password confirm: ${values.passwordConfirm}
  Date: ${date}
  Gender: ${values.radio}
  Where found us: ${values.select}`);
  Router.push('/');
};


export default function Home() {
  const [state, setState] = useState({
    step: 1,
    progress: 33,
    displayErrors: false,
  });
  return (
    <RootContainer>
      <LoginForm>
        <Head state={state} />
        <Form
          onSubmit={onSubmit}
          initialValues={{ radio: 'unspecified' }}
          render={({ handleSubmit, errors }) => (
            <form onSubmit={handleSubmit}>
              {state.step === STEPS.FIRST_STEP && (
                <FirstStep
                  errorDisplay={state.displayErrors}
                />
              )}
              {state.step === STEPS.SECOND_STEP && (
                <SecondStep
                  errorDisplay={state.displayErrors}
                />
              )}
              {state.step !== STEPS.LAST_STEP && <StyledDivider />}
              <NavButtons state={state} setState={setState} errors={errors} />
              {state.step === STEPS.LAST_STEP && <LastStep />}
            </form>
          )}
        />
      </LoginForm>
    </RootContainer>
  );
}
