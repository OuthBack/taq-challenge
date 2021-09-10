import { useQuery, gql } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { CharacterInfo } from "../../components/templates/CharacterInfo";
import { Error } from "../../components/templates/Error";
import { Loading } from "../../components/templates/Loading";
import { ICharacterDetail } from "../../types";

const getCharacter = (id: string) => gql`
  query {
    character(id: 1) {
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

export default function Character() {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery(getCharacter(id));
  const [character, setCharacter] = useState<ICharacterDetail>();

  const getCharacterInfo = useCallback(() => {
    if (!loading) setCharacter(data.character);
  }, [loading, data]);

  useEffect(() => {
    getCharacterInfo();
  }, [loading, data, getCharacterInfo]);

  if (error) {
    console.error(error);
    return <Error>Ops... Ocorreu um erro</Error>;
  }

  return (
    <>
      {!loading && character ? (
        <CharacterInfo
          name={character.name}
          image={character.image}
          episode={character.episode}
          origin={character.origin}
          gender={character.gender}
          location={character.location}
          species={character.species}
        />
      ) : (
        <Loading />
      )}
    </>
  );
}
