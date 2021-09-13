import {
  Container,
  List,
  CharacterCardSkeleton,
  ButtonContainer,
} from "./styles";
import { CharacterCard } from "../../molecules/CharacterCard";
import { Title } from "../../atoms/Title";
import { SubTitle } from "../../atoms/Subtitle";

import { ICharacterLoadingSetPageError } from "../../../types";
import { useEffect, useState } from "react";
import { Loading } from "../../templates/Loading";
import { Sentinel } from "../../atoms/Sentinel";

export function CharacterList({
  characters,
  error,
  setPage,
}: ICharacterLoadingSetPageError) {
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const skeletonCardArray = Array.from({ length: 8 });

  useEffect(() => {
    setIsLoadingMore(false);
  }, [characters]);

  return (
    <Container>
      <Title>Character's List</Title>
      <SubTitle>Total visible: {characters.length}</SubTitle>
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
      {isLoadingMore && !error ? (
        <Loading />
      ) : (
        <ButtonContainer>
          <Sentinel
            callback={() => {
              if (!error) {
                setIsLoadingMore(true);
                setPage((previousValue) => previousValue + 1);
              }
            }}
          />
        </ButtonContainer>
      )}
    </Container>
  );
}
