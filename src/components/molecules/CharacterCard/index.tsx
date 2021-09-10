import { useHistory } from "react-router";
import { ICharacterIDStatus } from "../../../types";
import { BigTitle } from "../../atoms/BigTitle";
import { StatusButton } from "../../atoms/StatusButton";

import { Container, InnerContainer, TextContainer } from "./styles";

export function CharacterCard({ name, status, image, id }: ICharacterIDStatus) {
  const history = useHistory();
  return (
    <Container
      onClick={() => history.push(`character/${id}`)}
      data-testid={`character-${id}`}
    >
      <InnerContainer>
        <img
          src={image}
          alt="Character"
          className="character"
          width={300}
          height={300}
        />

        <TextContainer>
          <BigTitle>{name}</BigTitle>

          <StatusButton status={status}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </StatusButton>
        </TextContainer>
      </InnerContainer>
    </Container>
  );
}
