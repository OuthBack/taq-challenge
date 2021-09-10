import { Container, List, CharacterCardSkeleton } from "./styles";
import { CharacterCard } from "../../molecules/CharacterCard";
import { Title } from "../../atoms/Title";
import { SubTitle } from "../../atoms/Subtitle";
import { ICharacterLoading } from "../../../types";

export function CharacterList({ characters, loading }: ICharacterLoading) {
  const skeletonCardArray = [0, 1, 2, 3];

  return (
    <Container>
      <Title>Lista de Personagens</Title>
      <SubTitle>Total Visíveis: {characters.length}</SubTitle>
      <List>
        {!loading
          ? characters.map((character, i) => (
              <CharacterCard
                name={character.name}
                status={character.status}
                image={character.image}
                id={character.id}
                key={character.id}
              />
            ))
          : skeletonCardArray.map((item, i) => (
              <CharacterCardSkeleton key={i} />
            ))}
      </List>
    </Container>
  );
}
