import { useHistory } from "react-router";
import { CharacterInfo } from "../../components/templates/CharacterInfo";
import { Error } from "../../components/templates/Error";
import { Loading } from "../../components/templates/Loading";
import { useCharacter } from "../../hooks/useCharacter";

export default function Character() {
  const { character, error, loading } = useCharacter();
  const history = useHistory();
  const sendToPage = () => {
    history.go(0);
  };

  if (error) {
    console.error(error);
    return (
      <Error sendToPage={sendToPage} buttonText="Tentar novamente">
        Ops... Ocorreu um erro ao buscar dados do personagem
      </Error>
    );
  }

  return (
    <>
      {!loading && character ? (
        <CharacterInfo
          name={character.name}
          image={character.image}
          episode={character.episode}
          origin={character.origin}
          gender={character.gender}
          location={character.location}
          species={character.species}
        />
      ) : (
        <Loading />
      )}
    </>
  );
}
