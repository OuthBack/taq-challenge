import { useQuery, gql } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";
import { Error } from "../components/templates/Error";
import { HomeList } from "../components/templates/HomeList";
import { ICharacterIDStatus } from "../types";

const getAllCharactersQuery = gql`
  query {
    characters {
      results {
        name
        status
        image
        id
      }
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(getAllCharactersQuery);
  const [characters, setCharacters] = useState<ICharacterIDStatus[]>([]);

  const getAllCharacters = useCallback(() => {
    if (!loading) setCharacters(data.characters.results);
  }, [data, loading]);

  useEffect(() => {
    getAllCharacters();
  }, [data, loading, getAllCharacters]);

  if (error) {
    console.error(error);
    return <Error>Ops... Ocorreu um erro</Error>;
  }

  return <HomeList characters={characters} loading={loading} />;
}
