import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4000;
const app: Express = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('<h3>working</h3>');
});

app.listen(PORT, () => console.log(`Server up on ${PORT} ⚡`));
