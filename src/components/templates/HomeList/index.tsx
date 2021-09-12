import { CharacterList } from "../../organisms/CharacterList";
import { Logo } from "../../atoms/Logo";
import { Container, ErrorContainer } from "./styles";
import { ICharacterLoadingSetPageError } from "../../../types";
import { MiddleTitle } from "../../molecules/MiddleTitle";
import { useCallback, useEffect, useState } from "react";

export function HomeList({
  characters,
  error,
  setPage,
}: ICharacterLoadingSetPageError) {
  const [showError, setShowError] = useState<boolean>(false);

  const handleError = useCallback(() => {
    if (error) {
      console.error(error);

      if (error?.graphQLErrors[0].extensions?.response.status === 404)
        setShowError(true);
    }
  }, [error]);

  useEffect(() => {
    handleError();
  }, [handleError]);

  return (
    <Container>
      <Logo />
      <CharacterList characters={characters} error={error} setPage={setPage} />

      {showError && (
        <ErrorContainer>
          <MiddleTitle>Não encontramos mais nenhum personagem</MiddleTitle>
        </ErrorContainer>
      )}
    </Container>
  );
}
