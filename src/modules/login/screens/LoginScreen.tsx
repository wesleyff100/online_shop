import { useState } from 'react';

import Button from '../../../shared/buttons/button/button';
import Input from '../../../shared/inputs/input';
import {
  Background,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    alert(username + ' ' + password);
  };

  return (
    <ContainerLoginScreen>
      <Background src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin>LOGIN</TitleLogin>
          <Input
            title={'USUARIO:'}
            margin={'32px 0px 0px'}
            onChange={handleUsername}
            value={username}
          />
          <Input
            type="password"
            title={'SENHA:'}
            margin={'32px 0px 0px'}
            onChange={handlePassword}
            value={password}
          />
          <Button
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
