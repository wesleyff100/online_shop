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
  return (
    <ContainerLoginScreen>
      <Background src="./background.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.png" />
          <TitleLogin>LOGIN</TitleLogin>
          <Input title={'USUARIO:'} />
          <Input title={'SENHA:'} />
          <Button type="primary" title={'ENTRAR'} margin="64px 0px 16px 0px">
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
