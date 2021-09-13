import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  width: 100%;
  display: flex;
  flex-direction: column;

  img.logo {
    margin: 0 auto;
    width: 300px;
    height: 120px;
  }

  @media screen and (min-width: 768px) {
    img.logo {
      width: auto;
      height: auto;
    }
  }
`;

export const ErrorContainer = styled.div`
  padding: 40px 0;
`;
