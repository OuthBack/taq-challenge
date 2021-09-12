import {
  Container,
  List,
  CharacterCardSkeleton,
  ButtonContainer,
} from "./styles";
import { CharacterCard } from "../../molecules/CharacterCard";
import { Title } from "../../atoms/Title";
import { SubTitle } from "../../atoms/Subtitle";

import { ICharacterLoadingSetPage } from "../../../types";
import { useEffect, useState } from "react";
import { Loading } from "../../templates/Loading";
import { Sentinel } from "../../atoms/Sentinel";

export function CharacterList({
  characters,
  setPage,
}: ICharacterLoadingSetPage) {
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const skeletonCardArray = [0, 1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    setIsLoadingMore(false);
  }, [characters]);

  return (
    <Container>
      <Title>Lista de Personagens</Title>
      <SubTitle>Total Visíveis: {characters.length}</SubTitle>
      <List>
        {characters.length === 0
          ? skeletonCardArray.map((item, i) => (
              <CharacterCardSkeleton key={i} />
            ))
          : characters.map((character) => (
              <CharacterCard
                name={character.name}
                status={character.status}
                image={character.image}
                id={character.id}
                key={character.id}
              />
            ))}
      </List>
      {isLoadingMore ? (
        <Loading />
      ) : (
        <ButtonContainer>
          <Sentinel
            callback={() => {
              setIsLoadingMore(true);
              setPage((previousValue) => previousValue + 1);
            }}
          />
        </ButtonContainer>
      )}
    </Container>
  );
}
