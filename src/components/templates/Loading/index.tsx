import { Container } from "./styles";
import ReactLoading from "react-loading";

export function Loading() {
  return (
    <Container>
      <ReactLoading type="spin" color="#fff" height={"5%"} width={"5%"} />
    </Container>
  );
}
