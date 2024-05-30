import express from 'express';
import routes from '../src/routers/routes';
import "reflect-metadata";

const app = express();
const port = 3000;

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
