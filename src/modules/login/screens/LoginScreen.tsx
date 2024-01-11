import axios from 'axios';
import { useState } from 'react';

import Button from '../../../shared/components/buttons/button/button';
import Input from '../../../shared/components/inputs/input';
import { useRequests } from '../../../shared/hooks/useRequests';
import {
  Background,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { postRequest, loading } = useRequests();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Send a POST request
    postRequest('http://localhost:8080/auth', {
      email: email,
      password: password,
    });
  };

  return (
    <ContainerLoginScreen>
      <Background src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin>LOGIN</TitleLogin>
          <Input title={'USUARIO:'} margin={'32px 0px 0px'} onChange={handleEmail} value={email} />
          <Input
            type="password"
            title={'SENHA:'}
            margin={'32px 0px 0px'}
            onChange={handlePassword}
            value={password}
          />
          <Button
            loading={loading}
            type="primary"
            title={'ENTRAR'}
            margin="64px 0px 16px 0px"
            onClick={handleLogin} // Replaced onChange with onClick
          >
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
