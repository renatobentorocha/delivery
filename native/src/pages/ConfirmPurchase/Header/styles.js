import styled from 'styled-components';

export const Container = styled.View`
  height: 150px;
  width: 100%;
`;

export const PageBackGround = styled.ImageBackground``;

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 0 20px;
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonLeftIcon = styled.TouchableOpacity.attrs({})``;

export const Title = styled.Text`
  font-family: Helvetica-Bold;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  padding-left: 10px;
`;

export const Price = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0;
  font-weight: bold;
`;
