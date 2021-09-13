import { useQuery, gql } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";
import { ICharacterIDStatus } from "../../types";

const getPaginateCharactersQuery = gql`
  query ($data: Int) {
    characters(page: $data) {
      results {
        name
        status
        image
        id
      }
    }
  }
`;

interface ICharacterResponse {
  characters: {
    results: ICharacterIDStatus[];
  };
}

export function usePaginateCharacters() {
  const [page, setPage] = useState(1);
  const [showError, setShowError] = useState<boolean>(false);
  const { loading, error, data } = useQuery<ICharacterResponse>(
    getPaginateCharactersQuery,
    {
      variables: { data: page },
    }
  );
  const [characters, setCharacters] = useState<ICharacterIDStatus[]>([]);

  const getPaginateCharacters = useCallback(() => {
    if (!loading && !error)
      setCharacters((previousCharacters) =>
        previousCharacters.concat(data?.characters.results!)
      );
  }, [data, loading, error]);

  const handleError = useCallback(() => {
    if (error) {
      if (error?.graphQLErrors[0].extensions?.response.status === 404)
        setShowError(true);
      else {
        console.error(error);
      }
    }
  }, [error]);

  useEffect(() => {
    handleError();
  }, [handleError]);

  useEffect(() => {
    getPaginateCharacters();
  }, [getPaginateCharacters]);

  return { characters, setPage, error, showError };
}
