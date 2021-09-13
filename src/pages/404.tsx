import { useHistory } from "react-router";
import { Error } from "../components/templates/Error";

export function Error404() {
  const history = useHistory();

  return (
    <Error
      sendToPage={() => {
        history.push("/");
      }}
      buttonText="Voltar para a Home"
    >
      Erro 404 - Página não encontrada
    </Error>
  );
}
