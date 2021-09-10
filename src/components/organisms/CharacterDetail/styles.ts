import styled from "styled-components";

export const Container = styled.div`
  margin-top: 5px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Episodes = styled.ul`
  display: flex;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.green700};
  padding: 30px;
  gap: 30px;
  flex-wrap: wrap;
  align-items: flex-start;

  li {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    li {
      width: auto;
    }
  }
`;
