import { ApolloServer, gql } from "apollo-server-express";
import { randomBytes } from "crypto";
import { importSchema } from "graphql-import";
import express from "express";
import session from "express-session";
import next from "next";
import getConfig from "next/config";
import { join } from "path";
import passport from "passport";
import { Strategy as RedditStrategy } from "passport-reddit";

import resolvers from "./resolvers";

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";

// initialize next
const app = next({ dev });
const handle = app.getRequestHandler();
const { serverRuntimeConfig } = getConfig(); // is undefined if next app is not init

// initialize passport
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

passport.use(
  new RedditStrategy(
    {
      clientID: serverRuntimeConfig.redditClientId,
      clientSecret: serverRuntimeConfig.redditClientSecret,
      callbackURL: serverRuntimeConfig.redditCallbackUrl
    },
    (accessToken, _refreshToken, profile, cb) => {
      const { id, name } = profile;
      return cb(null, {
        id,
        name,
        accessToken
      });
    }
  )
);

const apollo = new ApolloServer({
  context: ({ req, res }) => ({ req, res }),
  resolvers,
  typeDefs: gql(importSchema(join(process.cwd(), "schema.graphql")))
});

app.prepare().then(() => {
  const server = express();

  server.use(
    session({ secret: "keyboard cat", saveUninitialized: false, resave: false })
  );
  server.use(passport.initialize());
  server.use(passport.session());

  apollo.applyMiddleware({ app: server, path: `/graphql` });

  // reddit auth
  server.get("/login", (_req, res) => {
    res.redirect("/auth/reddit");
  });

  server.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  server.get("/auth/reddit", (req, res, next) => {
    // https://auth0.com/docs/protocols/oauth2/oauth-state
    req.session.state = randomBytes(32).toString("hex");

    passport.authenticate("reddit", {
      scope: ["history", "identity"],
      state: req.session.state
    })(req, res, next);
  });

  server.get("/auth/reddit/callback", (req, res, next) => {
    if (req.query.state == req.session.state) {
      passport.authenticate("reddit", {
        successRedirect: "/",
        failureRedirect: "/"
      })(req, res, next);
    } else {
      // TODO: better error state
      next(new Error());
    }
  });

  server.get("/service-worker.js", (req, res) => {
    res.sendFile(join(process.cwd(), ".next", "service-worker.js"));
  });

  // default next handler
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});

export {};
