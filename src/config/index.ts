import { NextFunction, Request, Response } from "express";
import { GraphQLServer } from "graphql-yoga";
import Passport from "passport";
import { ExtractJwt, Strategy as JWTStrategy } from "passport-jwt";

import User from "../entities/user";
import schema from "../graphql";

function ensureEnvVars() {
  if (process.env.NODE_ENV !== "production") { require("dotenv").config(); }

  if (!process.env.SECRET_KEY) {
    throw new Error("ENV VAR SECRET_KEY must be set!");
  }
}

export default function configServer() {
  ensureEnvVars();

  Passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET_KEY as string,
  }, async (jwtPayload, done) => {
    try {
      const user = await User.findOneOrFail({ id: jwtPayload.id });
      return done(null, user);
    } catch (error) {
      return done(error, false);
    }
  }));

  const server = new GraphQLServer({
    schema,
    context: ({ request }) => {
      return {
        secretKey: process.env.SECRET_KEY as string,
        user: request.user,
      };
    },
  });
  server.use(async (req: Request, res: Response, next: NextFunction) => {
    if (req.headers.authorization) {
      return Passport.authenticate("jwt", { session: false })(req, res, next);
    } else {
      req.user = null;
      return next();
    }
  });

  return server;
}
