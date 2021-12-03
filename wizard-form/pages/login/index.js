import { useState } from 'react';
import { RootContainer, LoginForm, StyledDivider } from '../../components/styled';
import { Form } from 'react-final-form';
import FirstStep from '../../components/FirstStep';
import SecondStep from '../../components/SecondStep';
import Head from '../../components/Head';
import NavButtons from '../../components/NavButtons';
import LastStep from '../../components/LastStep';
import moment from 'moment';
import Router from 'next/router';

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

const validators = {
  email: (value) => {
    if (!value) {
      return 'Required';
    } else if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      return 'Email is invalid';
    }
  },
  password: (value = '') => {
    if (!value) {
      return 'Required';
    } else if (
      !value.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g)
    ) {
      return 'Password is too simple';
    }
  },
  passwordConfirm: (value, allValues) => {
    if (!value) {
      return 'Required';
    } else if (value !== allValues.password) {
      return 'Passwords dont match';
    }
  },
  day: (value) => {
    if (!value) {
      return 'Required';
    } else if (!value.match(/^(0?[1-9]|[12]\d|3[01])$/)) {
      return 'Incorrect day';
    }
  },
  month: (value ) => {
    if (!value) {
      return 'Required';
    } else if (!value.match(/^(0?[1-9]|1[012])$/)) {
      return 'Incorrect month';
    }
  },
  year: (value, allValues) => {
    const date = moment(`${value}-${allValues.month}-${allValues.day}`, "YYYY-MM-DD")
    if (!value) {
      return 'Required';
    } else if (!value.match(/^(19[1-9]\d|20[0-4]\d|2050)$/)) {
      return 'Incorrect year';
    } else if (!date.isValid()) {
      return 'Date is invalid';
    }
  },
  select: (value) => {
    if (!value) {
      return 'Required';
    }
  },
};

export default function Home() {
  const [state, setState] = useState({
    type: 1,
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
              {state.type == 1 && (
                <FirstStep
                  validators={validators}
                  errorDisplay={state.displayErrors}
                />
              )}
              {state.type == 2 && (
                <SecondStep
                  validators={validators}
                  errorDisplay={state.displayErrors}
                />
              )}
              {state.type != 3 && <StyledDivider />}
              <NavButtons state={state} setState={setState} errors={errors} />
              {state.type == 3 && <LastStep />}
            </form>
          )}
        />
      </LoginForm>
    </RootContainer>
  );
}
