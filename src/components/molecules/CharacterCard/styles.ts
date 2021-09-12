import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.grey800};
  border-radius: 20px;
  cursor: pointer;
  width: 300px;
  margin: 0 auto;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.green700};
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;

  img.character {
    border-radius: 10px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: auto;
    height: 300px;
  }
`;

export const TextContainer = styled.div`
  border-radius: 10px;
  text-align: center;
  line-break: loose;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  @media screen and (min-width: 768px) {
    height: 100%;
    text-align: left;
    justify-content: center;
    align-items: initial;
  }
`;
