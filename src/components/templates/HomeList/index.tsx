import { CharacterList } from "../../organisms/CharacterList";
import { Logo } from "../../atoms/Logo";
import { Container } from "./styles";
import { ICharacterLoadingSetPage } from "../../../types";

export function HomeList({
  characters,

  setPage,
}: ICharacterLoadingSetPage) {
  return (
    <Container>
      <Logo />
      <CharacterList characters={characters} setPage={setPage} />
    </Container>
  );
}
