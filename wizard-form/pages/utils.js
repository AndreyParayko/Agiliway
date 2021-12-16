import moment from 'moment';

const validateRequired = (value) => {
  if (!value) {
    return 'Required';
  }
};
const validateEmail = (value) => {
  if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    return 'Email is invalid';
  }
};

const validatePassword = (value) => {
  if (
    !value.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g)
  ) {
    return 'Password is too simple';
  }
};

const validatePasswordConfirm = (value, allValues) => {
  if (value !== allValues.password) {
    return 'Passwords dont match';
  }
};

const validateDay = (value) => {
  if (!value.match(/^(0?[1-9]|[12]\d|3[01])$/)) {
    return 'Incorrect day';
  }
};

const validateMonth = (value) => {
  if (!value.match(/^(0?[1-9]|1[012])$/)) {
    return 'Incorrect month';
  }
};

const validateYear = (value, allValues) => {
  const date = moment(
    `${value}-${allValues.month}-${allValues.day}`,
    'YYYY-MM-DD'
  );
  if (!value.match(/^(19[1-9]\d|20[0-4]\d|2050)$/)) {
    return 'Incorrect year';
  } else if (!date.isValid()) {
    return 'Date is invalid';
  }
};

const composeValidators =
  (...validators) =>
  (value, allValues) =>
    validators.reduce(
      (error, validator) => error || validator(value, allValues),
      undefined
    );

export const FirstStepValidators = {
  email: composeValidators(validateRequired, validateEmail),
  password: composeValidators(validateRequired, validatePassword),
  passwordConfirm: composeValidators(validateRequired, validatePasswordConfirm),
};
export const SecondStepValidators = {
    day: composeValidators(validateRequired, validateDay),
    month: composeValidators(validateRequired, validateMonth),
    year: composeValidators(validateRequired, validateYear),
    select: validateRequired,
  };
