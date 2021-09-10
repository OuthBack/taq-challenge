import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.grey700};
  display: flex;
  flex-direction: column;
  gap: 10px;

  img.character {
    border-radius: 4px;
  }
`;

export const InfoContainer = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 20px;
`;
