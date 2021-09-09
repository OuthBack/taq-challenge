import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: process.env.REACT_APP_API,
  cache: new InMemoryCache(),
});

console.log("a:", process.env.REACT_APP_API);

const defaultExport = { client };

export default defaultExport;
