import { ICharacter } from "../../../contexts/character";
import { Container, InnerContainer, TextContainer, TopText } from "./styles";

export function CharacterCard({ name, status, image }: ICharacter) {
  return (
    <Container>
      <InnerContainer>
        <img src={image} alt="Character" className="character" />

        <TextContainer>
          <TopText>
            <h5>{name}</h5>
          </TopText>

          <p>{status}</p>
        </TextContainer>
      </InnerContainer>
    </Container>
  );
}
