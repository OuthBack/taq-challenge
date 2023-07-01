import styled from "styled-components";

export const SubTitle = styled.h5<{ color?: string }>`
  line-height: 1.6;
  font-size: 14px;
  color: ${(props) => props.theme.font.colors.blue500};

  * {
    color: ${(props) => props.theme.font.colors.green200};
  }
`;
