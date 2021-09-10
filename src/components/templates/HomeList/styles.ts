import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.grey700};
  width: 100%;
  display: flex;
  flex-direction: column;

  img.logo {
    margin: 0 auto;
  }
`;
