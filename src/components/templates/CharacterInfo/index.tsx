import { useHistory } from "react-router";
import { ICharacterEpisode } from "../../../contexts/character";
import { BigTitle } from "../../atoms/BigTitle";
import Button from "../../atoms/Button";
import { CharacterDetail } from "../../organisms/CharacterDetail";
import { Container, InfoContainer } from "./styles";

export function CharacterInfo({ name, image, episode }: ICharacterEpisode) {
  const history = useHistory();

  return (
    <Container>
      <Button onClick={() => history.push("../")}>Menu Principal</Button>
      <img
        src={image}
        alt={name}
        className="character"
        height={300}
        width={300}
      />
      <InfoContainer>
        <BigTitle>{name}</BigTitle>
        {episode && <CharacterDetail episode={episode} />}
      </InfoContainer>
    </Container>
  );
}
