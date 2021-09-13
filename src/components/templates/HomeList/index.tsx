import { CharacterList } from "../../organisms/CharacterList";
import { Logo } from "../../atoms/Logo";
import { Container, ErrorContainer } from "./styles";
import { MiddleTitle } from "../../molecules/MiddleTitle";
import { usePaginateCharacters } from "../../../hooks/usePaginateCharacters";

export function HomeList() {
  const { characters, error, setPage, showError } = usePaginateCharacters();

  return (
    <Container>
      <Logo />
      <CharacterList characters={characters} error={error} setPage={setPage} />

      {showError && (
        <ErrorContainer>
          <MiddleTitle>There aren't more characters</MiddleTitle>
        </ErrorContainer>
      )}
    </Container>
  );
}
