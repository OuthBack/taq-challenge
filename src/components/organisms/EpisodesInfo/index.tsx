import { SubTitle } from "../../atoms/Subtitle";
import { Title } from "../../atoms/Title";
import { Container, Episodes } from "./styles";

interface Props {
  episode: {
    name: string;
  }[];
}

export function EpisodesInfo({ episode }: Props) {
  return (
    <Container>
      <Title>Episódios:</Title>

      <Episodes>
        {episode.map((episodeName, i) => (
          <li key={i}>
            <SubTitle>{episodeName.name}</SubTitle>
          </li>
        ))}
      </Episodes>
    </Container>
  );
}
