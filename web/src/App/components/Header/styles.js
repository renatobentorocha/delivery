import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #181818;
  width: 100%;
  height: 100px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  margin: 0 251px 0 251px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 0 251px;

  img {
    height: 32px;
    width: 32px;
  }

  span {
    margin-left: 14px;
    font-family: Helvetica-Bold;
    font-size: 22px;
    color: #ffffff;
    letter-spacing: 0;
    font-weight: bold;
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 251px 0 0;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.span`
  font-family: Helvetica-Bold;
  font-size: 19px;
  font-weight: bold;
  color: #fff;
  align-self: flex-end;
`;

export const Logout = styled.div`
  opacity: 0.6;
  font-family: Helvetica;
  font-size: 17px;
  color: #ffffff;
  align-self: flex-end;

  &:hover {
    cursor: pointer;
  }
`;

export const Separator = styled.div`
  opacity: 0.4;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
  height: 36px;
  color: #ffffff;
  margin: 0 20px 0 20px;
`;

export const Shopping = styled.div`
  background-color: #e5293e;
  border-radius: 50%;
  height: 36px;
  width: 36px;

  display: flex;
  flex-direction: column;
`;

export const Sign = styled.div`
  background-color: #ffc107;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  align-self: flex-end;

  position: absolute;
  top: 28px;
`;

export const Bag = styled.img`
  align-self: center;
  position: absolute;
  top: 40px;
`;
