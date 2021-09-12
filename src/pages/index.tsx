import { useQuery, gql } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";
import { Error } from "../components/templates/Error";
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
    if (!loading)
      setCharacters((previousCharacters) =>
        previousCharacters.concat(data?.characters.results!)
      );
  }, [data, loading]);

  useEffect(() => {
    getAllCharacters();
  }, [getAllCharacters]);

  if (error) {
    console.error(error);
    return <Error>Ops... Ocorreu um erro</Error>;
  }

  return <HomeList characters={characters} setPage={setPage} />;
}
