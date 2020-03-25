import express, { json } from 'express';
import { router } from './router';

const app = express();

app.use(json());

app.use('', router);

app.listen(3000, () => console.log('http://localhost:3000'));
