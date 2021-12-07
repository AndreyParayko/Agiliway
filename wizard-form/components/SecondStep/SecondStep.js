import {
  Date,
  InputGroup,
  Gender,
  RadioGroup,
  Where,
  SelectContainer,
  DateContainer,
} from '../styled';
import { Field } from 'react-final-form';
import DateInput from './DateInput';
import Radio from './Radio';
import Select from './Select';
import { SecondStepValidators } from '../../pages/utils';

const SecondStep = ({
  errorDisplay,
}) => {
  return (
    <div>
      <Date>DATE OF BIRTH</Date>
      <InputGroup>
        <DateContainer>
          <Field
            component={DateInput}
            placeholder="DD"
            name={'day'}
            validate={SecondStepValidators.day}
            errorDisplay={errorDisplay}
          ></Field>
          <Field
            component={DateInput}
            placeholder="MM"
            name={'month'}
            validate={SecondStepValidators.month}
            errorDisplay={errorDisplay}
          ></Field>
          <Field
            component={DateInput}
            placeholder="YYYY"
            name={'year'}
            validate={SecondStepValidators.year}
            errorDisplay={errorDisplay}
          ></Field>
        </DateContainer>
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
      </RadioGroup>
      <Where>WHERE DID YOU HEAR ABOUT US?</Where>
      <SelectContainer>
        <Field
          name="select"
          validate={SecondStepValidators.select}
          component={Select}
          errorDisplay={errorDisplay}
        />
      </SelectContainer>
    </div>
  );
};
export default SecondStep;
