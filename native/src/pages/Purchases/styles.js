import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
`;

export const Items = styled.FlatList.attrs({})`
  position: relative;
  top: -80;
  width: 100%;
  flex-grow: 0;
  max-height: 90%;
`;

export const Item = styled.View.attrs({
  elevation: 3,
})`
  background-color: #ffff;
  border-radius: 10;
  margin: 20px 20px 20px 20px;
  padding: 20px 20px 20px 20px;
`;

export const Title = styled.Text`
  font-family: Helvetica;
  font-size: 12px;
  color: #0b2031;
  letter-spacing: 0;
`;

export const ItemDate = styled.Text`
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
