import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { settleExpenses } from './services';
import { PayoutsRouter } from './routes';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/payouts', PayoutsRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

export default app;