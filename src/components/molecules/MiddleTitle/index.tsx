import { IChildren } from "../../../types";
import { Title } from "../../atoms/Title";
import { Container } from "./styles";

export function MiddleTitle({ children }: IChildren) {
  return (
    <Container>
      <Title>{children}</Title>
    </Container>
  );
}
