import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const MainContainer = styled.View`
  flex: 1;
`;

export const Container = styled(LinearGradient).attrs({
  colors: ['#242833', '#000'],
  opacity: 0.8,
})`
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 0 20px 0 20px;
  position: absolute;
  /* background-color: rgba(0, 0, 0, 0.3); */
`;

export const Logo = styled.Image`
  width: 72px;
  height: 72px;
  align-self: center;
  margin-bottom: 25px;
`;

export const Name = styled.TextInput.attrs({
  elevation: 3,
  placeholder: 'Nome completo',
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
`;
