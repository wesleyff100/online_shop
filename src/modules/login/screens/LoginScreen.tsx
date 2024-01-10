import axios from 'axios';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    // Send a POST request
    await axios({
      method: 'post',
      url: 'http://localhost:8080/auth',
      data: {
        email: email,
        password: password,
      },
    })
      .then((result) => {
        alert('Login realizado com sucesso');
        console.log(result.data.accessToken);
      })
      .catch((error) => {
        alert(' - Usuario ou senha invalidos');
        console.log(error);
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
