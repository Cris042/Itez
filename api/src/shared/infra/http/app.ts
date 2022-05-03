import "reflect-metadata";
import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";
import { resolve } from "path";

import '../database';
import "../../container";

import { AppError } from "../../errors/AppError";

const app = express();

app.use( express.json() );
app.use( router );

app.use('/files', express.static( resolve(__dirname, "..", "..", "..", "..", 'tmp', 'avatar') ) );

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => 
  {

    if (err instanceof AppError) 
    {

      return response.status(err.statusCode).json({
        message: err.message,
      });

    }

    return response.status(500).json(
    {

      status: "error",
      message: `Internal server error - ${err.message}`,

    });

  }
);

export { app };
