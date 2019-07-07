import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  height: 100%;
`;

export const ExtraContainer = styled.View`
  height: 80%;
`;

export const Products = styled.FlatList.attrs({})`
  position: relative;
  top: -80;
  width: 100%;
  flex-grow: 0;
  max-height: 55%;
`;

export const ProductContainer = styled.View`
  justify-content: center;
`;

export const Product = styled.View.attrs({
  elevation: 3,
})`
  background-color: #ffff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10;
  margin: 5px 20px 5px 20px;
  padding: 5px 20px 5px 20px;
`;

export const Picture = styled.Image`
  width: 82px;
  height: 79px;
`;

export const Info = styled.View`
  margin-left: 5px;
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

export const Price = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: #0b2031;
  letter-spacing: 0;
  font-weight: bold;
`;

export const Cancelar = styled.TouchableOpacity``;

export const Order = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  bottom: 35;
  margin: 0 20px 0 20px;
`;

export const AddShoppingCar = styled.TouchableOpacity`
  border-radius: 50;
  height: 40px;
  width: 40px;
  background-color: #d1d1d1;
  align-items: center;
  justify-content: center;
`;

export const Checkout = styled.TouchableOpacity`
  height: 40px;
  width: 200px;
  background-color: #e5293e;
  border-radius: 50;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonText = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 0;
`;
