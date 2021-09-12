import { useHistory } from "react-router";
import { IChildren } from "../../../types";
import Button from "../../atoms/Button";
import { Title } from "../../atoms/Title";
import { Container } from "./styles";

export function Error({ children }: IChildren) {
  const history = useHistory();
  return (
    <Container>
      <Title>{children}</Title>
      <Button
        onClick={() => {
          history.go(0);
        }}
      >
        Tentar novamente
      </Button>
    </Container>
  );
}
