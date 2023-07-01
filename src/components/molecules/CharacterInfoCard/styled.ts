import styled from "styled-components";

export const Container = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: ${(props) => props.theme.colors.grey700};
  padding-bottom: 20px;

  img.character {
    border-radius: 10px;
  }
`;
