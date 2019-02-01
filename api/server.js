import express from 'express';
import partyRoutes from './src/routes/partyRoute';
import officeRoutes from './src/routes/officeRoute';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).send({ message: 'Welcome to Politico API' });
});


app.listen(port);
console.log('app running on port ', port);

partyRoutes(app);
officeRoutes(app);
export default app;
