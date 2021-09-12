import { useQuery, gql } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";
import { HomeList } from "../components/templates/HomeList";
import { ICharacterIDStatus } from "../types";

const getAllCharactersQuery = gql`
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

export default function Home() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery<ICharacterResponse>(
    getAllCharactersQuery,
    {
      variables: { data: page },
    }
  );
  const [characters, setCharacters] = useState<ICharacterIDStatus[]>([]);

  const getAllCharacters = useCallback(() => {
    if (!loading && !error)
      setCharacters((previousCharacters) =>
        previousCharacters.concat(data?.characters.results!)
      );
  }, [data, loading, error]);

  useEffect(() => {
    getAllCharacters();
  }, [getAllCharacters]);

  return <HomeList characters={characters} setPage={setPage} error={error} />;
}
