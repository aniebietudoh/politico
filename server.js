import express from 'express';
import partyRoutes from './src/routes/partyRoute';
import officeRoutes from './src/routes/officeRoute';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).send({ message: 'Welcome to Politico API' });
});


app.listen(3000);
console.log('app running on port ', 3000);

partyRoutes(app);
officeRoutes(app);
export default app;
