import { useHistory } from "react-router";
import { ICharacterDetail } from "../../../types";
import { BigTitle } from "../../atoms/BigTitle";
import Button from "../../atoms/Button";
import { SubTitle } from "../../atoms/Subtitle";
import CharacterInfoCard from "../../molecules/CharacterInfoCard";
import { CharacterDetail } from "../../organisms/CharacterDetail";
import { ButtonContainer, Container, InfoContainer } from "./styles";

export function CharacterInfo({
  name,
  image,
  episode,
  gender,
  location,
  origin,
  species,
}: ICharacterDetail) {
  const history = useHistory();

  return (
    <Container>
      <ButtonContainer>
        <Button onClick={() => history.push("../")}>Menu Principal</Button>
      </ButtonContainer>

      <CharacterInfoCard
        name={name}
        image={image}
        episode={episode}
        gender={gender}
        location={location}
        origin={origin}
        species={species}
      />

      {episode && <CharacterDetail episode={episode} />}
    </Container>
  );
}
