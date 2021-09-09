import { ApolloProvider } from "@apollo/client";
import { client } from "../config";
import { CharacterProvider, CharacterProps } from "./character";
import { ThemeProvider } from "styled-components";
import light from "../styles/themes/default";

const AppProvider = ({ children }: CharacterProps) => {
  return (
    <ApolloProvider client={client}>
      <CharacterProvider>
        <ThemeProvider theme={light}>{children}</ThemeProvider>
      </CharacterProvider>
    </ApolloProvider>
  );
};

export default AppProvider;
