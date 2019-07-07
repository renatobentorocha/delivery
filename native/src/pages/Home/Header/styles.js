import styled from 'styled-components';

export const Container = styled.View`
  height: 150px;
  width: 100%;
`;

export const PageBackGround = styled.ImageBackground``;

export const ContainerButton = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  padding: 20px 10px 0 10px;
`;

export const ButtonLeftIcon = styled.TouchableOpacity.attrs({})``;

export const Title = styled.Text`
  font-family: Helvetica-Bold;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
`;

export const ButtonRightIcon = styled.TouchableOpacity.attrs({})`
  background-color: #e5293e;
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
`;

export const Sign = styled.View.attrs({})`
  background-color: #ffc107;
  height: 13px;
  width: 13px;
  border-radius: 50;
  position: absolute;
  top: 0;
  right: 0;
`;
