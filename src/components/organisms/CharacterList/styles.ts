import styled from "styled-components";

export const Container = styled.main`
  padding: 20px;
  transition: ease-in-out 0.5s;
  height: 330px;
  background-color: ${(props) => props.theme.colors.grey700};

  h1.big-title {
    margin-top: 20px;
  }

  @media screen and (min-width: 1080px) {
    height: auto;
    flex: 1 1 0;
    padding: 40px;
  }
`;

export const List = styled.section`
  margin-top: 31px;
  display: grid;
  grid-gap: 15px;
  width: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 1080px) {
    padding-right: 20px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1600px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 2300px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const CharacterCardSkeleton = styled.div`
  width: 100%;
  height: 330px;
  background-color: ${(props) => props.theme.colors.green700};
  border-radius: 20px;
`;
