import { IChildren } from "../../../types";
import Button from "../../atoms/Button";
import { Title } from "../../atoms/Title";
import { Container } from "./styles";

interface IChildrenProps extends IChildren {
  sendToPage: () => any;
}

export function Error({ children, sendToPage }: IChildrenProps) {
  return (
    <Container>
      <Title>{children}</Title>
      <Button onClick={sendToPage}>Tentar novamente</Button>
    </Container>
  );
}
