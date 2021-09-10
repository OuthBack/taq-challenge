import { ApolloProvider } from "@apollo/client";
import { client } from "../config";
import { ThemeProvider } from "styled-components";
import light from "../styles/themes/default";
import { IChildren } from "../types";

const AppProvider = ({ children }: IChildren) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={light}>{children}</ThemeProvider>
    </ApolloProvider>
  );
};

export default AppProvider;
