import { CharacterList } from "../../organisms/CharacterList";
import { Logo } from "../../organisms/Logo";
import { Container } from "./styles";

export function HomeList() {
  return (
    <Container>
      <Logo />
      <CharacterList />
    </Container>
  );
}
