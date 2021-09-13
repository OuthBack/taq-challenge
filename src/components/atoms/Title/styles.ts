import styled from "styled-components";

export const Title = styled.h1`
  line-height: 1.55;
  font-size: clamp(23px, 2.2vw, 35px);
  color: ${(props) => props.theme.font.colors.blue500};
`;
