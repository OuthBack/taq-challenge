import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.grey700};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

export const InfoContainer = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  gap: 20px;
`;

export const ButtonContainer = styled.div`
  margin: 20px 0;
`;
