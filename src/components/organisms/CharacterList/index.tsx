import { Container, List, CharacterCardSkeleton } from "./styles";
import { useCharacter } from "../../../contexts/character";
import { CharacterCard } from "../../molecules/CharacterCard";

export function CharacterList() {
  const { characters, loading } = useCharacter();
  return (
    <Container>
      <h1 className="title">Lista de Pokemons</h1>
      <h5 className="subtitle">Total Visiveis: {characters.length}</h5>
      <List>
        {!loading
          ? characters.map((character) => (
              <CharacterCard
                name={character.name}
                status={character.status}
                image={character.image}
              />
            ))
          : characters.map((item, key) => <CharacterCardSkeleton key={key} />)}
      </List>
    </Container>
  );
}
