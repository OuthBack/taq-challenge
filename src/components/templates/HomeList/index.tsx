import { ICharacterLoading } from "../../../types";
import { CharacterList } from "../../organisms/CharacterList";
import { Logo } from "../../atoms/Logo";
import { Container } from "./styles";

export function HomeList({ characters, loading }: ICharacterLoading) {
  return (
    <Container>
      <Logo />
      <CharacterList characters={characters} loading={loading} />
    </Container>
  );
}
