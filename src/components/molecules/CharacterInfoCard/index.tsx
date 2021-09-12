import { ICharacterDetail } from "../../../types";
import { MediumTitle } from "../../atoms/MediumTitle";
import { SubTitle } from "../../atoms/Subtitle";
import { Container } from "./styled";

export default function CharacterInfoCard({
  name,
  image,
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
      <SubTitle>
        Gender: <b>{gender}</b>
      </SubTitle>

      <SubTitle>
        Location: <b>{location.name}</b>
      </SubTitle>

      <SubTitle>
        Origin: <b>{origin.name}</b>
      </SubTitle>

      <SubTitle>
        Species: <b>{species}</b>
      </SubTitle>
    </Container>
  );
}
