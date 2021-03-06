import express, { Request, Response} from 'express';
import cookieSession from 'cookie-session';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['string']}));
app.use(router);

app.listen(5000, () => {
  console.log('Server listening on port 5000');
})