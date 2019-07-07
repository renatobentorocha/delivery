import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
`;

export const ConfirmationData = styled.View`
  padding: 0 20px 0 20px;
  position: relative;
  top: -60;
`;

export const Comments = styled.TextInput.attrs({
  elevation: 3,
  multiline: true,
  placeholder: 'Alguma observação?',
  textAlignVertical: 'top',
  paddingVertical: 20,
  paddingHorizontal: 25,
})`
  height: 150px;
  border-radius: 10;
  margin-bottom: 10px;

  font-family: Helvetica;
  font-size: 15px;
  color: #999999;
  letter-spacing: 0;
  background-color: #fff;
`;
export const ZipCode = styled.TextInput.attrs({
  elevation: 3,
  placeholder: 'Qual seu cep?',
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

export const Address = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
`;

export const Street = styled.TextInput.attrs({
  elevation: 3,
  placeholder: 'Rua',
  paddingHorizontal: 25,
})`
  width: 230px;
  height: 55px;
  border-radius: 10;

  font-family: Helvetica;
  font-size: 15px;
  color: #999999;
  letter-spacing: 0;
  background-color: #fff;
`;

export const StreetNumber = styled.TextInput.attrs({
  elevation: 3,
  placeholder: 'Nº',
  paddingHorizontal: 25,
})`
  width: 80px;
  height: 55px;
  border-radius: 10;
  margin-left: 10px;

  font-family: Helvetica;
  font-size: 15px;
  color: #999999;
  letter-spacing: 0;
  background-color: #fff;
`;

export const District = styled.TextInput.attrs({
  elevation: 3,
  placeholder: 'Bairro',
  paddingHorizontal: 25,
})`
  height: 55px;
  border-radius: 10;

  font-family: Helvetica;
  font-size: 15px;
  color: #999999;
  letter-spacing: 0;
  background-color: #fff;
`;

export const Order = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-top: 20px;
`;

export const Checkout = styled.TouchableOpacity`
  height: 40px;
  width: 180px;
  background-color: #e5293e;
  border-radius: 50;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  font-family: Helvetica-Bold;
  font-size: 17px;
  font-weight: bold;
  color: #ffffff;
  letter-spacing: 0;
`;
