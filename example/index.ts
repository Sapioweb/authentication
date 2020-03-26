import express, { json, NextFunction, Request, Response } from 'express';
import { router } from './router';
import { connect } from "mongoose";
import { config } from "dotenv";


const app = express();

config();

app.use(json());

connect(<string>process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('DB Connected'))
  .catch(() => console.log('Error connecting DB'));

app.use('', router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err)
  }

  return res.json({
    success: false,
    message: err.message,
    payload: req.body
  })
});

app.listen(3000, () => console.log('http://localhost:3000'));
