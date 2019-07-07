import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #0b2031;
`;

export const ButtonContainer = styled.View.attrs({
  elevation: 5,
})`
  width: 55px;
  height: 55px;
  border-radius: 50;
  flex-direction: row;

  align-items: center;
`;

export const ButtonLogout = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const LogoutIcon = styled(MaterialCommunityIcons).attrs({
  name: 'logout',
  size: 25,
  color: '#e5293e',
})`
  margin-top: 10px;
`;

export const ButtonHome = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const HomeIcon = styled(MaterialCommunityIcons).attrs({
  name: 'home-account',
  size: 25,
  color: '#e5293e',
})`
  margin-top: 10px;
`;
