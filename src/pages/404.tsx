import { useHistory } from "react-router";
import { Error } from "../components/templates/Error";

export function Error404() {
  const history = useHistory();

  return (
    <Error
      sendToPage={() => {
        history.push("/");
      }}
      buttonText="Back to Home"
    >
      Erro 404 - Page not found
    </Error>
  );
}
