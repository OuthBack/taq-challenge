import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.grey700};
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.green700};
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  margin: 8px 8px 8px 8px;

  img.character {
    border-radius: 14px;
  }
`;

export const TextContainer = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
