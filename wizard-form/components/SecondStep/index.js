import {
  Date,
  InputGroup,
  Gender,
  RadioGroup,
  Where,
  SelectContainer,
} from '../styled';
import { Field } from 'react-final-form';
import DateInput from './DateInput';
import Radio from './Radio';
import Select from './Select';

const SecondStep = ({ validators, errorDisplay }) => {
  return (
    <div>
      <Date>DATE OF BIRTH</Date>
      <InputGroup>
        <Field
          component={DateInput}
          placeholder="DD"
          name={'day'}
          validate={validators.day}
          errorDisplay={errorDisplay}
        ></Field>
        <Field
          component={DateInput}
          placeholder="MM"
          name={'month'}
          validate={validators.month}
          errorDisplay={errorDisplay}
        ></Field>
        <Field
          component={DateInput}
          placeholder="YYYY"
          name={'year'}
          validate={validators.year}
          errorDisplay={errorDisplay}
        ></Field>
      </InputGroup>
      <Gender>GENDER</Gender>
      <RadioGroup size="large" defaultValue="unspecified">
        <Field
          component={Radio}
          value="male"
          name="radio"
          type="radio"
          text="MALE"
        ></Field>
        <Field
          component={Radio}
          value="female"
          name="radio"
          type="radio"
          text="FEMALE"
        ></Field>
        <Field
          component={Radio}
          value="unspecified"
          name="radio"
          type="radio"
          text="UNSPECIFIED"
          errorDisplay={errorDisplay}
        ></Field>
      </RadioGroup >
      <Where>WHERE DID YOU HEAR ABOUT US?</Where>
      <SelectContainer>
        <Field
          name="select"
          validate={validators.select}
          component={Select}
          errorDisplay={errorDisplay}
        />
      </SelectContainer>
    </div>
  );
};
export default SecondStep;
