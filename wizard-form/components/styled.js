import styled from 'styled-components';
import { Radio, Select, Input as AntInput, Progress } from 'antd';
import Input from '@mui/material/Input';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const RootContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
  align-items: center;
`;
export const SuccessIcon = styled(CheckCircleIcon)`
  font-size: 200px;
  color: #6be767;
  margin-bottom: 30px;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 430px;
  height: auto;
  border: solid 1px grey;
  border-radius: 12px;
  margin-top: 20px;
`;
export const Header = styled.div`
  font-size: 30px;
  color: #52cdf8;
  display: flex;
  justify-content: center;
`;
export const StyledProgress = styled(Progress)`
  margin-bottom: 10px;
  .ant-progress-inner{
    border-radius:0;
    border-top: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
        .ant-progress-bg{
            border-radius:0;
  }
`;
export const InputsContainer = styled.div`
  width: 90%;
  margin: 20px;
  margin-bottom: 35px;
`;
export const StyledInput = styled(Input)`
  border-bottom: 1px solid grey;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Date = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
`;
export const InputGroup = styled(AntInput.Group)`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  margin-top: 8px;
  height: 45px;
`;
export const StyledAntInput = styled(AntInput)`
  &.ant-input {
    width: 30%;
    text-align: center;
  }
  &.ant-input::placeholder {
    color: black;
  }
`;

export const Gender = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

export const RadioGroup = styled(Radio.Group)`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 8px;
`;
export const RadioButton = styled(Radio.Button)`
  width: 30%;
`;
export const Where = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 70px;
`;
export const StyledSelect = styled(Select)`
  width: 80%;
`;
export const StyledDivider = styled(Divider)`
  width: 100%;
  margin-bottom: 5px;
`;

export const StyledButtonDisabled = styled.button`
  border: none;
  color: grey;
  background-color: rgb(245, 242, 242);
  padding: 0;
  font-size: 16px;
  cursor: pointer;
  margin: 20px;
`;
export const StyledButtonActive = styled.button`
  border: none;
  color: grey;
  background-color: #0cf546;
  padding: 0;
  font-size: 16;
  cursor: pointer;
  margin: 20px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column nowrap;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 100px;
`;

export const SuccessButton = styled(Button)`
  color: #52cdf8;
  font-size: 16px;
  font-weight: 550;
  text-transform: none;
  border: 1px solid #52cdf8;
  height: 50px;
`;
export const StyledError = styled.p`
  color: red;
  margin-top: 1px;
`;
export const StartButton = styled.button`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 4px solid #d4eef7;
  border-radius: 50%;
  margin-top: 30px;
`;
export const SecondCircle = styled.span`
  width: 170px;
  height: 170px;
  display: flex;
  margin: auto;
  border: 6px solid #52cdf8;
  border-radius: 50%;
`;
export const FirstCircle = styled.span`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border: 4px solid #0fb8fb;
  border-radius: 50%;
  color: #15c1fc;
  font-size: 2em;
  font-weight: bold;
`;
export const Stepper = styled.div`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0fb8fb;
  border: 1px solid #0d9cd4;
  border-radius: 4%;
  color: white;
  font-size: 19px;
  font-weight: bold;
  margin-top: 10px;
`;
