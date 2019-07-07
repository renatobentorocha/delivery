import styled from 'styled-components';
import fundo from '../../assets/images/login/fundo.jpg';

export const Container = styled.div`
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 1)),
    url(${fundo});
  background-size: cover;
  background-size: 100%;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
`;

export const LoginContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img.attrs({})`
  height: 72px;
  width: 72px;
  margin-bottom: 35px;
`;

export const Email = styled.input`
  height: 48px;
  width: 370px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: solid 1px #fff;

  font-family: Helvetica;
  font-size: 18px;
  color: #999999;
  letter-spacing: 0;

  padding-left: 20px;
`;

export const Password = styled.input`
  height: 48px;
  width: 370px;
  margin-bottom: 10px;
  border-radius: 8px;
  border: solid 1px #fff;

  font-family: Helvetica;
  font-size: 18px;
  color: #999999;
  letter-spacing: 0;
  padding-left: 20px;
`;

export const Login = styled.button`
  height: 48px;
  width: 370px;
  margin-bottom: 10px;
  border-radius: 8px;
  background: #e5293e;
  border: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginText = styled.span`
  font-family: Helvetica-Bold;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 0;
`;
