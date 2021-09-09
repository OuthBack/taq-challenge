import { useQuery, gql } from "@apollo/client";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
export type CharacterProps = {
  // characters: ;
  children: React.ReactNode;
};

export interface ICharacter {
  name: string;
  status: string;
  image: string;
}

type Context = {
  characters: ICharacter[];
  loading: boolean;
};

const getAllCharactersQuery = gql`
  query {
    characters {
      results {
        name
        status
        image
      }
    }
  }
`;

const Character = createContext<Context | null>(null);

export const CharacterProvider = ({ children }: CharacterProps) => {
  const { loading, error, data } = useQuery(getAllCharactersQuery);
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  const getAllCharacters = useCallback(() => {
    if (!loading) setCharacters(data.characters.results);
  }, [data, characters, loading]);

  useEffect(() => {
    getAllCharacters();
    console.log(error);
  }, [data, characters, loading]);

  return (
    <Character.Provider value={{ characters, loading }}>
      {children}
    </Character.Provider>
  );
};

export const useCharacter = () => {
  const context = useContext(Character);

  if (!context)
    throw new Error(
      "Character must be called from within the CharacterProvider"
    );

  return context;
};
