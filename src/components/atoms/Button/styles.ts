import styled from "styled-components";

export const Container = styled.button`
  background-color: ${(props) => props.theme.colors.green300};
  border: 1px solid ${(props) => props.theme.font.colors.green700};
  border-radius: 2px;
  color: ${(props) => props.theme.font.colors.white};
  font-weight: bold;
  padding: 5px;
  width: 100px;

  :hover {
    background-color: ${(props) => props.theme.colors.green500};
  }
`;
