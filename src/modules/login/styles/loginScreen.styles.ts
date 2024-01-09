import styled from 'styled-components';

export const Background = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const LogoImage = styled.img``;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #d9d9d9;
  width: 100%;
  height: 100vh;
  max-width: 646px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`;

export const LimitedContainer = styled.div`
  width: 100%;
  max-width: 498px;
  display: flex;
  justify-content: center;
`;
