import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    width: 600px;
  }

  @media screen and (min-width: 1080px) {
    width: 1000px;
  }
`;

export const Episodes = styled.ul`
  background-color: ${(props) => props.theme.colors.grey800};
  display: flex;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.colors.green700};
  padding: 30px;
  gap: 20px;
  flex-wrap: wrap;
  align-items: flex-start;

  li {
    width: 100%;
    h5 {
      width: 160px;
    }
  }

  @media screen and (min-width: 768px) {
    li {
      width: auto;
    }
  }
`;
