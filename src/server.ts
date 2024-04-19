import express, { Request, Response } from 'express';
import morgan from 'morgan';
import router from './routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
  res.status(200);
  res.json({ message: 'Machete API' });
});

app.use('/api', router);

export default app;
