import { useQuery, gql } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ICharacterDetailEpisodes } from "../../types";

const getCharacter = (id: string) => gql`
  query {
    character(id: ${id}) {
      name
      image
      species
      gender
      location {
        name
      }
      origin {
        name
      }
      episode {
        name
      }
    }
  }
`;

export function useCharacter() {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(getCharacter(id));
  const [character, setCharacter] = useState<ICharacterDetailEpisodes>();

  const getCharacterInfo = useCallback(() => {
    if (!loading) setCharacter(data?.character);
  }, [loading, data]);

  useEffect(() => {
    getCharacterInfo();
  }, [getCharacterInfo]);

  return { character, error, loading };
}
