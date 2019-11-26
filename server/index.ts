import { ApolloServer, gql } from "apollo-server-express";
import { importSchema } from "graphql-import";
import { join } from "path";
import express from "express";
import next from "next";

import resolvers from "./resolvers";

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const apollo = new ApolloServer({
  context: ({ req, res }) => ({ req, res }),
  resolvers,
  typeDefs: gql(importSchema(join(__dirname, "../schema.graphql")))
});

app.prepare().then(() => {
  const server = express();

  apollo.applyMiddleware({ app: server, path: `/graphql` });

  server.get("/test/:id", (req, res) => {
    return res.json({});
  });

  // default next behavior
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});

export {};
