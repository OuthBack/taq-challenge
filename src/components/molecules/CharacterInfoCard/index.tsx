import React from "react";
import { ICharacterDetail } from "../../../types";
import { BigTitle } from "../../atoms/BigTitle";
import { MediumTitle } from "../../atoms/MediumTitle";
import { SubTitle } from "../../atoms/Subtitle";
import { Container } from "./styled";

export default function CharacterInfoCard({
  name,
  image,
  episode,
  gender,
  location,
  origin,
  species,
}: ICharacterDetail) {
  return (
    <Container>
      <img
        src={image}
        alt={name}
        className="character"
        height={300}
        width={300}
      />
      <MediumTitle>{name}</MediumTitle>
      <SubTitle>Gender: {gender}</SubTitle>
      <SubTitle>Location: {location.name}</SubTitle>
      <SubTitle>Origin: {origin.name}</SubTitle>
      <SubTitle>Species: {species}</SubTitle>
    </Container>
  );
}
