import { ReactChild } from "react";

export interface IChildren {
  children?: ReactChild | ReactChild[];
}

export interface ICharacter {
  name: string;
  image: string;
}

export interface ICharacterEpisode extends ICharacter {
  episode: { name: string }[];
}

export interface ICharacterIDStatus extends ICharacter {
  id: number;
  status: string;
}

export interface ICharacterLoading {
  characters: ICharacterIDStatus[];
  loading: boolean;
}
