import Head from 'next/head';
import {
  RootContainer,
  StartButton,
  FirstCircle,
  SecondCircle,
  Stepper,
} from '../components/styled';
import Router from 'next/router';

const routeToLogin = () => {
  Router.push('/login/');
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Form Wizzard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RootContainer>
        <Stepper>Let the stepper begin</Stepper>
        <StartButton onClick={routeToLogin}>
          <SecondCircle>
            <FirstCircle>
              <a>START</a>
            </FirstCircle>
          </SecondCircle>
        </StartButton>
      </RootContainer>
    </>
  );
}