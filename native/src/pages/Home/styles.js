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
  justify-content: center;
  background-color: #ffff;
  border-radius: 10;
  margin: 5px 20px 5px 20px;
  padding: 5px 20px 5px 20px;
`;

export const Product = styled.TouchableOpacity.attrs({})`
  background-color: #ffff;
  flex-direction: row;
  align-items: center;
`;

export const Picture = styled.Image`
  width: 82px;
  height: 79px;
`;

export const Info = styled.View`
  margin-left: 10px;
`;

export const Title = styled.Text`
  font-family: Helvetica;
  font-size: 12px;
  color: #0b2031;
  letter-spacing: 0;
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
