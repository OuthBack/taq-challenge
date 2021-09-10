import { ReactChild } from "react";

type stateNumberFunction = (previousState: number) => number;

export interface IChildren {
  children?: ReactChild | ReactChild[];
}

export interface ICharacter {
  name: string;
  image: string;
}

export interface ICharacterDetail extends ICharacter {
  species: string;
  gender: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
  episode: { name: string }[];
}

export interface ICharacterIDStatus extends ICharacter {
  id: number;
  status: string;
}

export interface ICharacters {
  characters: ICharacterIDStatus[];
}

export interface ICharacterLoadingSetPage extends ICharacters {
  setPage(func: stateNumberFunction): void;
}
