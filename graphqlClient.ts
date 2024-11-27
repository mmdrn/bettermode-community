import { GraphQLClient } from "graphql-request";

// Create a GraphQL client instance with request interceptor to add auth token
const client = new GraphQLClient(import.meta.env.VITE_API_ORIGIN || "", {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_AUTH_TOKEN || ""}`, // Add token to Authorization header
    "Content-Type": "application/json",
  },
});

export default client;
