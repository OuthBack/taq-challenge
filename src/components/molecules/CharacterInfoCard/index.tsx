import { ICharacterDetail } from "../../../types";
import { MediumTitle } from "../../atoms/MediumTitle";
import { AlternativeSubTitle } from "../../atoms/AltenativeSubtitle";
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
      <AlternativeSubTitle>
        Gender: <b>{gender}</b>
      </AlternativeSubTitle>

      <AlternativeSubTitle>
        Location: <b>{location.name}</b>
      </AlternativeSubTitle>

      <AlternativeSubTitle>
        Origin: <b>{origin.name}</b>
      </AlternativeSubTitle>

      <AlternativeSubTitle>
        Species: <b>{species}</b>
      </AlternativeSubTitle>
    </Container>
  );
}
