import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const MainContainer = styled.View`
  flex: 1;
`;

export const Container = styled(LinearGradient).attrs({
  colors: ['rgba(255,255,255,0)', 'rgba(0,0,0,1)'],
})`
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 0 20px 0 20px;
  position: absolute;
`;

export const Logo = styled.Image`
  width: 72px;
  height: 72px;
  align-self: center;
  margin-bottom: 25px;
`;

export const Email = styled.TextInput.attrs({
  elevation: 3,
  placeholder: 'Seu e-mail',
  paddingHorizontal: 25,
})`
  height: 55px;
  border-radius: 10;
  margin-bottom: 10px;

  font-family: Helvetica;
  font-size: 15px;
  color: #999999;
  letter-spacing: 0;
  background-color: #fff;
`;

export const Password = styled.TextInput.attrs({
  elevation: 3,
  placeholder: 'Senha secreta',
  paddingHorizontal: 25,
  secureTextEntry: true,
})`
  height: 55px;
  border-radius: 10;
  margin-bottom: 10px;

  font-family: Helvetica;
  font-size: 15px;
  color: #999999;
  letter-spacing: 0;
  background-color: #fff;
`;

export const Button = styled.TouchableOpacity.attrs({})`
  height: 55px;
  border-radius: 10;
  background-color: #e5293e;

  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: Helvetica-Bold;
  font-weight: bold;
  font-size: 15px;
  color: #ffffff;
  letter-spacing: 0;
`;

export const HasLogin = styled.TouchableOpacity.attrs({})`
  height: 55px;
  align-items: center;
  justify-content: center;
`;

export const HasLoginText = styled.Text`
  font-family: Helvetica-Bold;
  font-weight: bold;
  font-size: 15px;
  color: #ffffff;
  letter-spacing: 0;
  margin-top: 5px;
`;

export const Error = styled.Text`
  font-family: Helvetica-Bold;
  font-weight: bold;
  font-size: 18px;
  color: #e5293e;
  letter-spacing: 0;
  margin-top: 15px;
`;
