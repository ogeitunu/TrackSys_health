// lib/apollo.js
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "YOUR_GRAPHQL_ENDPOINT", // Replace with your GraphQL server endpoint
  cache: new InMemoryCache(),
});

export default client;
