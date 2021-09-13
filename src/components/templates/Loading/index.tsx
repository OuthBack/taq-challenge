import { Container } from "./styles";
import ReactLoading from "react-loading";

export function Loading() {
  return (
    <Container>
      <ReactLoading
        className="loading"
        type="spin"
        color="#000"
        height={"5%"}
        width={"5%"}
      />
    </Container>
  );
}
