import { Container } from "./styles";
import ReactLoading from "react-loading";

export function Loading() {
  return (
    <Container>
      <ReactLoading
        className="loading"
        type="spin"
        color="#fff"
        height={"5%"}
        width={"5%"}
      />
    </Container>
  );
}
