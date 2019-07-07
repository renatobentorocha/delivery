import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
`;

export const Products = styled.FlatList.attrs({})`
  position: absolute;
  top: 75;
  width: 100%;
  flex: 1;
  height: 88%;
`;

export const ProductContainer = styled.View.attrs({
  elevation: 3,
})`
  background-color: #ffff;
  justify-content: center;
  align-items: center;
  border-radius: 10;
  width: 160px;
  height: 190px;
  margin: 5px 10px 5px 10px;
`;

export const Product = styled.TouchableOpacity`
  background-color: #ffff;
  align-items: center;
  justify-content: center;
`;

export const Picture = styled.Image``;

export const Info = styled.View`
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: #0b2031;
  letter-spacing: 0;
  text-align: center;
`;

export const Description = styled.Text`
  font-family: Helvetica;
  font-size: 11px;
  color: #706e7b;
  letter-spacing: 0;
  line-height: 14px;
  padding: 5px 0 5px 0;
  width: 190px;
`;

export const Time = styled.Text`
  font-family: Helvetica;
  font-size: 10px;
  color: #706e7b;
  letter-spacing: 0.46px;
`;
