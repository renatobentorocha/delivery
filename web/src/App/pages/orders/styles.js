import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.div`
  margin-bottom: 18px;
  font-family: Helvetica-Bold;
  font-size: 22px;
  color: #333333;
  font-weight: bold;
`;

export const Pedidos = styled.ul``;

export const ContainerPedido = styled.div`
  box-shadow: 0 0 20px #d1d1d1;
  width: 750px;
  margin-bottom: 15px;
  padding: 20px 0 20px 0;
  border-radius: 1%;
`;

export const Pedido = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0 20px 0 20px;
`;

export const Customer = styled.span`
  font-family: Helvetica;
  font-size: 18px;
  color: #0b2031;
  letter-spacing: 0;
  margin: 0 0 5px 0;
`;

export const Time = styled.span`
  font-family: Helvetica;
  font-size: 11px;
  color: #706e7b;
  letter-spacing: 0;
  line-height: 14px;
  margin: 0 0 5px 0;
`;

export const Price = styled.span`
  font-family: Helvetica-Bold;
  font-size: 16px;
  color: #0b2031;
  letter-spacing: 0;
  font-weight: bold;
  margin: 0 0 10px 0;
`;

export const Separator = styled.hr`
  border: 0;
  border-top: 1px solid #eeee;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 4%;
  border: solid 1px #eeee;
  align-items: center;
  margin: 15px 15px 15px 0;
  min-width: 200px;
`;

export const Image = styled.img`
  margin: 5px 5px 5px 10px;
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 15px;
  align-self: flex-start;
`;

export const Description = styled.span`
  font-family: Helvetica;
  font-size: 13px;
  color: #0b2031;
  letter-spacing: 0;
  margin: 7px 0 7px 0;
`;

export const Size = styled.span`
  font-family: Helvetica;
  font-size: 11px;
  color: #706e7b;
  letter-spacing: 0;
  line-height: 10.77px;
`;

export const Note = styled.span`
  font-family: Helvetica-Bold;
  font-size: 14px;
  color: #706e7b;
  letter-spacing: 0;
  margin-top: 15px;
`;
