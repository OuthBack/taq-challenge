import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) => props.theme.colors.grey800};
  border: 1px solid ${(props) => props.theme.font.colors.green700};
  border-radius: 2px;
  color: ${(props) => props.theme.font.colors.blue400};
  font-weight: bold;
  padding: 5px;
  width: 100px;
  transition: 0.2s ease-in-out;

  :hover {
    background-color: ${(props) => props.theme.colors.green700};
  }
`;
