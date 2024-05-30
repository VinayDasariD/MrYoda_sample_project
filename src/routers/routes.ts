import express from 'express';
import bodyParser from 'body-parser';
import userDetailsRouter from './usersRouter'; // Adjust the import path as necessary

const app = express();
app.use(bodyParser.json());
app.use("/usersController", userDetailsRouter());

export default app;
