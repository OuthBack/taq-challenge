import { useHistory } from "react-router";
import { ICharacterDetailEpisodes } from "../../../types";
import Button from "../../atoms/Button";
import CharacterInfoCard from "../../molecules/CharacterInfoCard";
import { EpisodesInfo } from "../../organisms/EpisodesInfo";
import { ButtonContainer, Container } from "./styles";

export function CharacterInfo({
  name,
  image,
  episode,
  gender,
  location,
  origin,
  species,
}: ICharacterDetailEpisodes) {
  const history = useHistory();

  return (
    <Container>
      <ButtonContainer>
        <Button onClick={() => history.push("../")}>Menu Principal</Button>
      </ButtonContainer>

      <CharacterInfoCard
        name={name}
        image={image}
        gender={gender}
        location={location}
        origin={origin}
        species={species}
      />

      {episode && <EpisodesInfo episode={episode} />}
    </Container>
  );
}
