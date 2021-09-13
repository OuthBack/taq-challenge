import { IChildren } from "../../../types";
import Button from "../../atoms/Button";
import { Title } from "../../atoms/Title";
import { Container } from "./styles";

interface IChildrenProps extends IChildren {
  sendToPage: () => any;
  buttonText: string;
}

export function Error({ children, sendToPage, buttonText }: IChildrenProps) {
  return (
    <Container>
      <Title>{children}</Title>
      <Button onClick={sendToPage}>{buttonText}</Button>
    </Container>
  );
}
